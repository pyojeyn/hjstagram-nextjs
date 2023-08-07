import styles from "./profile.module.css";
import ModalEditProfile from "./modal-edit-profile";
import { useState } from "react";

// use-input 훅 사용.
const EditProfile = (props) => {
  const [showModal, isShowModal] = useState(false);

  const onSubmitHandler = (event) => {
    console.log("안녕");
    event.preventDefault();
  };

  return (
    <>
      <div className={styles["edit-wrapper"]}>
        <div className={`${styles["edit-inner"]} ${styles.editProfileDiv}`}>
          <div
            className={`${styles.profileProfileDiv} ${styles.editprofileProfileDiv}`}
          >
            <div className={`${styles.profileProfile}`}>
              {/* {mainProfileImage}
            {username} */}
            </div>
          </div>

          <form onSubmit={onSubmitHandler}>
            <div
              className={`${styles["form-group"]} ${styles.editprofileForm}`}
            >
              <label className={styles.editprofileLabel}>이름</label>
              <input type="text" className="form-control" placeholder="이름" />
            </div>

            <div
              className={`${styles["form-group"]} ${styles.editprofileForm}`}
            >
              <label className={styles.editprofileLabel}>사용자이름</label>
              <input
                type="text"
                className="form-control"
                placeholder="사용자이름"
              />
            </div>

            <div
              className={`${styles["form-group"]} ${styles.editprofileForm}`}
            >
              <label className={styles.editprofileLabel}>이름</label>
              <textarea
                type="text"
                className={`form-control ${styles.changepasswordTextarea}`}
              />
            </div>

            <div className="form-group"></div>

            <button className={`btn btn-primary ${styles.editprofileBtn}`}>
              제출
            </button>

            <p
              className={styles.editprofileForgotPassword}
              onClick={() => {
                isShowModal(!showModal);
              }}
            >
              회원탈퇴 하시겠습니까?
            </p>
          </form>
        </div>
      </div>
      {showModal && <ModalEditProfile closeModal={closeModal} />}
    </>
  );
};

export default EditProfile;
