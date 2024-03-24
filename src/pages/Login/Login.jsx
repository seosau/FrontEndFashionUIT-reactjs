import style from "./Login.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { ImGooglePlus2 } from "react-icons/im";

const cx = className.bind(style);

function Login() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <ul className={cx("breadcrumb")}>
            <li className={cx("Home")}>
              <div className={cx("text1")}>
                <a className={cx("text3")} href="/" title="Trang chủ">
                  <span>Trang chủ</span>
                </a>
                <div className={cx("arrow")}>
                  <IoIosArrowForward />
                </div>
              </div>
            </li>
            <li className={cx("text2")}>
              <strong>Đăng nhập tài khoản</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx("header-title")}>
        <h1 className={cx("title")}>ĐĂNG NHẬP</h1>
      </div>

      <div className={cx("login-info")}>
        <div className={cx("info-email")}>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={cx("info-pass")}>
          <input type="text" placeholder="Mật khẩu"></input>
        </div>

        <div className={cx("login-button")}>
          <button className={cx("btn-login")}>Đăng nhập</button>
        </div>
      </div>

      <div className={cx("other-info")}>
        <div className={cx("forget-sign-up")}>
          <div className={cx("forget-pass")}>
            <button className={cx("btn-forget-pass")}>Quên mật khẩu ?</button>
          </div>
          <div className={cx("sign-up")}>
            <button className={cx("btn-sign-up")}>Đăng ký tại đây</button>
          </div>
        </div>
      </div>

      <div className={cx("social-login")}>
        <div className={cx("break-line")}>Hoặc đăng nhập qua</div>
        <div className={cx("social-ways")}>
          <div className={cx("facebook-login")}>
            <button className={cx("btn-login-facebook")}>
              <div className={cx("fb-icon")}>
                <FiFacebook />
              </div>
              Facebook
            </button>
          </div>
          <div className={cx("google-login")}>
            <button className={cx("btn-login-google")}>
              <div className={cx("gg-icon")}>
                <ImGooglePlus2 />
              </div>
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
