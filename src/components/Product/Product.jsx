import React from "react";
import styles from "./Product.module.scss"
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import className from "classnames/bind";
const cx = className.bind(styles);

export default function Product({ title, oldPrice, newPrice, productCount, productCountSale, discount, index }) {
    return (
        <>
            <div className={cx("product-thumbnail")}>
                <Link className={cx("product-overlay")}>
                </Link>
                <Link className={cx("image-thumbnail", "no-underline")}>
                    <img
                        className={cx("lazyload", "loaded")}
                        src={require("../../assets/image/aocottonnucotrondangsuonginchu.webp")} alt="ao thun co tron" />
                </Link>
                <span className={cx("sale")}>-30%</span>
                <div className={cx("product-index-num")}>
                    <span className={cx("cri_index")}></span>
                    <span className={cx("number_index")}>#1</span>
                </div>
                <div className={cx("product-action")}>
                    <Link className={cx("product-overlay-action")} ></Link>
                    <div className={cx("group-action")}>
                        <CiSettings className={cx("icon")} />
                        <IoEyeOutline className={cx("icon")} />
                        <HiOutlineShoppingBag className={cx("icon")} />
                    </div>
                </div>
            </div>
            <div className={cx("product-info")}>
                <Link className={cx("no-underline")}>
                    <h3 className={cx("product-name")}>
                        Áo cotton nữ cổ tròn dáng suông in chữ Trend
                    </h3>
                </Link>
                <div className={cx("price-box")}>
                    <span className={cx("price")}>195.000₫</span>
                    <span className={cx("compare-price")}>280.000₫</span>
                    {
                        productCount &&
                        <div className={cx("productcount")}>
                            <div className={cx("countitem", "visible")}>
                                <span className={cx("a-center")}>Đã bán 210</span>
                                <div className={cx("countdown")}>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {
                    productCountSale &&
                    <div className={cx("productcount-sale")}>
                        <div className={cx("countitem", "visible")}>
                            <span className={cx("a-center")}>Đã bán 210</span>
                            <div className={cx("countdown")}>
                                <span></span>
                            </div>
                            <div className={cx("sale-bar")}></div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}