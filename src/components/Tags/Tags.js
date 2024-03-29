import React from "react";
import style from "./Tag.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function Tags() {
    return (
        <div className={cx("blog_tags")}>
            <div className={cx("title-head")}>Tags</div>
            <ul className={cx("list-tags")}>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/anna-zhou" title="Anna Zhou">
                        Anna Zhou
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/denim" title="Denim">
                        Denim
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/duong-pho" title="Đường phố">
                        Đường phố
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/mua-thu-2022" title="Mùa thu 2022">
                        Mùa thu 2022
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/nam-2022" title="Năm 2022">
                        Năm 2022
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/nha-thiet-ke" title="Nhà thiết kế">
                        Nhà thiết kế
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/phong-cach" title="Phong cách">
                        Phong cách
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/quan-au" title="Quần âu">
                        Quần âu
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/thoi-trang" title="Thời trang">
                        Thời trang
                    </a>
                </li>
                <li className={cx("item_tag")}>
                    <a href="/tin-tuc/thoi-trang-nu" title="Thời trang nữ">
                        Thời trang nữ
                    </a>
                </li>
            </ul>
        </div>
    )
}