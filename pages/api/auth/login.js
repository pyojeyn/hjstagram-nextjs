import User from "@/models/user";
import { dbConnect, dbClose } from "@/utils/db/dbConnect";
import { serialize } from "cookie";

// /api/auth/login

async function loginHandler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(401).json({ message: "Please enter username or password" });
      return;
    }

    try {
      await dbConnect();
      console.log("login, mongoDB connected!");

      const user = await User.findByUsername(username);
      if (!user) {
        res.status(401).json({ message: "Username not found!" });
        return;
      }

      const valid = await user.checkPassword(password);

      if (!valid) {
        res.status(401).json({ message: "Password is not valid!" });
        return;
      }

      const token = user.generateToken();

      res.setHeader(
        "Set-Cookie",
        serialize("hjstagramToken", token, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
          path: "/",
        })
      );

      // 비밀번호 맞으면 직렬화
      res.json({ user: user.serialize() });
    } catch (e) {
      throw (500, e);
    } finally {
      await dbClose();
      console.log("login, MongoDB closed!");
    }
  }
}

export default loginHandler;
