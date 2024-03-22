import { Link } from "react-router-dom";
import style from "./AllProducts.module.scss";
import className from "classnames/bind";
import { FiX } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { BsSortDown } from "react-icons/bs";
import React, { useState } from "react";
const cx = className.bind(style);
export default function AllProducts() {
  const collectionLinks = ["Nữ", "Nam", "Trẻ Em", "Thời Trang Nam", "Thời Trang Nữ", "Thời Trang Trẻ Em", "Thời Trang Tập Gym"];
  const priceFilter = ["Dưới 2 triệu", "Từ 2 triệu - 4 triệu", "Từ 4 triệu - 7 triệu", "Từ 7 triệu - 13 triệu", "Trên 13 triệu"];
  const typeFilter = ["Áo Cotton", "Áo Khoác", "Áo phông", "Áo Polo", "Chân váy", "Đồ tập Gym"];
  const brandFilter = ["Been Fashion", "Corduroy"];
  const colorFilter = ["Xanh lá cây", "Đen", "Trắng", "Hồng", "Đỏ", "Cam", "Vàng", "Tím"];
  const fabricTypeFilter = ["Cotton", "Kaki", "Kate", "Jeans", "Len"];
  const [selectedFilter, setselectedFilter] = useState(["Dưới 2 triệu", "Áo Cotton", "Jeans"]);
  return (
    <div className={cx("container")}>
      <div className={cx("main")}>
        <div className={cx("sideBar")}>
          <div className={cx("collectionContainer")}>
            <div className={cx("collectionTitle")}>DANH MỤC SẢN PHẨM</div>
            <ul className={cx("collectionLinkContainer")}>
              {collectionLinks.map((item) => (
                <li className={cx("collectionLinkItem")}>
                  <div className={cx("collectionLinkItemLeft")}>
                    <div className={cx("highlight")}></div>
                    <p className={cx("collectionLinkTxt")}>{item}</p>
                  </div>
                  <FaPlus color="#a4a9ae" />
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("filter")}>
            <div className={cx("selectedContainer")}>
              <div className={cx("selectedHeading")}>
                <div className={cx("selectedTitle")}>Đã chọn</div>
                <div className={cx("selectedClear")}>
                  <div className={cx("selectedClearTxt")}>Clear</div>
                </div>
              </div>
              <ul className={cx("selectedList")}>
                {selectedFilter.map((item) => (
                  <li className={cx("selectedItem")}>
                    <div className={cx("selectedItemIcon")}>
                      <FiX color="#fff" />
                    </div>
                    <div className={cx("selectedItemTxt")}>{item}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>CHỌN MỨC GIÁ</div>
              <ul className={cx("filterOpt")}>
                {priceFilter.map((item) => (
                  <li className={cx("filterOptItem")}>
                    <input className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>LOẠI SẢN PHẨM</div>
              <ul className={cx("filterOpt")}>
                {typeFilter.map((item) => (
                  <li className={cx("filterOptItem")}>
                    <input className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>THƯƠNG HIỆU</div>
              <ul className={cx("filterOpt")}>
                {brandFilter.map((item) => (
                  <li className={cx("filterOptItem")}>
                    <input className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>MÀU SẮC</div>
              <ul className={cx("filterOpt")}>
                {colorFilter.map((item) => (
                  <li className={cx("filterOptItem")}>
                    <input className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>KIỂU VẢI</div>
              <ul className={cx("filterOpt")}>
                {fabricTypeFilter.map((item) => (
                  <li className={cx("filterOptItem")}>
                    <input className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("products")}>
          <div className={cx("productsHeading")}>
            <div className={cx("productsHeadingTitle")}>TẤT CẢ SẢN PHẨM</div>
            <div className={cx("sortContainer")}>
              <div className={cx("sortIcon")}>
                <BsSortDown />
              </div>
              <div className={cx("sortTitle")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
