import style from "./TopBox.module.scss";
import className from "classnames/bind";
const cx = className.bind(style);

const TopBox = ({ topDealUsers }) => {
  return (
    <>
      {topDealUsers?.length > 0 && (
        <div className={cx("topBox")}>
          <h1 className={cx("title")}>Top Deals</h1>
          <div className={cx("list")}>
            {topDealUsers?.map((user, index) => (
              <div className={cx("listItem")} key={index}>
                <div className={cx("user")}>
                  <img
                    src={
                      user.avatar
                        ? user.avatar
                        : "https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-1/409605809_2046023819099995_2387937422268289495_n.jpg?stp=c2.0.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=14Lni8Td27sAb7q5qJZ&_nc_ht=scontent.fsgn7-1.fna&oh=00_AfBXewFoDn7R9lww6epB6tokvvPXmlmNKY_7uOcM2mzehQ&oe=66368794"
                    }
                    alt={user.name}
                  />
                  <div className={cx("userTexts")}>
                    <span className={cx("username")}>{user.name}</span>
                    <span className={cx("email")}>{user.email}</span>
                  </div>
                </div>
                <span className={cx("amount")}>
                  {
                    (user.totalAmount*1000).toLocaleString('de-DE')
                  }đ
                  {/* {Math.round(user.totalAmount).toLocaleString("vi-VN")}.000đ */}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TopBox;
