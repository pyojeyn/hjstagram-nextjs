import Head from "next/head";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/router";

// 여기 메인페이지임
function LoginPage(props) {
  const router = useRouter();

  async function onLoginHandler(enteredLogin) {
    console.log("enderedLogin", enteredLogin);
    const repsonse = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(enteredLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await repsonse.json();

    console.log("data", data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Hello Hjstagram!👩</title>
        <meta name="hjstagram" content="use your story with hjstagram!" />
      </Head>
      <LoginForm onLogin={onLoginHandler} />
    </>
  );
}

export default LoginPage;
