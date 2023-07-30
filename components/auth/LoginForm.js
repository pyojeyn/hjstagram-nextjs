import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";
import { useRef, useState } from "react";
import useInput from "@/hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const LoginForm = ({ onLogin }) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [userNameMsg, setUserNameMsg] = useState(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("hello onSubmit Handler");

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginInputs = {
      username: enteredUsername,
      password: enteredPassword,
    };

    onLogin(loginInputs);
  };

  // 해야할것 : onChange 바뀔때마다 내가 만들어논 use-input 훅 접목시켜보기 !
  // validForm 레포랑 loginWithEmailAndPassword 레포 참고해보기

  return (
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

          <div className={styles["form-group"]}>
            <input
              type="text"
              className="form-control"
              placeholder="사용자 이름"
              ref={usernameInputRef}
            />
          </div>

          <div className={styles["form-group"]}>
            <input
              type="password"
              className="form-control"
              placeholder="비밀번호"
              ref={passwordInputRef}
            />
          </div>
          <div className={styles["form-group"]}></div>
          <button
            type="submit"
            className={`btn btn-primary ${styles["btn-block"]}`}
          >
            로그인
          </button>

          {userNameMsg && <p className={`${styles["Msg3"]}`}>{userNameMsg}</p>}

          <p className={`${styles["forgot-password"]} ${styles["text-right"]}`}>
            <Link
              href="/recover_password"
              className={styles.forgotPasswordLink}
            >
              비밀번호를 잊으셨나요?
            </Link>
          </p>

          <p className={`${styles["sign-up"]} ${styles["text-right"]}`}>
            계정이 없으신가요?{" "}
            <Link href="/signup" className={styles.signUpLink}>
              가입하기
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
