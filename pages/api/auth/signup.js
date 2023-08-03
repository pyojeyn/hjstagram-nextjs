import User from "@/models/user";
import Joi from "joi";
import { serialize } from "cookie";
import { dbConnect, dbClose } from "@/utils/db/dbConnect";

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
      //   res.status(400).message("data is Not Valid").body(result.error);
      res
        .status(400)
        .json({ message: "Data is Not Valid!", error: result.error });
      return;
    }

    const { email, password, name, username } = req.body;

    try {
      await dbConnect();
      console.log("signup, MongoDB connected!");

      const existsByUsername = await User.findByUsername(username);
      if (existsByUsername) {
        console.log("existsByUsername");
        res.status(409).json({ message: "Username already exist!" });
        return;
      }

      const existsByEmail = await User.findByEmail(email);
      if (existsByEmail) {
        console.log("existsByEmail");
        res.status(409).json({ message: "Email already exist!" });
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
    } finally {
      await dbClose();
      console.log("signup, MongoDB closed!");
    }
  }
}

export default signupHandler;
