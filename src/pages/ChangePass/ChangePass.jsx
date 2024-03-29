import style from "./ChangePass.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

const cx = className.bind(style);

function ChangePass() {
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
  const address = () => {
    // Cập nhật giá trị của path
    setPath("/account/address");
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
          <div className={cx("user-info")}>
            <button onClick={account}>Thông tin tài khoản</button>
          </div>
          <div className={cx("your-order")}>
            <button onClick={orders}>Đơn hàng của bạn</button>
          </div>
          <div className={cx("change-pass")}>Đổi mật khẩu</div>
          <div className={cx("address")}>
            <button onClick={address}>Sổ địa chỉ</button>
          </div>
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
