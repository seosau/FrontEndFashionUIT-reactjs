import React from "react";
import classNames from "classnames/bind";
import style from "./Search.module.scss";
import { BsFire } from "react-icons/bs";
const cx = classNames.bind(style);

export default function Search() {
    return (
    <>
        <div className={cx("search-suggest")}>
           <div className={cx("item-suggest")}>
            <div className={cx("search-title")}> <BsFire />   TÌM KIẾM NHIỀU NHẤT </div>
            </div>
           <div className={cx("search-list")}>
            <a href="" className={cx("search-item")} title="Tìm kiếm áo sơ mi"> Áo sơ mi</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm áo khoác"> Áo khoác</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm quần tây"> Quần tây</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm váy"> Váy</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm Jumpsuit"> Jumpsuit</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm túi đeo chéo"> Túi đeo chéo</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm thắt lưng"> Thắt lưng</a>
            <a href="" className={cx("search-item")} title="Tìm kiếm khăn choàng"> Khăn choàng</a>
           </div>
           <div className={cx("list-search")}>
            <div className={cx("product-smart")}>
                <a className={cx("product-smart__image")} href="/" title="Áo cotton nữ cổ tròn">
                        <img className={cx("image-thumb")} src="http://localhost:3000/static/media/aocottonnucotrondangsuonginchu.36ef3b1e119fe14a3dd6.webp"/>
                    </a>
                <div className={cx("product-smart__info")}>
                    <div className={cx("product-smart__info_name")}>
                        <a href="/">Áo cotton nữ cổ tròn dáng suông in chữ Trend</a>
                    </div>
                    <div className={cx("product-smart__info_price")}>
                        <span className={cx("price-box")}>195.000đ</span>
                        <span className={cx("compare-price")}>280.000đ</span>
                    </div>
                </div>
            </div>
            <div className={cx("product-smart")}>
                <a className={cx("product-smart__image")} href="/" title="Áo cotton nữ cổ tròn">
                        <img className={cx("image-thumb")} src="http://localhost:3000/static/media/aocottonnucotrondangsuonginchu.36ef3b1e119fe14a3dd6.webp"/>
                    </a>
                <div className={cx("product-smart__info")}>
                    <div className={cx("product-smart__info_name")}>
                        <a href="/">Áo cotton nữ cổ tròn dáng suông in chữ Trend</a>
                    </div>
                    <div className={cx("product-smart__info_price")}>
                        <span className={cx("price-box")}>195.000đ</span>
                        <span className={cx("compare-price")}>280.000đ</span>
                    </div>
                </div>
            </div>
            <div className={cx("product-smart")}>
                <a className={cx("product-smart__image")} href="/" title="Áo cotton nữ cổ tròn">
                        <img className={cx("image-thumb")} src="http://localhost:3000/static/media/aocottonnucotrondangsuonginchu.36ef3b1e119fe14a3dd6.webp"/>
                    </a>
                <div className={cx("product-smart__info")}>
                    <div className={cx("product-smart__info_name")}>
                        <a href="/">Áo cotton nữ cổ tròn dáng suông in chữ Trend</a>
                    </div>
                    <div className={cx("product-smart__info_price")}>
                        <span className={cx("price-box")}>195.000đ</span>
                        <span className={cx("compare-price")}>280.000đ</span>
                    </div>
                </div>
            </div>
            <div className={cx("product-smart")}>
                <a className={cx("product-smart__image")} href="/" title="Áo cotton nữ cổ tròn">
                        <img className={cx("image-thumb")} src="http://localhost:3000/static/media/aocottonnucotrondangsuonginchu.36ef3b1e119fe14a3dd6.webp"/>
                    </a>
                <div className={cx("product-smart__info")}>
                    <div className={cx("product-smart__info_name")}>
                        <a href="/">Áo cotton nữ cổ tròn dáng suông in chữ Trend</a>
                    </div>
                    <div className={cx("product-smart__info_price")}>
                        <span className={cx("price-box")}>195.000đ</span>
                        <span className={cx("compare-price")}>280.000đ</span>
                    </div>
                </div>
            </div>
            <div className={cx("product-smart")}>
                    <a className={cx("product-smart__image")} href="/" title="Áo cotton nữ cổ tròn">
                        <img className={cx("image-thumb")} src="http://localhost:3000/static/media/aocottonnucotrondangsuonginchu.36ef3b1e119fe14a3dd6.webp"/>
                    </a>
                <div className={cx("product-smart__info")}>
                    <div className={cx("product-smart__info_name")}>
                        <a href="/">Áo cotton nữ cổ tròn dáng suông in chữ Trend</a>
                    </div>
                    <div className={cx("product-smart__info_price")}>
                        <span className={cx("price-box")}>195.000đ</span>
                        <span className={cx("compare-price")}>280.000đ</span>
                    </div>
                </div>
            </div>
                <div className="product-search-see-all">
                    <a href="/" className={cx("see-all-search")} title="Xem tất cả">Xem tất cả</a>
                </div>
  
           </div>
        </div>
    </>
    )
}