import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.scss";
import className from "classnames/bind";
import { FaFacebookF, FaGooglePlusG, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosClient from "../../config/axios";
import { useCookies } from "react-cookie";
const cx = className.bind(style);
function Login() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [isFullFilled, setIsFullFilled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isRemember, setIsRemember] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    pass: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const navigate = useNavigate();
  const validateForm = () => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if (loginInfo.email === "" || loginInfo.pass === "") {
      setIsFullFilled(false);
      return false;
    } else {
      if (!isFullFilled) setIsFullFilled(true);
      if (!emailRegex.test(loginInfo.email)) {
        setIsEmailValid(false);
        return false;
      } else {
        if (!isEmailValid) setIsEmailValid(true);
      }
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        email: loginInfo.email,
        password: loginInfo.pass,
      };
      axiosClient
        .post(`/login`, user)
        .then(({ data }) => {
          const token = data.token;
          console.log(token);
          if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            const userName = decodedToken.userName;
            var cookieOptions;
            if (isRemember && token) {
              cookieOptions = {
                httpOnly: true,
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
              };
            } else if (token && !isRemember) {
              cookieOptions = {
                httpOnly: true,
              };
            }
            setCookie("token", token, cookieOptions);
            var local = localStorage.getItem("decodedToken");
            if (local) {
              localStorage.removeItem("decodedToken");
            }
            localStorage.setItem("decodedToken", JSON.stringify(decodedToken));
            local = JSON.parse(localStorage.getItem("decodedToken"));
            console.log(local);
            // navigate("/");
          } else {
            console.log("Please verify your email!");
          }
        })
        .catch((error) => {
          console.log("Login Error", error.response.data.message);
        });
    }
  };
  return (
    <div>
      <div className={cx("mainContainer")}>
        <form className={cx("formContainer")}>
          <div className={cx("title")}>ĐĂNG NHẬP</div>
          <div className={cx("backLine")}>
            <div className={cx("frontLine")}></div>
          </div>
          {!isFullFilled ? <div className={cx("warningTxt")}>Vui lòng nhập đầy đủ thông tin!</div> : !isEmailValid ? <div className={cx("warningTxt")}>Email không hợp lệ!</div> : null}
          <div className={cx("inputLabel")}>Email</div>
          <div className={cx("inputContainer")}>
            <input onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} className={cx("inputField")} placeholder="abc@gmail.com"></input>
          </div>
          <div className={cx("inputLabel")}>Mật khẩu</div>
          <div className={cx("inputContainer")}>
            <input type={isPrivate ? "password" : "text"} onChange={(e) => setLoginInfo({ ...loginInfo, pass: e.target.value })} className={cx("inputField")} placeholder="abc123"></input>
            <span onClick={() => setIsPrivate(!isPrivate)} className={cx("eye")}>
              {isPrivate ? <FaEyeSlash color="#01567f" /> : <FaEye color="#01567f" />}
            </span>
          </div>
          <button onClick={(e) => handleSubmit(e)} type="submit" className={cx("btnContainer")}>
            <div className={cx("btnTxt")}>ĐĂNG NHẬP</div>
          </button>
          <div className={cx("linkContainer")}>
            <div className={cx("forgotLink")}>Quên mật khẩu?</div>
            <Link to={"/register"} className={cx("registerLink")}>
              Đăng ký tại đây
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

export default Login;
