import style from "./Account.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect, useContext } from "react";
import SideBar from "../../components/Account/SideBar/SideBar";
import { AuthContext } from "../../context/AuthContext";
const cx = className.bind(style);

function Account() {
  const { decodedToken } = useContext(AuthContext);
  return (
    <div className={cx("content")}>
      <div className={cx("wrapper")}>
        <SideBar />
        <div className={cx("main")}>
          <div className={cx("title")}>THÔNG TIN TÀI KHOẢN</div>
          <div className={cx("account-info")}>
            <strong>Họ tên: </strong>
            {decodedToken?.userName}
          </div>
          <div>
            <strong>Email: </strong>
            {decodedToken?.email}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
