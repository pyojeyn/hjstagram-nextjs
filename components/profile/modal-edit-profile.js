import styles from "./profile.module.css";

function ModalEditProfile(props) {
  const outMemberHandler = () => {};

  return (
    <>
      <div className={styles.modalBackground}>
        <div
          className={`${styles.modalMainpPoint} ${styles.modalEditprofilePoint}`}
        >
          <div className={`${styles.modalMainPointText}`}>
            <div>
              <p>정말로 회원탈퇴 하시겠습니까?</p>
            </div>

            <button
              className={`btn btn-primary ${styles.modalEditprofileBtn}`}
              onClick={outMemberHandler}
            >
              동의
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditProfile;
