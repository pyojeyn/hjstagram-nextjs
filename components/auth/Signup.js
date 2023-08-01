import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";
import useInput from "@/hooks/use-input";

// 각각 input 들에 onChange, Blur 해놔야함. use-input 훅 이용
// 비밀번호가 틀렸는지 여부, 사용자 이메일, 아이디 존재 여부는 서버 다녀왔다가 한꺼번에 표시 해주기;
// 프론트에서 바로바로 알려주는거는 유효성만으로 가자.

const isEmail = (value) => {
  let regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return regExp.test(value);
};

const isUsername = (value) => {
  let regExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,10}$/;
  return regExp.test(value);
};

const isPassword = (value) => {
  let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
  return regExp.test(value);
};

const isNotEmpty = (value) => value.trim() !== "";

function SignUp(props) {
  console.log("props.sigupStatus", props.signupStatus);
  // 이메일 유효성
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  // 아이디 유효성
  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlueHandler,
  } = useInput(isUsername);

  // 비밀번호 유효성
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isPassword);

  // 이름 유효성
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (usernameIsValid && emailIsValid && passwordIsValid && nameIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const signupInputs = {
      email: emailValue,
      username: usernameValue,
      name: nameValue,
      password: passwordValue,
    };
    props.onSignup(signupInputs);
  };

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
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && (
                <p className={styles.Msg}>이메일을 올바르게 입력해주세요.</p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <input
                type="text"
                className="form-control"
                placeholder="이름"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              {nameHasError && (
                <p className={styles.Msg}>이름을 입력해주세요.</p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <input
                type="text"
                className="form-control"
                placeholder="사용자 아이디"
                onChange={usernameChangeHandler}
                onBlur={usernameBlueHandler}
              />
              {usernameHasError && (
                <p className={styles.Msg}>
                  사용자이름은 한글, 영문, 숫자만 가능하며 2-10자리 가능합니다
                </p>
              )}
            </div>

            <div className={styles["form-group"]}>
              <input
                type="password"
                className="form-control"
                placeholder="비밀번호"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordHasError && (
                <p className={styles.Msg}>
                  8 ~ 15자 영문 또는 숫자로 입력해주세요.
                </p>
              )}
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

            {props.signupStatus && <p>{props.signupStatus.message}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
