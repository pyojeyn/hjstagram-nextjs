import { serialize } from "cookie";

const logoutHandler = async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    serialize("hjstagramToken", "", { expires: new Date(0) })
  );
  res.status(204).end();

  console.log("08-06 Logout");
};

export default logoutHandler;
