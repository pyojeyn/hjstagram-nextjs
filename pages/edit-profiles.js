import Head from "next/head";
import EditProfile from "@/components/profile/profile-edit";
import Header from "@/components/common/header";
function EditProfilePage() {
  return (
    <>
      <Head>
        <title>Hello Hjstagram!👩</title>
        <meta name="hjstagram" content="this is your edit profile" />
      </Head>
      <Header />
      <EditProfile />
    </>
  );
}

export default EditProfilePage;
