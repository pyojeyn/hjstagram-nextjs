import User from "@/models/user";
import Joi from "joi";
import dbConnect from "@/utils/db/dbConnect";

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

      res.body(user.serialize());

      const token = user.generateToken();
      res.cookies.set("hjstagramToken", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });
    } catch (e) {
      throw (500, e);
    }
  }
}

export default signupHandler;
