import style from "./Address.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import SideBar from "../../components/Account/SideBar/SideBar";
import AddAddressForm from "../../components/AddAddressForm/AddAddressForm";
import axiosClient from "../../config/axios";

const cx = className.bind(style);

function Address() {
  const [hiddenForm, setHiddenForm] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const fetchAddresses = () => {
    axiosClient
      .get(`/user/address`)
      .then(({ data }) => {
        setAddresses(data.addresses);
      })
      .catch((error) => {
        console.log("Đã có lỗi xãy ra, vui lòng thử lại!");
      });
  };
  useEffect(() => {
    fetchAddresses();
  }, []);
  const handleDelete = (index) => {
    if (window.confirm("Bạn có muốn xóa địa chỉ này?")) {
      axiosClient
        .post(`/user/address/delete`, { index })
        .then(({ data }) => {
          window.alert("Xóa địa chỉ thành công!");
          fetchAddresses();
        })
        .catch((error) => {
          console.log("Đã có lỗi xãy ra, vui lòng thử lại!");
        });
    } else {
      return;
    }
  };
  return (
    <div className={cx("content")}>
      {!hiddenForm ? <div className={cx("isOverlay")}></div> : null}
      {!hiddenForm ? <AddAddressForm hiddenForm={hiddenForm} setHiddenForm={setHiddenForm} /> : null}

      <div className={cx("wrapper")}>
        <SideBar />
        <div className={cx("main")}>
          <div className={cx("title")}>Địa chỉ của bạn</div>
          <div onClick={(e) => setHiddenForm(false)} className={cx("add-address")}>
            Thêm địa chỉ
          </div>
          {addresses.map((address, index) => (
            <div key={index} className={cx("addressContainer")}>
              <div className={cx("addressField")}>
                <div className={cx("account-info")}>
                  <strong>Họ tên: </strong>
                  {address?.name}
                </div>
                <div className={cx("account-info")}>
                  <strong>Địa chỉ: </strong>
                  {address?.detail}, {address?.ward}, {address?.district}, {address?.province}
                </div>
                <div className={cx("account-info")}>
                  <strong>Số điện thoại: </strong>
                  {address?.phoneNumber}
                </div>
              </div>
              <div onClick={() => handleDelete(index)} className={cx("btnField")}>
                <div className={cx("deleteBtn")}>xóa</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Address;
