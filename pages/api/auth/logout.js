import { serialize } from "cookie";

const logoutHandler = async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    serialize("hjstagramToken", "", { expires: new Date(0) })
  );
  res.status(204).end();

  console.log("로그아웃된거 맞아 ?");
};

export default logoutHandler;
