import React from "react";
import style from "./NewsDetail.module.scss";
import classNames from "classnames/bind";
import Category from "../../components/Category/Category";
import Tags from "../../components/Tags/Tags";
import HotNews from "../../components/HotNews/HotNews";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const cx = classNames.bind(style);

export default function NewsDetail() {
  return (
    <article className={cx("article-main")}>
      <section className={cx("bread-crumb")}>
        <div className={cx("container-this")}>
          <ul className={cx("breadcrumb")}>
            <li className={cx("home")}>
              <Link className={cx("changeurl")} to="/" title="Trang chủ">
                <span>Trang chủ</span>
              </Link>
              <FaChevronRight className={cx("mr_lr")} />
            </li>
            <li>
              <Link
                className={cx("changeurl")}
                to="/news"
                title="Sản phẩm bán chạy"
              >
                <span>Tin tức</span>
              </Link>
              <FaChevronRight className={cx("mr_lr")} />
            </li>
            <li>
              <strong>
                <span>Nhà thiết kế vĩ đại đầu tiên của năm 2022</span>
              </strong>
            </li>
            <li></li>
          </ul>
        </div>
      </section>
      <div className={cx("row")}>
        <div
          className={cx("right-content", "col-lg-9", "col-12", "order-lg-2")}
        >
          <div className={cx("article-details", "clearfix")}>
            <h1 className={cx("article-title")}>
              Nhà thiết kế vĩ đại đầu tiên của năm 2022
            </h1>
            <div className={cx("posts")}>
              <div className={cx("time-post", "f")}>
                <MdOutlineWatchLater className={cx("time-post__icon")} />
                Thứ Ba, 05/04/2022
              </div>
              <div className={cx("time-post")}>
                <FaUser className={cx("time-post__icon")} />
                <span>Bean Fashion</span>
              </div>
            </div>
            <div className={cx("rte")}>
              <p>
                Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan:
                1 giờ chiều ngày 1.
              </p>
              <p>
                Mọi chiếc ghế trong không gian nhà kho hang động, nơi
                được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm
                hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một
                số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim
                Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi
                trình diễn “lần đầu tiên sau nhiều năm”.&nbsp;Ditto biên tập
                viên kiêm giám tuyển Stefano Tonchi.&nbsp;Julia Fox, nam châm
                nổi tiếng của thời điểm này, ở hàng ghế đầu.&nbsp;Renzo Rosso,
                ông trùm, chủ sở hữu của Only the Brave, một trong số ít tập
                đoàn của Ý, đang chủ trì, một nụ cười trên môi.
              </p>
              <p>Tất cả ở đó để xem bộ sưu tập Diesel mới.</p>
              <p>Chờ đã… Diesel?&nbsp;Thương hiệu quần jean rock 'n' roll?</p>
              <p>
                Diesel, thương hiệu quần jean rock 'n' roll một thời do Glenn
                Martens thiết kế.
              </p>
              <p>
                <img
                  data-thumb="original"
                  original-height={2048}
                  original-width={1366}
                  src="https://bizweb.dktcdn.net/100/423/358/files/nha-thiet-ke-vi-dai-nam-2022-1.jpg?v=1646493284789"
                />
              </p>
              <p>
                Đó là chặng thứ ba trong bộ ba buổi trình diễn của ông Martens
                kể từ đầu năm, đã cùng nhau đưa ông từ nhà khái niệm thích hợp,
                được yêu mến bởi những người trong ngành có đầu óc cao, những
                người yêu thích thời trang và sinh viên trường nghệ thuật, lên
                vị trí số một. nhà thiết kế của năm 2022.
              </p>
              <p>
                Vào ngày 19 tháng 1, có một buổi trình diễn chung của nam và nữ
                cho Y / Project, thương hiệu Pháp đình đám mà anh tiếp quản vào
                năm 2013, có áo ba lỗ lưới, váy và quần lụa với phần thân và
                háng của nam và nữ được kết hợp ngẫu nhiên. , trong một bài bình
                luận không phải ngẫu nhiên về cuộc trò chuyện rộng hơn xung
                quanh giới tính và bản sắc.
              </p>
              <p>
                Tuần tiếp theo, bộ sưu tập thời trang cao cấp đầu tiên của anh
                ấy với tư cách là&nbsp;nhà thiết kế khách mời cho Jean Paul
                Gaultier&nbsp;, hoàn chỉnh với những chiếc váy dạ hội đồ sộ
                trông giống như biển có bọt và váy nàng tiên cá được làm từ
                những dải ruy băng lụa cắt vụn, giống như một chiếc áo nịt ngực
                không bao giờ lỗi mốt.
              </p>
              <p>
                Sau đó, ba tuần sau đó, Diesel đến với 1.000 dạng denim: chần,
                sờn, cắt dán, mạ crôm, tái chế, tái tạo.
              </p>
              <p>
                Ông Martens không phải là nhà thiết kế đầu tiên thử sức với
                nhiều thương hiệu đồng thời (hiện tại Jonathan Anderson với JW
                Anderson và Loewe và Raf Simons với thương hiệu của riêng mình
                và Prada là một trong số những người thực hiện nghĩa vụ kép),
                nhưng ông có thể là người đầu tiên nắm lấy những ngôi nhà có vẻ
                khác biệt như vậy để được ca ngợi ngang nhau.
              </p>
              <p>
                <img
                  data-thumb="original"
                  original-height={2048}
                  original-width={1366}
                  src="https://bizweb.dktcdn.net/100/423/358/files/nha-thiet-ke-vi-dai-nam-2022-2.jpg?v=1646493382770"
                />
              </p>
              <p>
                Xem chương trình Diesel “khiến tôi rơi nước mắt,” ông Rosso nói
                sau đó.&nbsp;"Cách xử lý denim của anh ấy là điều mà chúng tôi
                chưa từng thấy trước đây."
              </p>
              <p>Ông ấy, ông Tonchi nói, "không sợ bất cứ điều gì."</p>
              <p>
                Khi ông Martens được bổ nhiệm làm chủ tịch hội đồng giám khảo
                thời trang cho ấn bản lần thứ 37 của Liên hoan nhiếp ảnh và thời
                trang quốc tế Hyères, giải thưởng thời trang của Liên hoan phim
                Cannes, sự biến đổi của ông từ thiên tài lập dị thành vận động
                viên đỉnh cao trong ngành dường như đã hoàn tất.&nbsp;Nhưng bây
                giờ mọi người rốt cuộc đang xem, hắn sẽ làm gì tiếp theo?
              </p>
              <p id="link-346345d4">Quá lạ, quá nhiều</p>
              <p>
                “Chúng tôi chưa bao giờ rao giảng rằng chúng tôi sẽ tạo ra những
                hình bóng đẹp,” ông Martens, 38 tuổi, nói vài tuần trước buổi
                trình diễn Diesel.&nbsp;“Rất nhiều việc chúng tôi làm là vì lợi
                ích của việc đẩy giới hạn và rất nhiều người trước đây đã nói:“
                Tại sao? ”” Anh ấy đang nói về Y / Project và Phóng to qua video
                từ văn phòng Y / Project của anh ấy trong Paris.
              </p>
              <p>
                Anh ta đang mặc bộ đồng phục quen thuộc của mình: một chiếc áo
                len đen cũ mua từ một cửa hàng ở London, quần jean denim đen và
                một chiếc mũ bóng chày bạc màu.&nbsp;Anh ta có hai sợi dây xích
                quanh cổ, một chiếc khuyên tai ở tai và hai chiếc nhẫn trên ngón
                tay, và anh ta đã cạo trọc một nửa.
              </p>
              <p>
                Y / Project, anh ấy nói, “đã tồn tại trong rất nhiều năm để thực
                hiện thiết kế thử nghiệm này và những thứ kỳ quặc và không ai
                quan tâm.&nbsp;Nó quá kỳ lạ, tất cả là quá nhiều.&nbsp;Họ đã bị
                đột quỵ sau cái nhìn thứ ba. "&nbsp;Ngay cả nhân viên, anh ấy
                nói, thường có "một khoảnh khắc phù hợp khi chúng tôi xem xét
                thiết kế của mình và suy nghĩ, 'Chúng tôi có nghiêm túc làm điều
                này không?'"
              </p>
              <p>
                <img
                  data-thumb="original"
                  original-height={2048}
                  original-width={1366}
                  src="https://bizweb.dktcdn.net/100/423/358/files/nha-thiet-ke-vi-dai-nam-2022-3.jpg?v=1646493449646"
                />
              </p>
            </div>
          </div>
          <form
            method="post"
            action="/posts/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022/comments"
            id="article_comments"
            acceptCharset="UTF-8"
          >
            <div className={cx("form-coment")}>
              <div className={cx("margin-top-0", "w-100")}>
                <h5 className={cx("title-form-coment")}>
                  Viết bình luận của bạn
                </h5>
              </div>
              <div className={cx("form-row")}>
                <div className={cx("user-info")}>
                  <div className={cx("col-md-6", "col-12")}>
                    <fieldset className={cx("form-group", "padding-0")}>
                      <input
                        placeholder="Họ và tên"
                        type="text"
                        className={cx("form-control", "form-control-lg")}
                        defaultValue=""
                        id="full-name"
                        name="Author"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className={cx("col-md-6", "col-12")}>
                    <fieldset className={cx("form-group", "padding-0")}>
                      <input
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                        type="email"
                        className={cx("form-control", "form-control-lg")}
                        defaultValue=""
                        name="Email"
                        required=""
                      />
                    </fieldset>
                  </div>
                </div>
                <div
                  className={cx(
                    "col-lg-12",
                    "col-md-12",
                    "col-sm-12",
                    "col-xs-12"
                  )}
                >
                  <textarea
                    placeholder="Nội dung"
                    className={cx(
                      "form-control",
                      "form-control-lg",
                      "form-control-textarea"
                    )}
                    id="comment"
                    name="Body"
                    rows={6}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div
                  className={cx(
                    "col-lg-12",
                    "col-md-12",
                    "col-sm-12",
                    "col-xs-12"
                  )}
                >
                  <button
                    type="submit"
                    className={cx("btn", "btn-primary", "button_45")}
                  >
                    Gửi thông tin
                  </button>
                </div>
              </div>
            </div>{" "}
            {/* End form mail */}
          </form>
        </div>
        <div
          className={cx("blog_left_base", "col-lg-3", "col-12", "order-lg-1")}
        >
          <div className={cx("side-right-stick")}>
            <Category />
            <Tags />
            <HotNews />
          </div>
        </div>
      </div>
    </article>
  );
}
