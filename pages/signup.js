import SignUp from "@/components/auth/Signup";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

function SignUpPage(props) {
  const router = useRouter();

  const [signupStatus, setSignupStatus] = useState({
    status: null,
    message: "",
  });

  async function onSignupHandler(enteredSignup) {
    console.log("enteredSignup", enteredSignup);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(enteredSignup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const status = response.status;

    if (status !== 200) {
      setSignupStatus({ status: status, message: data.message });
      return;
    }

    router.push("/main");
  }

  return (
    <>
      <Head>
        <title>Sign up Hjstagram!💫</title>
        <meta name="hjstagram" content="sign up hjstagram!"></meta>
      </Head>
      <SignUp onSignup={onSignupHandler} signupStatus={signupStatus} />
    </>
  );
}

export default SignUpPage;
