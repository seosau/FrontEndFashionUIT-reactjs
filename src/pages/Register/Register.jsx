import { Link } from "react-router-dom";
import style from "./Register.module.scss";
import className from "classnames/bind";
import { FaFacebookF, FaGooglePlusG, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const cx = className.bind(style);
function Register() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    pass: "",
    cpass: "",
  });
  const [isFullFilled, setIsFullFilled] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const validateForm = () => {
    const phoneNumberRegex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (registerInfo.name === "" || registerInfo.phoneNumber === "" || registerInfo.email === "" || registerInfo.pass === "" || registerInfo.cpass === "") {
      setIsFullFilled(false);
    } else {
      if (!isFullFilled) setIsFullFilled(true);
      if (!phoneNumberRegex.test(registerInfo.phoneNumber)) {
        setIsPhoneNumberValid(false);
      } else {
        if (!isPhoneNumberValid) setIsPhoneNumberValid(true);
        if (!emailRegex.test(registerInfo.email)) {
          setIsEmailValid(false);
        } else {
          if (!isEmailValid) setIsEmailValid(true);
          if (registerInfo.pass !== registerInfo.cpass) {
            setIsPassValid(false);
          } else {
            if (!isPassValid) setIsPassValid(true);
          }
        }
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };
  // useEffect(() => {
  //   console.log(registerInfo);
  // }, [registerInfo]);
  return (
    <div>
      <div className={cx("mainContainer")}>
        <form className={cx("formContainer")}>
          <div className={cx("title")}>ĐĂNG KÝ</div>
          <div className={cx("backLine")}>
            <div className={cx("frontLine")}></div>
          </div>
          {/* {!isFullFilled ? <div className={cx("isFullFilled")}>Vui lòng nhập đầy đủ thông tin!</div> : null}
          {!isPhoneNumberValid ? <div className={cx("isFullFilled")}>Số điện thoại không hợp lệ!</div> : null}
          {!isEmailValid ? <div className={cx("isFullFilled")}>Email không hợp lệ!</div> : null}
          {!isPassValid ? <div className={cx("isFullFilled")}>Nhập lại mật khẩu không khớp!</div> : null} */}

          {!isFullFilled ? (
            <div className={cx("warningTxt")}>Vui lòng nhập đầy đủ thông tin!</div>
          ) : !isPhoneNumberValid ? (
            <div className={cx("warningTxt")}>Số điện thoại không hợp lệ!</div>
          ) : !isEmailValid ? (
            <div className={cx("warningTxt")}>Email không hợp lệ!</div>
          ) : !isPassValid ? (
            <div className={cx("warningTxt")}>Nhập lại mật khẩu không khớp!</div>
          ) : null}
          <div className={cx("inputLabel")}>Họ tên</div>
          <div className={cx("inputContainer")}>
            <input onChange={(e) => setRegisterInfo({ ...registerInfo, name: e.target.value })} className={cx("inputField")} placeholder="Nguyen Van A"></input>
          </div>
          <div className={cx("inputLabel")}>Số điện thoại</div>
          <div className={cx("inputContainer")}>
            <input onChange={(e) => setRegisterInfo({ ...registerInfo, phoneNumber: e.target.value })} pattern="\d+" type="text" className={cx("inputField")} placeholder="0312345678"></input>
          </div>
          <div className={cx("inputLabel")}>Email</div>
          <div className={cx("inputContainer")}>
            <input onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })} className={cx("inputField")} type="email" placeholder="abc@gmail.com"></input>
          </div>
          <div className={cx("inputLabel")}>Mật khẩu</div>
          <div className={cx("inputContainer")}>
            <input
              onChange={(e) => setRegisterInfo({ ...registerInfo, pass: e.target.value })}
              type={isPrivate ? "password" : "text"}
              className={cx("inputField")}
              placeholder={isPrivate ? "******" : "abc123"}
            ></input>
            <span onClick={() => setIsPrivate(!isPrivate)} className={cx("eye")}>
              {isPrivate ? <FaEyeSlash color="#01567f" /> : <FaEye color="#01567f" />}
            </span>
          </div>
          <div className={cx("inputLabel")}>Nhập lại mật khẩu</div>
          <div className={cx("inputContainer")}>
            <input
              onChange={(e) => setRegisterInfo({ ...registerInfo, cpass: e.target.value })}
              type={isPrivate ? "password" : "text"}
              className={cx("inputField")}
              placeholder={isPrivate ? "******" : "abc123"}
            ></input>
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)} className={cx("btnContainer")}>
            <div className={cx("btnTxt")}>ĐĂNG KÝ</div>
          </button>
          <div className={cx("linkContainer")}>
            <div className={cx("")}>Đã có tài khoản?</div>
            <Link to={"/login"} className={cx("loginLink")}>
              Đăng nhập tại đây
            </Link>
          </div>
          <div className={cx("optionTitle")}>hoặc đăng nhập qua</div>
          <div className={cx("optionContainer")}>
            <div className={cx("facebookBtn")}>
              <FaFacebookF color="#fff" />
              <div className={cx("separate")}></div>
              <div className={cx("optionTxt")}>FACEBOOK</div>
            </div>
            <div className={cx("googleBtn")}>
              <FaGooglePlusG color="#fff" size={30} />
              <div className={cx("separate")}></div>
              <div className={cx("optionTxt")}>GOOGLE</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
