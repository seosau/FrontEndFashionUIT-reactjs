import style from "./Address.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

const cx = className.bind(style);

function Address() {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (path !== "") {
      // Chuyển trang đến đường dẫn mới
      window.location.href = path;
    }
  }, [path]);

  const account = () => {
    // Cập nhật giá trị của path
    setPath("/account");
  };
  const orders = () => {
    // Cập nhật giá trị của path
    setPath("/account/orders");
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
              <a className={cx("text1")} href="/account">
                <span>Tài khoản</span>
              </a>
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
          <div className={cx("user-info")}>
            <button onClick={account}>Thông tin tài khoản</button>
          </div>
          <div className={cx("your-order")}>
            <button onClick={orders}>Đơn hàng của bạn</button>
          </div>
          <div className={cx("change-pass")}>
            <button onClick={changepass}>Đổi mật khẩu</button>
          </div>
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
