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
          <div className={cx("content-title")}>
            <div className={cx("title2")}>Chi tiết đơn hàng #1201</div>
            <div className={cx("order-date")}>Ngày tạo: 26/04/2024</div>
          </div>

          <div className={cx("order-status")}>
            <div className={cx("checkout-status")}>
              <div>Trạng thái thanh toán:</div>
              <div className={cx("status1")}>Chưa thanh toán</div>
            </div>
            <div className={cx("transfer-status")}>
              <div>Trạng thái vận chuyển:</div>
              <div className={cx("status2")}>Chưa vận chuyển</div>
            </div>
          </div>

          <div className={cx("order-title")}>
            <div className={cx("address-title")}>ĐỊA CHỈ GIAO HÀNG</div>
            <div className={cx("checkout-title")}>THANH TOÁN</div>
            <div className={cx("note-title")}>GHI CHÚ</div>
          </div>

          <div className={cx("order-info")}>
            <div className={cx("order-address")}>
              <div className={cx("user-name")}>Nguyễn Văn A</div>
              <div className={cx("user-address")}>
                Địa chỉ: Đường ABC, Thành phố XYZ, Thủ Đức
              </div>
              <div className={cx("user-phonenum")}>SĐT: +8402345799</div>
            </div>
            <div className={cx("order-checkout")}>
              <div>Thanh toán khi giao hàng</div>
              <div>(COD)</div>
            </div>
            <div className={cx("order-note")}>
              <div>Không có ghi chú</div>
            </div>
          </div>

          <div className={cx("order-total")}>
            <div className={cx("total-head")}>
              <div className={cx("title-product")}>Sản phẩm</div>
              <div className={cx("title-price")}>Đơn giá</div>
              <div className={cx("title-quantity")}>Số lượng</div>
              <div className={cx("title-total")}>Tổng</div>
            </div>
            <div className={cx("order-content")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/medium/100/451/884/products/aophongnamcoctayco2ve3cuctruoc-ab9a2d1e-dddc-40cc-ac6d-794abf6b5e5f.jpg?v=1649173045717"
                className={cx("product-img")}
              ></img>
              <div className={cx("about-product")}>
                <div className={cx("product-name")}>
                  Áo Polo Nam Slimfit Ôm Vừa Người, Tôn Dáng
                </div>
                <div className={cx("product-size")}>Cam / m</div>
              </div>
              <div className={cx("product-price")}>245.000đ</div>
              <div className={cx("product-quantity")}>1</div>
              <div className={cx("product-total")}>245.000đ</div>
            </div>

            <div className={cx("others-fee")}>
              <div className={cx("coupon")}>
                <div className={cx("others-fee-title1")}>Khuyến mại</div>
                <div>0đ</div>
              </div>
              <div className={cx("transfer-fee")}>
                <div className={cx("others-fee-title2")}>Phí vận chuyển</div>
                <div>40.000đ (Giao hàng tận nơi)</div>
              </div>
              <div className={cx("cost")}>
                <div className={cx("others-fee-title3")}>Tổng tiền</div>
                <div className={cx("last-cost")}>285.000đ</div>
              </div>
            </div>
          </div>

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
