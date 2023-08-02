import Head from "next/head";
import MainPage from "@/components/main/MainPage";
import Header from "@/components/common/header";
import { useRouter } from "next/router";

// 여기 메인페이지임
function HomePage(props) {
  const router = useRouter();

  async function onLogoutHandler() {
    console.log("Logout!");
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const status = response.status;
    console.log("logout.status", status);

    if (status === 204) {
      router.push("/");
    }
  }

  return (
    <>
      <Head>
        <title>Hello Hjstagram!👩</title>
        <meta name="hjstagram" content="use your story with hjstagram!" />
      </Head>
      {/* <MainPage profile={props.profile} /> */}
      <Header onLogout={onLogoutHandler} />
    </>
  );
}

export async function getStaticProps() {
  //   const profileResponse = await fetch("/api/auth/check");
  //   const profile = await profileResponse.json().profileurl;
  const profile = "/images/kuromi.png";

  return {
    props: {
      profile,
    },
  };
}

export default HomePage;
