import style from "./Account.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

const cx = className.bind(style);

function Account() {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (path !== "") {
      // Chuyển trang đến đường dẫn mới
      window.location.href = path;
    }
  }, [path]);

  const orders = () => {
    // Cập nhật giá trị của path
    setPath("/account/orders");
  };
  const address = () => {
    // Cập nhật giá trị của path
    setPath("/account/address");
  };
  const changepass = () => {
    // Cập nhật giá trị của path
    setPath("/account/changepass");
  };

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
              <div>Trang khách hàng</div>
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
          <div className={cx("your-order")}>
            <button onClick={orders}>Đơn hàng của bạn</button>
          </div>
          <div className={cx("change-pass")}>
            <button onClick={changepass}>Đổi mật khẩu</button>
          </div>
          <div className={cx("address")}>
            <button onClick={address}>Sổ địa chỉ</button>
          </div>
        </div>
        <div className={cx("content")}>
          <div className={cx("title2")}>THÔNG TIN TÀI KHOẢN</div>
          <div className={cx("account-info")}>
            <strong>Họ tên: </strong>User Name
          </div>
          <div>
            <strong>Email: </strong>abc@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
