import SignUp from "@/components/auth/Signup";
import Head from "next/head";
import { useRouter } from "next/router";

function SignUpPage(props) {
  const router = useRouter();

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

    console.log("data", data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Sign up Hjstagram!💫</title>
        <meta name="hjstagram" content="sign up hjstagram!"></meta>
      </Head>
      <SignUp onSignup={onSignupHandler} />
    </>
  );
}

export default SignUpPage;
