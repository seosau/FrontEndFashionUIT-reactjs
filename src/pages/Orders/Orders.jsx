import style from "./Orders.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

const cx = className.bind(style);

function Orders() {
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
              <div className={cx("home-page")}>
                <a className={cx("text1")} href="/">
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
            <li className={cx("orders-page")}>
              <div>Đơn hàng</div>
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
          <div className={cx("your-order")}>Đơn hàng của bạn</div>
          <div className={cx("change-pass")}>
            <button onClick={changepass}>Đổi mật khẩu</button>
          </div>
          <div className={cx("address")}>
            <button onClick={address}>Sổ địa chỉ</button>
          </div>
        </div>
        <div className={cx("content")}>
          <div className={cx("title2")}>ĐƠN HÀNG CỦA BẠN</div>
          <table className={cx("orders-table")}>
            <thead className={cx("orders-thead")}>
              <tr>
                <td>Đơn hàng</td>
                <td>Ngày</td>
                <td>Địa chỉ</td>
                <td>Giá trị đơn hàng</td>
                <td>TT thanh toán</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={"6"}>
                  <p>Không có đơn hàng nào</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Orders;
