import Head from "next/head";
import Header from "@/components/common/header";
import { fetchUserData } from "@/store/user-action";
// 그럼 여기서 디스패치? 그거 호출쓰 ?
import { useDispatch, useSelector } from "react-redux";
import Profile from "@/components/profile/profile";

function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  // 여기서 user 가 또 바뀔때 그 팔로잉 팔로우 수 게시물수 바꿔주는 API 해야됨.

  const user = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>Hello Hjstagram!👩</title>
        <meta name="hjstagram" content="this is your profile" />
      </Head>
      <Header />
      <Profile user={user} />
    </>
  );
}

export default ProfilePage;
