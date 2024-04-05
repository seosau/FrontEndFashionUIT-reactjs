import style from "./TopBox.module.scss";
import className from "classnames/bind";
import { topDealUsers } from "./data";
const cx = className.bind(style);

const TopBox = () => {
  return (
    <div className={cx("topBox")}>
      <h1 className={cx("title")}>Top Deals</h1>
      <div className={cx("list")}>
        {topDealUsers.map((user) => (
          <div className={cx("listItem")} key={user.id}>
            <div className={cx("user")}>
              <img src={user.img} alt="" />
              <div className={cx("userTexts")}>
                <span className={cx("username")}>{user.username}</span>
                <span className={cx("email")}>{user.email}</span>
              </div>
            </div>
            <span className={cx("amount")}>${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
