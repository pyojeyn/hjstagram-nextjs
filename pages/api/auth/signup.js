import User from "@/models/user";
import Joi from "joi";
import dbConnect from "@/utils/db/dbConnect";
import { serialize } from "cookie";

async function signupHandler(req, res) {
  if (req.method === "POST") {
    const schema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      username: Joi.string().required(),
    });

    const result = schema.validate(req.body);
    if (result.error) {
      console.log(result.error);
      res.status(400).message("data is Not Valid").body(result.error);
      return;
    }

    const { email, password, name, username } = req.body;

    try {
      await dbConnect();
      const exists = await User.findByUsername(username);
      if (exists) {
        res.status(409);
        return;
      }

      const user = new User({
        email,
        password,
        name,
        username,
      });

      await user.setPassword(password);
      await user.save();

      const token = user.generateToken();
      res.setHeader(
        "Set-Cookie",
        serialize("hjstagramToken", token, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
          path: "/", // 쿠키를 설정할 경로를 지정합니다. 원하는 경로로 변경할 수 있습니다.
        })
      );

      res.json({ user: user.serialize() });
    } catch (e) {
      throw (500, e);
    }
  }
}

export default signupHandler;
