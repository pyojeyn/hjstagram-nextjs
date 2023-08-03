import { Container, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./header.module.css";

// import useHttp from "@/hooks/use-http";

import ModalMainProfile from "../main/ModalMainProfile";
// import styles from "../main/main.module.css";

const Header = (props) => {
  const [modal, modalChange] = useState(false);
  const [modalHeart, modalHeartChange] = useState(false);
  //   const [profile, setProfile] = useState("img/default_profile.png");
  const [profile, setProfile] = useState("/images/default_profile.png");

  const closeModal = () => {
    modalChange(!modal);
  };

  const closeModalHeart = () => {
    modalHeartChange(!modalHeart);
  };

  // -TODO props.profile 가 undefined 이거나 null 일때 다시 생각해보아야 함
  if (props.profile) {
    setProfile(props.profile);
  }
  const mainProfileImage = (
    <Image
      className={styles.mainProfileImageBox}
      src={profile}
      alt="main_profileImage"
      width={37}
      height={37}
    />
  );

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div>
            <Link href="/">
              <Image
                className={styles.mainInstagramLogo}
                src={"/images/instagramlogo.png"}
                alt="instagramlogo"
                width={105}
                height={41}
              />
            </Link>
          </div>

          <div className={styles.navlinkDiv}>
            <Link href="/">
              <Image
                className={styles.headerHome}
                src={"/images/header_home.png"}
                alt="header_home"
                width={37}
                height={37}
              />
            </Link>

            <Link href="/main_edit_file">
              <Image
                className={styles.headerEdit}
                src={"/images/header_edit.png"}
                alt="header_edit"
                width={37}
                height={37}
              />
            </Link>

            <div
              className={styles.navbarScrollingDropdown}
              onClick={() => {
                modalChange(!modal);
              }}
            >
              {mainProfileImage}
            </div>
          </div>
        </div>
      </header>

      {modal && (
        <ModalMainProfile closeModal={closeModal} onLogout={props.onLogout} />
      )}
    </>
  );
};

export default Header;
