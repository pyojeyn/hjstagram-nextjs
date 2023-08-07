import Head from "next/head";
import Header from "@/components/common/header";
import Profile from "@/components/profile/profile";
import { wrapper } from "@/store";
import jwt from "jsonwebtoken";
import { userActions } from "@/store/user-slice";
import ProfilePost from "@/components/profile/profile-post";
import { useRouter } from "next/router";

/**
 *  Redux 스토어의 상태가 변경되면
 *  해당 상태를 구독하는 컴포넌트들이 재렌더링됩니다.
 *  Redux는 단방향 데이터 흐름을 따르는 상태 관리 라이브러리로,
 *  상태의 변화를 감지하고 이에 따라 컴포넌트를 업데이트합니다.
 */

function ProfilePage(props) {
  // 여기서 user 가 또 바뀔때 그 팔로잉 팔로우 수 게시물수 바꿔주는 API 해야됨.

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
        <meta name="hjstagram" content="this is your profile" />
      </Head>
      <Header />
      <Profile user={props.user} onLogout={onLogoutHandler} />
      <ProfilePost />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const token = req.cookies.hjstagramToken;

      const user = jwt.verify(token, "!@#$%^&*()");
      //   await store.dispatch(fetchUserData({ user })); // fetchUserData 사용 안할 것임
      const userBefore = store.getState().user.user;
      console.log("user 값 초기화 전", userBefore);
      store.dispatch(userActions.replaceUser({ user }));

      const userAfter = store.getState().user.user;
      console.log("user 값 초기화 후 ", userAfter);
      return {
        props: {
          user,
        },
      };
    }
);

export default ProfilePage;
