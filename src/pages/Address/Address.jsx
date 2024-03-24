import style from "./Address.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";

const cx = className.bind(style);

function Address() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <ul className={cx("breadcrumb")}>
            <li className={cx("Home")}>
              <div className={cx("home-page")}>
                <a className={cx("text1")} href="/" title="Trang chủ">
                  <span>Trang chủ</span>
                </a>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            </li>
            <li className={cx("account-page")}>
              <div className={cx("text1")}>Tài khoản</div>
              <div>
                <IoIosArrowForward />
              </div>
            </li>
            <li className={cx("address-page")}>
              <div>Địa chỉ khách hàng</div>
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
          <div className={cx("title2")}>Địa chỉ của bạn</div>
          <div className={cx("add-address")}>
            <button className={cx("address-btn")}>Thêm địa chỉ</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
