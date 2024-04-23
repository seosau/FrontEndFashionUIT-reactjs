import style from "./Address.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import SideBar from "../../components/Account/SideBar/SideBar";
const cx = className.bind(style);

function Address() {
  return (
    <div className={cx("content")}>
      <div className={cx("wrapper")}>
        <SideBar />
        <div className={cx("main")}>
          <div className={cx("title2")}>Địa chỉ của bạn</div>
          <div className={cx("add-address")}>
            <button className={cx("address-btn")}>Thêm địa chỉ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
