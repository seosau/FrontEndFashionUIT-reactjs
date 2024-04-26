import style from "./OTP.module.scss";
import className from "classnames/bind";
import { jwtDecode } from "jwt-decode";
import axiosClient from "../../config/axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const cx = className.bind(style);
function OTP() {
  const [isFullFilled, setIsFullFilled] = useState(true);

  const [otp, setOtp] = useState("");
  const validateForm = () => {
    if (otp === "") {
      setIsFullFilled(false);
      return false;
    } else {
      setIsFullFilled(true);
    }
    return true;
  };
  const navigate = useNavigate();
  const state = useLocation();
  const { email } = state.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axiosClient
        .post(`/otp`, { otp, email })
        .then(({ data }) => {
          navigate("/reset", { state: { token: data.token, email } });
        })
        .catch((error) => {
          switch (error.response.status) {
            case 403: {
              window.alert("OTP đã hết hạn!");
              break;
            }
            case 404: {
              if (error.response.data.type == "email") {
                window.alert("Email không tồn tại!");
              } else if (error.response.data.type == "otp") {
                window.alert("OTP không đúng, vui lòng thử lại!");
              }
              break;
            }
            case 500: {
              window.alert("Đã có lỗi xãy ra, vui lòng thử lại!");
              break;
            }
          }
        });
    }
  };
  return (
    <div>
      <div className={cx("mainContainer")}>
        <form className={cx("formContainer")}>
          <div className={cx("title")}>Nhập mã OTP</div>

          <div className={cx("backLine")}>
            <div className={cx("frontLine")}></div>
          </div>

          {!isFullFilled ? <div className={cx("warningTxt")}>Vui lòng nhập đầy đủ thông tin!</div> : null}
          <div className={cx("inputLabel")}>OTP</div>
          <div className={cx("inputContainer")}>
            <input onChange={(e) => setOtp(e.target.value)} className={cx("inputField")} placeholder="X-X-X-X"></input>
          </div>
          <div className={cx("desc")}>Một mã gồm 4 chữ số đã được gửi về email của bạn</div>
          <button onClick={(e) => handleSubmit(e)} type="submit" className={cx("btnContainer")}>
            <div className={cx("btnTxt")}>XÁC NHẬN</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default OTP;
