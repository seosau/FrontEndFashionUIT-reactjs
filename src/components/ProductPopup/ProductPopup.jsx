import React, { useState } from "react";
import style from "./ProductPopup.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";

const cx = className.bind(style);

const tempImg = [
  {
    index: 0,
    src: require("../../assets/image/aocottonnucotrondangsuonginchu.webp"),
  },
  {
    index: 1,
    src: require("../../assets/image/size_icon.png"),
  },
  {
    index: 2,
    src: require("../../assets/image/size_icon.png"),
  },
  {
    index: 3,
    src: require("../../assets/image/aocottonnucotrondangsuonginchu.webp"),
  },
  {
    index: 4,
    src: require("../../assets/image/aocottonnucotrondangsuonginchu.webp"),
  },
  {
    index: 5,
    src: require("../../assets/image/aocottonnucotrondangsuonginchu.webp"),
  },
];

const tempColors = [
  {
    index: 0,
    name: "Cam",
    code: "#ffa500",
  },
  {
    index: 1,
    name: "Nâu",
    code: "#a52a2a",
  },
  {
    index: 2,
    name: "Trắng",
    code: "#ffffff",
  },
];

const tempSizes = [
  { value: "S", index: 0 },
  { value: "M", index: 1 },
  { value: "L", index: 2 },
];

export default function ProductPopup({
  title,
  images,
  oldPrice,
  newPrice,
  productCount,
  productCountSale,
  discount,
  index,
}) {
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
    <div className={cx("container")}>
      <div className={cx("small-container")}>
        <div className={cx("left-image")}>
          <div className={cx("main-image")}>
            <img src={tempImg[mainImgIndex].src} />
          </div>
          <div className={cx("small-images")}>
            {/* {images.map(
              (e = (
                <div className={cx("each-small-img")}>
                  <img src={require("")} alt={title} />
                </div>
              ))
            )} */}

            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              // centeredSlides
              modules={[Navigation]}
              navigation
              className={cx("swiper-wrapper")}
            >
              {tempImg.map((e) => (
                <SwiperSlide
                  key={e.index}
                  className={cx("each-swiper-wrapper")}
                >
                  <div
                    className={cx("each-small-img")}
                    onClick={() => switchMainImg(e.index)}
                  >
                    <img
                      src={e.src}
                      alt="Áo cotton nữ cổ trong dáng suông in chữ"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={cx("right-info")}>
          <h2 className={cx("title")}>
            Áo cotton nữ cổ trong dáng suông in chữ
          </h2>
          <div className={cx("code-tradeMark-stock")}>
            <p className={cx("product-code")}>
              Mã:
              <span className={cx("code", "co-tra-st")}>Đang cập nhật</span>
            </p>
            <div className={cx("tradeMark-stock")}>
              <p className={cx("product-tradeMark")}>
                Thương hiệu:
                <span className={cx("tradeMark", "co-tra-st")}>
                  BeanFashion
                </span>
              </p>
              <p className={cx("ngan-cach")}>|</p>
              <p className={cx("product-stock")}>
                Tình trạng:
                <span className={cx("stock", "co-tra-st")}>Còn hàng</span>
              </p>
            </div>
          </div>
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
          <p className={cx("short-descripions")}>
            Chất liệu Cotton tự nhiên mềm mại, thấm hút mồ hôi và thoáng khí
            mang lang lại cảm giác thoải mái, dễ chịu mỗi ngày. Thiết kế ngắn
            tay, cổ tròn, kiểu dáng regular dễ dàng kết hợp với các trang phục
            khác.
          </p>
          <div className={cx("color-picker")}>
            <p>
              Màu sắc:{" "}
              <span className={cx("picked-color")}>
                {tempColors[activeColor].name}
              </span>
            </p>
            <div className={cx("all-color")}>
              {tempColors.map((e) => (
                <button
                  className={cx("each-color")}
                  style={{ backgroundColor: e.code }}
                  onClick={() => {
                    changeActiveColor(e.index);
                  }}
                >
                  <div
                    className={cx(
                      activeColor === e.index
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
                {tempSizes[activeSize].value}
              </span>
            </p>
            <div className={cx("all-size")}>
              {tempSizes.map((e) => (
                <div
                  className={cx(
                    activeSize === e.index ? "active-size" : "each-size"
                  )}
                  onClick={() => changeActiveSize(e.index)}
                >
                  {e.value}
                </div>
              ))}
            </div>
          </div>
          <div className={cx("size-recommend")}>
            <img src={require("../../assets/image/size_icon.png")} alt="size" />
            <span className={cx("")}>Gợi ý tìm size</span>
          </div>
          <div className={cx("count-addToCart")}>
            <div className={cx("count-picker")}>
              <button onClick={giamSoLuong} className={cx("count-button")}>
                -
              </button>
              <input type="text" value={count} className={cx("count-value")} />
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
  );
}
