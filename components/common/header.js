import { Container, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// import useHttp from "@/hooks/use-http";

import ModalMainProfile from "../main/ModalMainProfile";
import styles from "../main/main.module.css";

const Header = (props) => {
  const [modal, modalChange] = useState(false);
  const [modalHeart, modalHeartChange] = useState(false);
  //   const [profile, setProfile] = useState("img/default_profile.png");
  const [profile, setProfile] = useState("/images/kuromi.png");

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
    <div className={styles.main_profileImage_box}>
      <Image
        className={styles.main_profileImage}
        src={profile}
        alt="main_profileImage"
        width={105}
        height={105}
      />
    </div>
  );

  return (
    <>
      <header className={styles.navber}>
        <Container>
          <div className="navbar_Container">
            <div className="NavbarBrand">
              <Link href="/">
                <Image
                  className={styles.main_instagram_logo}
                  src={"/images/kuromi.png"}
                  alt="instagramlogo"
                  width={105}
                  height={105}
                />
              </Link>
            </div>
            <div aria-controls="navbarScroll">
              <div id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "80" }}
                  navbarScroll
                >
                  <div className={styles.navlink_div}>
                    <Link href="/main">
                      <Image
                        className={styles.header_home}
                        src={"/images/kuromi.png"}
                        alt="header_home"
                        width={105}
                        height={105}
                      />
                    </Link>

                    <Link href="/main_edit_file">
                      <Image
                        className={styles.header_edit}
                        src={"/images/kuromi.png"}
                        alt="header_edit"
                        width={105}
                        height={105}
                      />
                    </Link>

                    <div
                      className={styles.navbarScrollingDropdown}
                      onClick={() => {
                        modalChange(true);
                      }}
                    >
                      {mainProfileImage}
                    </div>
                  </div>
                </Nav>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {modal === true ? <ModalMainProfile closeModal={closeModal} /> : null}
    </>
  );
};

export default Header;
