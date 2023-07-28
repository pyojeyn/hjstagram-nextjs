import Head from "next/head";
import MainPage from "@/components/main/MainPage";
import useHttp from "@/hooks/use-http";
import Header from "@/components/common/header";

// 여기 메인페이지임
function HomePage(props) {
  const { isLoading, error, sendRequest } = useHttp();

  return (
    <>
      <Head>
        <title>Hello Hjstagram!👩</title>
        <meta name="hjstagram" content="use your story with hjstagram!" />
      </Head>
      {/* <MainPage profile={props.profile} /> */}
      <Header />
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
