import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";

// 각각 input 들에 onChange, Blur 해놔야함. use-input 훅 이용

function SignUp(props) {
  const onSubmitHandler = () => {};

  return (
    <>
      <div className={styles["auth-wrapper"]}>
        <div className={styles["auth-inner"]}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles["login-instagram-logo"]}>
              <Image
                className={styles["login-instagram-logo"]}
                width={250}
                height={99.28}
                src={"/images/instagramlogo.png"}
                alt={"instagramlogo"}
              />
            </div>

            <h3 className={styles["signup-text"]}>
              친구들의 사진과 동영상을 보려면 가입하세요
            </h3>

            <div className={styles["signup-text-div"]} />

            <div className={styles["form-group"]}>
              <input
                autoFocus
                type="text"
                className="form-control"
                placeholder="이메일 주소"
              />
            </div>

            <div className={styles["form-group"]}>
              <input type="text" className="form-control" placeholder="이름" />
            </div>

            <div className={styles["form-group"]}>
              <input
                type="text"
                className="form-control"
                placeholder="사용자 아이디"
              />
            </div>

            <div className={styles["form-group"]}>
              <input
                type="password"
                className="form-control"
                placeholder="비밀번호"
              />
            </div>

            <div className={styles["form-group"]}></div>

            <button className={`btn btn-primary ${styles["btn-block"]}`}>
              가입
            </button>

            <p className={`${styles.login} ${styles["text-right"]}`}>
              계정이 있으신가요 ?{" "}
              <Link href="/" className={styles.loginLink}>
                로그인
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
