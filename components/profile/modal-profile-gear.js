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
                <p>비밀번호 변경</p>
              </Link>
            </div>

            <div>
              <Link href="/editprofile" className={styles.modalTextBlue}>
                <p>프로필 편집</p>
              </Link>
            </div>

            <div>
              <Link href="/" className={styles.modalTextBlue}>
                <p>로그아웃</p>
              </Link>
            </div>

            <div>
              <p onClick={props.closeGear}>취소</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProfileGear;
