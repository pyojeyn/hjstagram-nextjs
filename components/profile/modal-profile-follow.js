import styles from "./profile.module.css";
import Image from "next/image";

const ModalProfileFollow = (props) => {
  return (
    <>
      <div
        className={`${styles.modalBackground} ${styles.modalBackgroundWhite}`}
      >
        <div className={styles.modalProfileFollow}>
          <Image
            className={styles.closeButton}
            src="images/close.png"
            alt="closeModalImage"
            width={30}
            height={30}
            onClick={props.closeFollow}
          />
          <div className={styles.modalProfileFollowText}>
            <p className={styles.followingText}>팔로잉</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProfileFollow;
