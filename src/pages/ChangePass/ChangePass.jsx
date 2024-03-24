import style from "./ChangePass.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";

const cx = className.bind(style);

function ChangePass() {
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
              <div>Thay đổi mật khẩu</div>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx("main")}>
        <div className={cx("side-bar")}>
          <div className={cx("title1")}>TRANG TÀI KHOẢN</div>
          <div className={cx("greeting-user")}>
            <div className={cx("greeting")}>Xin chào,</div>
            <div className={cx("user-name")}>User Name</div>
          </div>
          <div className={cx("user-info")}>Thông tin tài khoản</div>
          <div className={cx("your-order")}>Đơn hàng của bạn</div>
          <div className={cx("change-pass")}>Đổi mật khẩu</div>
          <div className={cx("address")}>Sổ địa chỉ</div>
        </div>
        <div className={cx("content")}>
          <div className={cx("title2")}>ĐỔI MẬT KHẨU</div>
          <div className={cx("warning")}>
            Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8
            kí tự
          </div>

          <div className={cx("old-pass")}>
            <div className={cx("content-text")}>Mật khẩu cũ *</div>
            <div className={cx("content-input")}>
              <input type="password"></input>
            </div>
          </div>
          <div className={cx("new-pass")}>
            <div className={cx("content-text")}>Mật khẩu mới *</div>
            <div className={cx("content-input")}>
              <input type="password"></input>
            </div>
          </div>
          <div className={cx("confirm-pass")}>
            <div className={cx("content-text")}>Xác nhận lại mật khẩu *</div>
            <div className={cx("content-input")}>
              <input type="password"></input>
            </div>
          </div>

          <div className={cx("change-pass-button")}>
            <button className={cx("btn-change-pass")}>Đặt lại mật khẩu</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePass;
