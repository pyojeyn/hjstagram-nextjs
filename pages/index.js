import Head from "next/head";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/router";
import { useState } from "react";

// 여기 메인페이지임
function LoginPage(props) {
  const router = useRouter();

  const [loginStatus, setLoginStatus] = useState({
    status: null,
    message: "",
  });

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
    const status = repsonse.status;

    if (status !== 200) {
      setLoginStatus({ status, message: data.message });
      return;
    }

    router.push("/main");
  }

  return (
    <>
      <Head>
        <title>Hello Hjstagram!👩</title>
        <meta name="hjstagram" content="use your story with hjstagram!" />
      </Head>
      <LoginForm onLogin={onLoginHandler} loginStatus={loginStatus} />
    </>
  );
}

export default LoginPage;
