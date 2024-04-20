import React from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import className from "classnames/bind";
const cx = className.bind(styles);
export default function Product({ ranking, title, oldPrice, newPrice, productCount, productCountSale, image, discount, index }) {
  return (
    <>
      <div className={cx("product-thumbnail")}>
        <Link className={cx("product-overlay")}></Link>
        <Link className={cx("image-thumbnail", "no-underline")}>
          <img className={cx("lazyload", "loaded")} src={image} alt={title} />
        </Link>
        {
          discount && <span className={cx("sale")}>{discount}</span>
        }
        {ranking ? (
          <div className={cx("product-index-num")}>
            <span className={cx("cri_index")}></span>
            <span className={cx("number_index")}>#{ranking}</span>
          </div>
        ) : null}
        <div className={cx("product-action")}>
          <Link className={cx("product-overlay-action")}></Link>
          <div className={cx("group-action")}>
            <CiSettings className={cx("icon")} title="" />
            <IoEyeOutline className={cx("icon")} title="Xem trước" />
            <HiOutlineShoppingBag className={cx("icon")} title="Thêm vào giỏ" />
          </div>
        </div>
      </div>
      <div className={cx("product-info")}>
        <Link className={cx("no-underline")}>
          <h3 className={cx("product-name")}>{title}</h3>
        </Link>
        <div className={cx("price-box")}>
          {
            newPrice ? <>
              <span className={cx("price")}>{newPrice}₫</span>
              <span className={cx("compare-price")}>{oldPrice}₫</span>
            </> : <span className={cx("price")}>{oldPrice}₫</span>
          }
          {productCount && (
            <div className={cx("productcount")}>
              <div className={cx("countitem", "visible")}>
                <span className={cx("a-center")}>Đã bán {productCount}</span>
                <div className={cx("countdown")}>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>
        {productCountSale && (
          <div className={cx("productcount-sale")}>
            <div className={cx("countitem", "visible")}>
              <span className={cx("a-center")}>Đã bán {productCountSale}</span>
              <div className={cx("countdown")}>
                <span></span>
              </div>
              <div className={cx("sale-bar")}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

