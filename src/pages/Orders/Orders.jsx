import style from "./Orders.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import SideBar from "../../components/Account/SideBar/SideBar";
import { Link } from "react-router-dom";
const cx = className.bind(style);

function Orders() {
  return (
    <div className={cx("content")}>
      <div className={cx("wrapper")}>
        <SideBar />
        <div className={cx("main")}>
          <div className={cx("title")}>ĐƠN HÀNG CỦA BẠN</div>
          <table className={cx("ordersTable")}>
            <thead className={cx("ordersHeading")}>
              <tr>
                <td className={cx("headingTilte")}>Đơn hàng</td>
                <td className={cx("headingTilte")}>Ngày</td>
                <td className={cx("headingTilte")}>Địa chỉ</td>
                <td className={cx("headingTilte")}>Giá trị đơn hàng</td>
                <td className={cx("headingTilte")}>Ghi chú</td>
              </tr>
            </thead>
            <tbody className={cx("ordersBody")}>
              <tr>
                <td colSpan={"6"}>
                  <p>Không có đơn hàng nào</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
