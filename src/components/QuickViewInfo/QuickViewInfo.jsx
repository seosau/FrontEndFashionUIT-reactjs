import React from "react";
import style from "./QuickViewInfo.module.scss";
import classNames from "classnames/bind";
import ProductPopup from "../ProductMainInfo/ProductMainInfo";

const cx = classNames.bind(style);

export default function QuickViewInfo({ openPopup = () => {} }) {
  const handleClick = (e) => {
    // Kiểm tra xem phần tử đang được click có phải là phần tử cha lớn nhất không
    if (e.target.classList.contains(cx("visible-product-popup"))) {
      // Nếu là phần tử cha lớn nhất, thực hiện openPopup
      openPopup();
    }
  };
  return (
    <div className={cx("visible-product-popup")} onClick={handleClick}>
      <div className={cx("product-popup")}>
        <ProductPopup />
      </div>
    </div>
  );
}
