import ModalProfileChange from "./modal-profile-change";
import ModalProfileFollow from "./modal-profile-follow";
import ModalProfileFollower from "./modal-profile-follower";
import styles from "./profile.module.css";
import { useState } from "react";
import Image from "next/image";
import ModalProfileGear from "./modal-profile-gear";
import { useSelector } from "react-redux";

const Profile = (props) => {
  console.log("Hello Profile Component!");
  console.log("props.user", props.user);

  console.log("props.user.profileurl", props.user.profileurl);

  const [gear, gearChange] = useState(false);

  const [isShowProfile, setIsShowProfile] = useState(false);

  const [isShowFollow, setIsShowFollow] = useState(false);

  const [isShowFollower, setIsShowFollower] = useState(false);

  const username = (
    <div className={styles.profileUsername}>
      {props.username}
      <Image
        className={styles.profileGear}
        src="/images/gear.png"
        alt="gear"
        width={30}
        height={30}
        onClick={() => {
          gearChange(!gear);
        }}
      />
    </div>
  );

  const mainProfileImage = (
    <div
      className={`${styles.profileProfileImageBox} ${styles.closefriendsProfileImageBox}`}
    >
      <Image
        className={styles.profileProfileImage}
        src={props.user.profileurl}
        alt="profileImage"
        width={30}
        height={30}
        onClick={() => {
          setIsShowProfile(!isShowProfile);
        }}
      />
    </div>
  );

  return (
    <>
      <div className={styles.profileProfileDiv}>
        <div className={styles.profileProfile}>
          {mainProfileImage}
          {username}
        </div>
      </div>

      <div className={styles.profileProfileDiv2}>
        <div className={styles.profileProfileText}>게시물 {props.postNum}</div>

        <div
          className={styles.profileProfileText}
          onClick={() => {
            setIsShowFollower(!isShowFollower);
          }}
        >
          팔로워 {props.followerNum}
        </div>

        <div
          className={styles.profileProfileText}
          onClick={() => {
            setIsShowFollow(!isShowFollow);
          }}
        >
          팔로우 {props.followingNum}
        </div>
      </div>

      <div className={styles.profileProfileDiv2}>
        <div className={styles.profileProfileName}>{props.name}</div>
      </div>

      <div className={styles.profileProfileDiv2}>
        <div className={styles.profileProfileName}>{props.introment}</div>
      </div>

      {gear && <ModalProfileGear closeGear={() => gearChange(!gear)} />}

      {isShowProfile && (
        <ModalProfileChange
          closeProfile={() => setIsShowProfile(!isShowProfile)}
        />
      )}

      {isShowFollow && (
        <ModalProfileFollow
          closeFollow={() => setIsShowFollow(!isShowFollow)}
        />
      )}

      {isShowFollower && (
        <ModalProfileFollower
          closeFollow={() => setIsShowFollower(!isShowFollower)}
        />
      )}
    </>
  );
};

export default Profile;
