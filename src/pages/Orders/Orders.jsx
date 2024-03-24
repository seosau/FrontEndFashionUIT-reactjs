import style from "./Orders.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";

const cx = className.bind(style);

function Orders() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <ul className={cx("breadcrumb")}>
            <li className={cx("Home")}>
              <div className={cx("home-page")}>
                <a className={cx("text1")} href="/" title="Trang chủ">
                  <span>Trang chủ</span>
                </a>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            </li>
            <li className={cx("account-page")}>
              <div className={cx("text1")}>Tài khoản</div>
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
          <div className={cx("user-info")}>Thông tin tài khoản</div>
          <div className={cx("your-order")}>Đơn hàng của bạn</div>
          <div className={cx("change-pass")}>Đổi mật khẩu</div>
          <div className={cx("address")}>Sổ địa chỉ</div>
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
