import className from "classnames/bind";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { LiaPhoneSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaGift } from "react-icons/fa6";
const cx = className.bind(style);
function Header() {
  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <div className={cx("header__logo")}>
          <img
            className={cx("header__img")}
            src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/logo.png?1706504358658"
            alt="logo"
          />
        </div>
        <div className={cx("header__navbar")}>
          <div className={cx("header__top")}>
            <div className={cx("header__hotline")}>
              <LiaPhoneSolid className={cx("header__icon")} />
              <div className={cx("header__phone")}>
                <span>Hotline: </span>
                <a href="tel:1900 675">1900 6750</a>
              </div>
            </div>
            <div className={cx("header__location", "space-right")}>
              <CiLocationOn className={cx("header__icon")} />
              <span className={cx("header__listlocation")}>
                <a href="/chainstore">Hệ thống cửa hàng</a>
              </span>
            </div>
            <div className={cx("header__search")}>
              <input
                type="text"
                className={cx("header_searchbox")}
                placeholder="Tìm sản phẩm"
              />
              <button className={cx("btn-search")}>
                <BsSearch className={cx("header__icon")} />
              </button>
            </div>
          </div>
          <ul className={cx("header__bot")}>
            <li className={cx("header__bot-item")}>
              <Link href="#"> Trang chủ</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#">Nữ</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#">Nam</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#">Trẻ em</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#">Sản phẩm</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#">Tin tức</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="">Liên hệ</Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#">
                <FaGift color="red" />
                <span className={cx("text")}>Khuyến mãi</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("header__action")}>
          <div className={cx("header__action-item")}>
            <span className={cx("box-icon")}>
              <SlUser className={cx("header__action-icon")} />
            </span>
            <div className={cx("action-title")}>Tài khoản</div>
          </div>
          <div className={cx("header__action-item")}>
            <span className={cx("box-icon")}>
              <HiOutlineShoppingBag className={cx("header__action-icon")} />
            </span>
            <div className={cx("action-title")}>Giỏ hàng</div>
            <span className={cx("cart-count")}>0</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
