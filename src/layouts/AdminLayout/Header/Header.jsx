import style from "./Header.module.scss";
import className from "classnames/bind";
import { CiSearch, CiBellOn  } from "react-icons/ci";
const cx = className.bind(style)
const Header = () => {
    return (
      <div className={cx("header")}>
        <div className={cx("logo")}>
          {/* <img src="logo.svg" alt="" /> */}
          <span className={cx("user-name")}>Anh Bảo</span>
        </div>
        <div className={cx("icons")}>
          <CiSearch className={cx("icon")} />
          <div className={cx("notification")}>
            <CiBellOn />
            <span>1</span>
          </div>
          <div className={cx("user")}>
            <img
              src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span>Anh Bảo</span>
          </div>
          {/* <img src="/settings.svg" alt="" className={cx("icon")} /> */}
        </div>
      </div>
    );
  };
  
export default Header;