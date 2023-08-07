import Link from "next/link";
import styles from "./profile.module.css";

const ModalProfileGear = (props) => {
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalProfileGear}>
          <div className={styles.modalProfileGearText}>
            <div>
              <Link href="/changepassword" className={styles.modalTextBlue}>
                <p className={styles.modalProfileGearP}>비밀번호 변경</p>
              </Link>
            </div>

            <div>
              <Link href="/edit-profiles" className={styles.modalTextBlue}>
                <p className={styles.modalProfileGearP}>프로필 편집</p>
              </Link>
            </div>

            <div>
              {/* <Link href="/api/auth/logout" className={styles.modalTextBlue}> */}
              <p className={styles.modalProfileGearP} onClick={props.onLogout}>
                로그아웃
              </p>
              {/* </Link> */}
            </div>

            <div>
              <p className={styles.modalProfileGearP} onClick={props.closeGear}>
                취소
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProfileGear;
