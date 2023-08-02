import styles from "./modalmainprofile.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const ModalMainProfile = (props) => {
  const onClickHandler = () => {
    props.onLogout();
  };

  return (
    <>
      <div className={styles.modalBackgroundWhite} onClick={props.closeModal}>
        <div className={styles.modalMainProfile}>
          <div className={styles.modalMainProfileText}>
            <div>
              <Link href="profiles" className={styles.modalTextBlue}>
                <p className={styles.myParagraph}>프로필</p>
              </Link>
            </div>

            <div onClick={onClickHandler}>
              <p className={styles.myParagraph}>로그아웃</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMainProfile;
