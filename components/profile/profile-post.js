import styles from "./profile-post.module.css";
import Image from "next/image";
import { useState } from "react";

const ProfilePost = (props) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  return (
    <>
      <hr className={styles.profileHr}></hr>

      <div className={styles.profileDivBox}>
        {props.posts &&
          props.posts.map((post) => {
            return (
              <div className={styles.profileDivImgbox} key={post._id}>
                <Image
                  className={styles.profileDivImg}
                  src={post.fileurls[0]}
                  alt={post.fileurls[0]}
                  onClick={() => {
                    console.log("what is saveIDandModal?");
                  }}
                />
              </div>
            );
          })}
      </div>

      {isShowDeleteModal && (
        <div className={styles.modalBackground}>
          <div
            className={`${styles.modalMainPoint} ${styles.modalEditprofilePoint}`}
          >
            <div className={styles.modalMainPointText}>
              <div>
                <p className={styles.modalMainP}>게시물을 삭제 하시겠습니까?</p>
              </div>

              <button
                onClick={console.log("삭제하는 함수 pages 에 만들까")}
                className={`btn btn-primary ${styles.modalEditprofileBtn}`}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePost;
