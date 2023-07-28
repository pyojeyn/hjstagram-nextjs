import styles from "../main/main.module.css";
import Link from "next/link";
import useHttp from "@/hooks/use-http";
import { useRouter } from "next/router";

const ModalMainProfile = (props) => {
  const router = useRouter();

  const { isLoading, error, sendRequest } = useHttp();
  const onClickHandler = () => {
    sendRequest({
      url: "/api/auth/logout",
      method: "POST",
    });

    router.push("/");
  };

  return (
    <>
      <div className={styles.modal_background_white}>
        <div className={styles.modal_main_profile}>
          <div className={styles.modal_main_profile_text}>
            <div>
              <Link href="profiles" className={styles.modal_text_blue}>
                <p>프로필</p>
              </Link>
            </div>

            <div onClick={onClickHandler}>
              <p className={styles.modal_text_blue}>로그아웃</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMainProfile;
