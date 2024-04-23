import style from "./ChangePass.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SideBar from "../../components/Account/SideBar/SideBar";
import axiosClient from "../../config/axios";
const cx = className.bind(style);

function ChangePass() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [changePassInfo, setChangePassInfo] = useState({
    oldPass: "",
    pass: "",
    cpass: "",
  });
  const [isFullFilled, setIsFullFilled] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const validateForm = () => {
    if (changePassInfo.oldPass === "" || changePassInfo.pass === "" || changePassInfo.cpass === "") {
      setIsFullFilled(false);
      return false;
    } else {
      if (changePassInfo.pass !== changePassInfo.cpass) {
        if (!isFullFilled) setIsFullFilled(true);
        setIsPassValid(false);
        return false;
      } else {
        if (!isPassValid) setIsPassValid(true);
      }
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axiosClient
        .post(`/change-password`, { oldPassword: changePassInfo.oldPass, newPassword: changePassInfo.pass })
        .then((response) => {
          window.alert("Password changed successfully!");
        })
        .catch((error) => {
          window.alert(`Password changed failed! ${error.response.data.message}`);
        });
    }
  };
  return (
    <div className={cx("content")}>
      <div className={cx("wrapper")}>
        <SideBar />
        <div className={cx("main")}>
          <div className={cx("title")}>ĐỔI MẬT KHẨU</div>
          <div className={cx("warning")}>Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự</div>
          {!isFullFilled ? <div className={cx("warningTxt")}>Vui lòng nhập đầy đủ thông tin!</div> : !isPassValid ? <div className={cx("warningTxt")}>Nhập lại mật khẩu không khớp!</div> : null}
          <div className={cx("old-pass")}>
            <div className={cx("content-text")}>
              Mật khẩu cũ <span className={cx("require")}>*</span>
            </div>
            <div className={cx("content-input")}>
              <input onChange={(e) => setChangePassInfo({ ...changePassInfo, oldPass: e.target.value })} type={isPrivate ? "password" : "text"}></input>
              <span onClick={() => setIsPrivate(!isPrivate)} className={cx("eye")}>
                {isPrivate ? <FaEyeSlash color="#01567f" /> : <FaEye color="#01567f" />}
              </span>
            </div>
          </div>
          <div className={cx("new-pass")}>
            <div className={cx("content-text")}>
              Mật khẩu mới <span className={cx("require")}>*</span>
            </div>
            <div className={cx("content-input")}>
              <input onChange={(e) => setChangePassInfo({ ...changePassInfo, pass: e.target.value })} type={isPrivate ? "password" : "text"}></input>
            </div>
          </div>
          <div className={cx("confirm-pass")}>
            <div className={cx("content-text")}>
              Xác nhận lại mật khẩu <span className={cx("require")}>*</span>
            </div>
            <div className={cx("content-input")}>
              <input onChange={(e) => setChangePassInfo({ ...changePassInfo, cpass: e.target.value })} type={isPrivate ? "password" : "text"}></input>
            </div>
          </div>

          <div onClick={(e) => handleSubmit(e)} className={cx("change-pass-button")}>
            <button className={cx("btn-change-pass")}>Đặt lại mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
