import { Link } from "react-router-dom";
import style from "./AllProducts.module.scss";
import className from "classnames/bind";
import { FiX } from "react-icons/fi";
import { FaPlus, FaFilter } from "react-icons/fa6";
import { BsSortDown } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
const cx = className.bind(style);
export default function AllProducts() {
  const collectionLinks = ["Nữ", "Nam", "Trẻ Em", "Thời Trang Nam", "Thời Trang Nữ", "Thời Trang Trẻ Em", "Thời Trang Tập Gym"];
  const priceFilter = ["Dưới 2 triệu", "Từ 2 triệu - 4 triệu", "Từ 4 triệu - 7 triệu", "Từ 7 triệu - 13 triệu", "Trên 13 triệu"];
  const typeFilter = ["Áo Cotton", "Áo Khoác", "Áo phông", "Áo Polo", "Chân váy", "Đồ tập Gym"];
  const brandFilter = ["Been Fashion", "Corduroy"];
  const colorFilter = ["Xanh lá cây", "Đen", "Trắng", "Hồng", "Đỏ", "Cam", "Vàng", "Tím"];
  const fabricTypeFilter = ["Cotton", "Kaki", "Kate", "Jeans", "Len"];
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [sideBarVisible, setSideBarVisible] = useState(window.innerWidth > 980 ? true : false);
  const handleFilterSelect = (item) => {
    console.log(item);
    console.log(selectedFilter.indexOf(item));
    if (selectedFilter.indexOf(item) != -1) {
      removeFilter(item);
    } else {
      setSelectedFilter([...selectedFilter, item]);
    }
  };
  const removeFilter = (item) => {
    var tmp = selectedFilter;
    tmp.splice(selectedFilter.indexOf(item), 1);
    setSelectedFilter([...tmp]);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 980) {
        setSideBarVisible(true);
      }
      if (window.innerWidth < 980) {
        setSideBarVisible(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={cx("container")}>
      {sideBarVisible ? <div onClick={(e) => setSideBarVisible(!sideBarVisible)} className={cx("overlay")}></div> : null}
      <div className={cx("main")}>
        <div style={sideBarVisible ? { left: "284px" } : null} onClick={(e) => setSideBarVisible(!sideBarVisible)} className={cx("filterBtn")}>
          <FaFilter size={20} color="#fff" />
        </div>

        <div style={!sideBarVisible ? { width: "0px" } : null} className={cx("sideBar")}>
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
                <div onClick={(e) => setSelectedFilter([])} className={cx("selectedClear")}>
                  <div className={cx("selectedClearTxt")}>Clear</div>
                </div>
              </div>
              <ul className={cx("selectedList")}>
                {selectedFilter.map((item) => (
                  <li className={cx("selectedItem")}>
                    <div onClick={(e) => removeFilter(item)} className={cx("selectedItemIcon")}>
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
                  <li onClick={(e) => handleFilterSelect(item)} className={cx("filterOptItem")}>
                    <input checked={selectedFilter.indexOf(item) != -1 ? true : false} className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>LOẠI SẢN PHẨM</div>
              <ul className={cx("filterOpt")}>
                {typeFilter.map((item) => (
                  <li onClick={(e) => handleFilterSelect(item)} className={cx("filterOptItem")}>
                    <input checked={selectedFilter.indexOf(item) != -1 ? true : false} className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>THƯƠNG HIỆU</div>
              <ul className={cx("filterOpt")}>
                {brandFilter.map((item) => (
                  <li onClick={(e) => handleFilterSelect(item)} className={cx("filterOptItem")}>
                    <input checked={selectedFilter.indexOf(item) != -1 ? true : false} className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>MÀU SẮC</div>
              <ul className={cx("filterOpt")}>
                {colorFilter.map((item) => (
                  <li onClick={(e) => handleFilterSelect(item)} className={cx("filterOptItem")}>
                    <input checked={selectedFilter.indexOf(item) != -1 ? true : false} className={cx("filterCheckBox")} type="checkbox"></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>KIỂU VẢI</div>
              <ul className={cx("filterOpt")}>
                {fabricTypeFilter.map((item) => (
                  <li onClick={(e) => handleFilterSelect(item)} className={cx("filterOptItem")}>
                    <input checked={selectedFilter.indexOf(item) != -1 ? true : false} className={cx("filterCheckBox")} type="checkbox"></input>
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
              <div className={cx("sortTitle")}>Sắp xếp:</div>
              <select className={cx("sortOpt")}>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>Mặc định</div>
                </option>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>A &#8594; Z</div>
                </option>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>Z &#8594; A</div>
                </option>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>Giá tăng dần</div>
                </option>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>Giá giảm dần</div>
                </option>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>Cũ nhất</div>
                </option>
                <option className={cx("sortOptItem")}>
                  <div className={cx("sortOptItemTxt")}>Mới nhất</div>
                </option>
              </select>
            </div>
          </div>
          <div className={cx("productsContainer")}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => (
              <div className={cx("productCard")}>
                <Product />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
