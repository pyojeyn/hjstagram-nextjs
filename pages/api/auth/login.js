import User from "@/models/user";
import { MongoClient } from "mongodb";
import context from "react-bootstrap/esm/AccordionContext";

// /api/auth/login

async function loginHandler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(401).json({ message: "Please enter username or password" });
      return;
    }

    try {
      const user = await User.finByUsername(username);
      if (!user) {
        res.status(401).message("username not found!");
        return;
      }

      const valid = await user.checkPassword(password);

      if (!valid) {
        res.status(401).message("password not valid!");
        return;
      }

      // 비밀번호 맞으면 직렬화
      res.body = user.serialize();

      const token = user.generateToken();

      res.cookies.set("hjstagramToken", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });
    } catch (e) {}
  }
}

export default loginHandler;
