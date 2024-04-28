import style from "./OrderStatus.module.scss";
import className from "classnames/bind";
import React, { useState, useEffect, useContext } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../config/axios";
const cx = className.bind(style);

function OrderStatus() {
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log(params);
  useEffect(() => {
    axiosClient
      .post(`order/vnpay/create`, params)
      .then(({ data }) => {
        console.log(data.status);
        setStatus(data.status === "00" ? "success" : "error");
      })
      .catch((error) => {
        console.log("Đã có lỗi xãy ra, vui lòng thử lại!");
        console.log(error.response);
      });
  }, []);

  return (
    <div className={cx("main")}>
      {status === "pending" ? (
        <div className={cx("")}>Đang xử lý...</div>
      ) : status === "success" ? (
        <div className={cx("")}>Thành công!</div>
      ) : status === "error" ? (
        <div className={cx("")}>Thất bại!</div>
      ) : null}
    </div>
  );
}

export default OrderStatus;
