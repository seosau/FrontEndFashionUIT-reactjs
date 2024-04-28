import React, { useState } from "react";
import style from "./ProductMainInfo.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";

const cx = className.bind(style);

export default function ProductMainInfo({ product }) {
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const switchMainImg = (index) => {
    setMainImgIndex(index);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(1);
  const giamSoLuong = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const tangSoLuong = () => {
    setCount(count + 1);
  };

  const [activeColor, setActiveColor] = useState(0);
  const changeActiveColor = (index) => {
    setActiveColor(index);
  };

  const [activeSize, setActiveSize] = useState(0);
  const changeActiveSize = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      {product && (
        <div className={cx("ProductMainInfo-container")}>
          <div className={cx("small-container")}>
            <div className={cx("left-image")}>
              <div className={cx("main-image")}>
                <img src={product.images[0].imgUrl} />
              </div>
              <div className={cx("small-images")}>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  // centeredSlides
                  modules={[Navigation]}
                  navigation
                  className={cx("swiper-wrapper")}
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className={cx("each-swiper-wrapper")}
                    >
                      <div
                        className={cx("each-small-img")}
                        onClick={() => switchMainImg(index)}
                      >
                        <img
                          src={image.imgUrl}
                          alt="Áo cotton nữ cổ trong dáng suông in chữ"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className={cx("right-info")}>
              <h2 className={cx("title")}>{product.name}</h2>
              <div className={cx("code-tradeMark-stock")}>
                <p className={cx("product-code")}>
                  Mã:
                  <span className={cx("code", "co-tra-st")}>{product._id}</span>
                </p>
                <div className={cx("tradeMark-stock")}>
                  <p className={cx("product-tradeMark")}>
                    Thương hiệu:
                    <span className={cx("tradeMark", "co-tra-st")}>
                      BeanFashion
                    </span>
                  </p>
                  <p className={cx("co-tra-st", "separate")}>|</p>
                  <p className={cx("product-stock")}>
                    Tình trạng:
                    <span className={cx("stock", "co-tra-st")}>Còn hàng</span>
                  </p>
                </div>
              </div>
              <div className={cx("product-price")}>
                <h3 className={cx("new-price")}>
                  {product.price}.000
                  <span className={cx("currency-symbols")}>₫</span>
                </h3>
                <h3 className={cx("old-price")}>
                  {product.price - product.discount * product.price}.000
                  <span className={cx("currency-symbols")}>₫</span>
                </h3>
              </div>
              <p className={cx("short-descripions")}>
                Chất liệu Cotton tự nhiên mềm mại, thấm hút mồ hôi và thoáng khí
                mang lang lại cảm giác thoải mái, dễ chịu mỗi ngày. Thiết kế
                ngắn tay, cổ tròn, kiểu dáng regular dễ dàng kết hợp với các
                trang phục khác.
              </p>
              <div className={cx("color-picker")}>
                <p>
                  Màu sắc:{" "}
                  <span className={cx("picked-color")}>
                    {product.color[activeColor]}
                  </span>
                </p>
                <div className={cx("all-color")}>
                  {product.color.map((color,index) => (
                    <button
                      className={cx("each-color")}
                      // style={{ backgroundColor: e.code }}
                      onClick={() => {
                        changeActiveColor(index);
                      }}
                    >
                      <div
                        className={cx(
                          activeColor === index
                            ? "active-color"
                            : "invisible-color"
                        )}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
              <div className={cx("size-picker")}>
                <p>
                  Kích thước:{" "}
                  <span className={cx("picked-size")}>
                    {product.size[activeSize]}
                  </span>
                </p>
                <div className={cx("all-size")}>
                  {product.size.map((size,index) => (
                    <div
                      className={cx(
                        activeSize === index ? "active-size" : "each-size"
                      )}
                      onClick={() => changeActiveSize(index)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx("size-recommend")}>
                <img
                  src={require("../../assets/image/size_icon.png")}
                  alt="size"
                />
                <span className={cx("")}>Gợi ý tìm size</span>
              </div>
              <div className={cx("count-addToCart")}>
                <div className={cx("count-picker")}>
                  <button onClick={giamSoLuong} className={cx("count-button")}>
                    -
                  </button>
                  <input
                    type="text"
                    value={count}
                    className={cx("count-value")}
                  />
                  <button onClick={tangSoLuong} className={cx("count-button")}>
                    +
                  </button>
                </div>
                <div className={cx("add-to-card")}>
                  <button onClick={""} className={cx("add-to-card-button")}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <p className={cx("free-ship-tag")}>
                Đơn hàng được miễn phí vận chuyển
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
