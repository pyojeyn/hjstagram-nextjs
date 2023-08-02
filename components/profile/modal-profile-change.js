import styles from "./profile.module.css";
import Link from "next/link";

const ModalProfileChange = (props) => {
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalMainProfilechange}>
          <div className={styles.modalMainPointText}>
            <div>
              <Link href="/profile-change" className={styles.modalTextBlue}>
                <p className={styles.modalTextBlue2}>프로필 사진 변경</p>
              </Link>
            </div>

            <div>
              <p onClick={props.closeProfile}>취소</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProfileChange;
