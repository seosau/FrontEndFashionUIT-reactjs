import React from "react";
import style from "./ProductDetail.module.scss";
import classNames from "classnames/bind";
import ProductPopup from "../../components/ProductPopup/ProductPopup";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

export default function ProductDetail() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ["Mô tả sản phẩm", "Chính sách đổi trả"]; // Danh sách các tab

  const tabContents = [
    <div className={cx("description")}>
      <p>
        Chất liệu Cotton tự nhiên mềm mại, thấm hút mồ hôi và thoáng khí mang
        lang lại cảm giác thoải mái, dễ chịu mỗi ngày.
      </p>
      <p>
        Thiết kế ngắn tay, cổ tròn, kiểu dáng regular dễ dàng kết hợp với các
        trang phục khác.
      </p>
      <p>
        <strong>Hướng dẫn bảo quản:</strong>
      </p>
      <p>+ Không giật tag (mác) - cắt bằng kéo</p>
      <p>+ Giặt máy với chu kỳ trung bình và vòng quay ngắn</p>
      <p>+ Giặt với nhiệt độ tối đa 30 độ C</p>
      <p>+ Sấy ở nhiệt độ thường</p>
      <p>+ Là ủi ở nhiệt độ thấp&nbsp;</p>
      <p>
        <img
          data-thumb="original"
          original-height={480}
          original-width={370}
          src="//bizweb.dktcdn.net/100/451/884/products/4apcb001cam01-409k-1.jpg?v=1649862131563"
        />
        <img
          data-thumb="original"
          original-height={480}
          original-width={370}
          src="//bizweb.dktcdn.net/100/451/884/products/4apcb001cam01-409k-1a.jpg?v=1649862132127"
        />
        <img
          data-thumb="original"
          original-height={480}
          original-width={370}
          src="//bizweb.dktcdn.net/100/451/884/products/4apcb001cam01-409k-1b.jpg?v=1649862132990"
        />
        <img
          data-thumb="original"
          original-height={480}
          original-width={370}
          src="//bizweb.dktcdn.net/100/451/884/products/4apcb001cam01-409k-1e.jpg?v=1649862170077"
        />
      </p>
      <ul>
        <li>Vải đảm bảo chất lượng</li>
        <li>Không để tiếp xúc ở nhiệt độ cao</li>
      </ul>
    </div>,

    <div className={cx("policy")}>
      + Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện
      <br />
      + Nằm trong chính sách đổi trả sản phẩm của Bean
      <br />
      + Sản phẩm còn nguyên tem mác chưa qua sử dụng và chưa giặt là
      <br />
      + Thời gian đổi trả nhỏ hơn 15 ngày kể từ ngày nhận hàng
      <br />
      + Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí <br />
      <b>Điều kiện đổi trả hàng</b>
      <br />
      Điều kiện về thời gian đổi trả: trong vòng 01 ngày kể từ khi nhận được
      hàng và phải liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để
      được xác nhận đổi trả hàng.
      <br />
      <b>Điều kiện đổi trả hàng:</b>
      <br />
      - Sản phẩm gửi lại phải còn nguyên đai nguyên kiện
      <br />
      - Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.
      <br />
      - Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa
      qua sử dụng.
      <br />- Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí
      liên lạc tối đa tương đương 20% giá trị đơn hàng.
    </div>,
  ];
  return (
    <>
      <div className={cx("container")}>
        <section className={cx("bread-crumb")}>
          <div className={cx("container-this")}>
            <ul className={cx("breadcrumb")}>
              <li className={cx("home")}>
                <Link className={cx("changeurl")} to="/" title="Trang chủ">
                  <span>Trang chủ</span>
                </Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={cx("mr_lr")}
                />
              </li>
              <li>
                <Link
                  className={cx("changeurl")}
                  to="/san-pham-ban-chay"
                  title="Sản phẩm bán chạy"
                >
                  <span>Sản phẩm bán chạy</span>
                </Link>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={cx("mr_lr")}
                />
              </li>
              <li>
                <strong>
                  <span>Áo cotton nữ cổ tròn dáng suông in chữ Trend</span>
                </strong>
              </li>
              <li></li>
            </ul>
          </div>
        </section>

        <div className={cx("visible-product-popup")}>
          <div className={cx("product-popup")}>
            {isPopupOpen && <ProductPopup />}
          </div>
        </div>
        <div className={cx("small-container")}>
          <div className={cx("product-detail-side")}>
            <ProductPopup />
            <div className={cx("description-policy")}>
              <div>
                <div className={cx("tabs")}>
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={cx(
                        index === activeTab ? ("tab", "active") : "tab"
                      )}
                      onClick={() => handleTabClick(index)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className={cx("tab-content")}>
                  {tabContents[activeTab]}
                </div>
              </div>
            </div>

            <section className={cx("trending")}>
              <div className={cx("container-trending")}>
                <div className={cx("box-container")}>
                  <div className={cx("title")}>
                    <h2>Sản phẩm liên quan</h2>
                  </div>
                  <div className={cx("tab-products-container")}>
                    <div className={cx("tab-products")}>
                      <div
                        className={cx("tab-content-trending", "tab-category")}
                      >
                        <div className={cx("box-container")}>
                          <Swiper
                            spaceBetween={10}
                            slidesPerView={4}
                            // slidesPerView={width > 768 ? 4 : 2}
                            modules={[Navigation]}
                            navigation
                          >
                            {[...Array(8).keys()].map((productIndex) => (
                              <SwiperSlide
                                key={productIndex}
                                className={cx("product-container")}
                              >
                                <Product openPopup={openPopup} />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className={cx("right-features-side")}>
            <div className={cx("discount-code")}>
              <fieldset className={cx("pro-discount")}>
                <legend>
                  <img
                    alt="MÃ GIẢM GIÁ"
                    src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/code_dis.gif?1706504358658"
                  />{" "}
                  MÃ GIẢM GIÁ
                </legend>
                <div className={cx("item_discount")}>
                  <div className={cx("top_discount")}>
                    <div className={cx("item-name")}>
                      <p className={cx("code_dis")}>10% OFF</p>
                      <span>Top Code</span>
                    </div>
                    <img
                      width={36}
                      height={20}
                      src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon1_value_img.png?1706504358658"
                      alt="10% OFF"
                    />
                  </div>
                  <div className={cx("coupon_desc")}>
                    Giảm <b>10%</b> cho đơn hàng từ <b>500k.</b>
                  </div>
                  <div className={cx("copy_discount")}>
                    <p className={cx("code_zip")}>BFAS10</p>
                    <button
                      className={cx("btn", "dis_copy")}
                      data-copy="BFAS10"
                    >
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
                <div className={cx("item_discount")}>
                  <div className={cx("top_discount")}>
                    <div className={cx("item-name")}>
                      <p className={cx("code_dis")}>15% OFF</p>
                    </div>
                    <img
                      width={36}
                      height={20}
                      src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon2_value_img.png?1706504358658"
                      alt="15% OFF"
                    />
                  </div>
                  <div className={cx("coupon_desc")}>
                    Giảm <b>15%</b> cho đơn hàng từ <b>900k.</b>
                  </div>
                  <div className={cx("copy_discount")}>
                    <p className={cx("code_zip")}>BFAS15</p>
                    <button
                      className={cx("btn", "dis_copy")}
                      data-copy="BFAS15"
                    >
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
                <div className={cx("item_discount")}>
                  <div className={cx("top_discount")}>
                    <div className={cx("item-name")}>
                      <p className={cx("code_dis")}>FREESHIP</p>
                    </div>
                    <img
                      width={36}
                      height={20}
                      src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon3_value_img.png?1706504358658"
                      alt="FREESHIP"
                    />
                  </div>
                  <div className={cx("coupon_desc")}>
                    <b>Freeship</b> cho đơn hàng <b>nội thành</b>
                  </div>
                  <div className={cx("copy_discount")}>
                    <p className={cx("code_zip")}>BFASFREE</p>
                    <button
                      className={cx("btn", "dis_copy")}
                      data-copy="BFASFREE"
                    >
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Có thể bạn thích */}
            <div className={cx("blog_noibat")}>
              <h2 className={cx("h2_sidebar_blog")}>
                <Link to="/blogs/all" title="Tin tức nổi bật">
                  Có thể bạn thích
                </Link>
              </h2>
              <div className={cx("blog_content")}>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm đã xem */}
            <div className={cx("blog_noibat")}>
              <h2 className={cx("h2_sidebar_blog")}>
                <Link to="/blogs/all" title="Tin tức nổi bật">
                  Sản phẩm đã xem
                </Link>
              </h2>
              <div className={cx("blog_content")}>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("post-thumb")}>
                    <Link
                      className={cx("image-blog", "scale_hover")}
                      to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                    >
                      <img
                        className={cx("img_blog", "lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")}
                        alt="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        data-was-processed="true"
                      />
                    </Link>
                  </div>
                  <div className={cx("contentright")}>
                    <h3>
                      <Link
                        title="Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend"
                        to="/ao-cotton-nu-co-tron-dang-suong-in-chu-trend"
                      >
                        Áo Cotton Nữ Cổ Tròn Dáng Suông In Chữ Trend
                      </Link>
                    </h3>

                    <div className={cx("product-price")}>
                      <h3 className={cx("new-price")}>
                        349.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                      <h3 className={cx("old-price")}>
                        500.000
                        <span className={cx("currency-symbols")}>₫</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("view-more-div")}>
                <Link
                  to="/san-pham-da-xem"
                  title="Xem thêm"
                  className={cx("view-more")}
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
