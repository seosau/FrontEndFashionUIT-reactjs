import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FaPlus, FaFilter } from "react-icons/fa6";
import { BsSortDown } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";

import style from "./AllProducts.module.scss";
import className from "classnames/bind";
import Product from "../../components/Product/Product";
import axiosClient from "../../config/axios";

const cx = className.bind(style);

export default function AllProducts() {
  const collectionLinks = [
    "Thời Trang Nam",
    "Thời Trang Nữ",
    "Thời Trang Trẻ Em",
    "Thời Trang Tập Gym",
  ];
  const priceFilter = [
    "Dưới 2 triệu",
    "Từ 2 triệu - 4 triệu",
    "Từ 4 triệu - 7 triệu",
    "Từ 7 triệu - 13 triệu",
    "Trên 13 triệu",
  ];
  const typeFilter = [
    "Áo Cotton",
    "Áo Khoác",
    "Áo phông",
    "Áo Polo",
    "Chân váy",
    "Đồ tập Gym",
  ];
  const brandFilter = ["Been Fashion", "Corduroy"];
  const colorFilter = [
    "Xanh lá cây",
    "Đen",
    "Trắng",
    "Hồng",
    "Đỏ",
    "Cam",
    "Vàng",
    "Tím",
  ];
  const fabricTypeFilter = ["Cotton", "Kaki", "Kate", "Jeans", "Len"];
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [sideBarVisible, setSideBarVisible] = useState(
    window.innerWidth > 980 ? true : false
  );

  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const getProducts = async () => {
    await axiosClient
      .get(`/products?page=${currentPage}&limit=${currentLimit}`)
      .then(({ data }) => {
        setProducts(data.data);
        setTotalPages(data.pagination.totalPages)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1);
  };
  const filterProducts = () => {
    let amountPrice = 0;
    let amountType = 0;
    let amountColor = 0;
    let amountFabric = 0;

    let filteredProductsByPrice = [];
    let filteredProductsByType = [];
    let filteredProductsByColor = [];
    let filteredProductsByFabric = [];

    // priceFilter
    if (selectedFilter.includes(priceFilter[0])) {
      let tempProduct = products.filter((product) => product.price < 2000000);
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[1])) {
      let tempProduct = products.filter(
        (product) => product.price >= 2000000 && product.price <= 4000000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[2])) {
      let tempProduct = products.filter(
        (product) => product.price >= 4000000 && product.price <= 7000000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[3])) {
      let tempProduct = products.filter(
        (product) => product.price >= 7000000 && product.price <= 13000000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[4])) {
      let tempProduct = products.filter((product) => product.price > 13000000);
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }

    // typeFilter
    if (selectedFilter.includes(typeFilter[0])) {
      let tempProduct = products.filter((product) =>
        product.category.categoryDetail.includes(typeFilter[0])
      );
      filteredProductsByType = [...filteredProductsByType, ...tempProduct];
      amountType++;
    }
    if (selectedFilter.includes(typeFilter[1])) {
      let tempProduct = products.filter((product) =>
        product.category.categoryDetail.includes(typeFilter[1])
      );
      filteredProductsByType = [...filteredProductsByType, ...tempProduct];
      amountType++;
    }
    if (selectedFilter.includes(typeFilter[2])) {
      let tempProduct = products.filter((product) =>
        product.category.categoryDetail.includes(typeFilter[2])
      );
      filteredProductsByType = [...filteredProductsByType, ...tempProduct];
      amountType++;
    }
    if (selectedFilter.includes(typeFilter[3])) {
      let tempProduct = products.filter((product) =>
        product.category.categoryDetail.includes(typeFilter[3])
      );
      filteredProductsByType = [...filteredProductsByType, ...tempProduct];
      amountType++;
    }
    if (selectedFilter.includes(typeFilter[4])) {
      let tempProduct = products.filter((product) =>
        product.category.categoryDetail.includes(typeFilter[4])
      );
      filteredProductsByType = [...filteredProductsByType, ...tempProduct];
      amountType++;
    }
    if (selectedFilter.includes(typeFilter[5])) {
      let tempProduct = products.filter((product) =>
        product.category.categoryDetail.includes(typeFilter[5])
      );
      filteredProductsByType = [...filteredProductsByType, ...tempProduct];
      amountType++;
    }

    // colorFilter
    if (selectedFilter.includes(colorFilter[0])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[0].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[1])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[1].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[2])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[2].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[3])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[3].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[4])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[4].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[5])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[5].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[6])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[6].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }
    if (selectedFilter.includes(colorFilter[7])) {
      let tempProduct = products.filter((product) =>
        product.color.includes(colorFilter[7].toLowerCase())
      );
      filteredProductsByColor = [...filteredProductsByColor, ...tempProduct];
      amountColor++;
    }

    // fabricFilter
    if (selectedFilter.includes(fabricTypeFilter[0])) {
      let tempProduct = products.filter((product) =>
        product.category.fabricType.includes(fabricTypeFilter[0])
      );
      filteredProductsByFabric = [...filteredProductsByFabric, ...tempProduct];
      amountFabric++;
    }
    if (selectedFilter.includes(fabricTypeFilter[1])) {
      let tempProduct = products.filter((product) =>
        product.category.fabricType.includes(fabricTypeFilter[1])
      );
      filteredProductsByFabric = [...filteredProductsByFabric, ...tempProduct];
      amountFabric++;
    }
    if (selectedFilter.includes(fabricTypeFilter[2])) {
      let tempProduct = products.filter((product) =>
        product.category.fabricType.includes(fabricTypeFilter[2])
      );
      filteredProductsByFabric = [...filteredProductsByFabric, ...tempProduct];
      amountFabric++;
    }
    if (selectedFilter.includes(fabricTypeFilter[3])) {
      let tempProduct = products.filter((product) =>
        product.category.fabricType.includes(fabricTypeFilter[3])
      );
      filteredProductsByFabric = [...filteredProductsByFabric, ...tempProduct];
      amountFabric++;
    }
    if (selectedFilter.includes(fabricTypeFilter[4])) {
      let tempProduct = products.filter((product) =>
        product.category.fabricType.includes(fabricTypeFilter[4])
      );
      filteredProductsByFabric = [...filteredProductsByFabric, ...tempProduct];
      amountFabric++;
    }

    let filterTemp = [
      ...filteredProductsByPrice,
      ...filteredProductsByType,
      ...filteredProductsByColor,
      ...filteredProductsByFabric,
    ];
    let filterResult = [...filterTemp];

    if (
      (amountFabric !== 0 && filteredProductsByFabric.length === 0) ||
      (amountPrice !== 0 && filteredProductsByPrice.length === 0) ||
      (amountColor !== 0 && filteredProductsByColor.length === 0) ||
      (amountType !== 0 && filteredProductsByType.length === 0)
    )
      filterResult = [];
    for (let i = 0; i < filterTemp.length - 1; i++) {
      for (let j = i + 1; j < filterTemp.length; j++) {
        if (filterTemp[i]._id === filterTemp[j]._id) {
          if (filterResult.length === filterTemp.length) filterResult = [];
          filterResult.push(filterTemp[i]);
          break;
        }
      }
    }

    setFilteredProducts([...new Set(filterResult)]);
  };

  const handleFilterSelect = (item) => {
    // console.log(item);
    // console.log(selectedFilter.indexOf(item));
    if (selectedFilter.indexOf(item) !== -1) {
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
    getProducts();
  }, [currentPage]);
  useEffect(() => {
    getProducts();
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
  useEffect(() => {
    filterProducts();
  }, [selectedFilter]);
  return (
    <div className={cx("container")}>
      {sideBarVisible ? (
        <div
          onClick={(e) => setSideBarVisible(!sideBarVisible)}
          className={cx("overlay")}
        ></div>
      ) : null}
      <div className={cx("main")}>
        <div
          style={sideBarVisible ? { left: "284px" } : null}
          onClick={(e) => setSideBarVisible(!sideBarVisible)}
          className={cx("filterBtn")}
        >
          <FaFilter size={20} color="#fff" />
        </div>

        <div
          style={!sideBarVisible ? { width: "0px" } : null}
          className={cx("sideBar")}
        >
          <div className={cx("collectionContainer")}>
            <div className={cx("collectionTitle")}>DANH MỤC SẢN PHẨM</div>
            <ul className={cx("collectionLinkContainer")}>
              {collectionLinks.map((item, index) => (
                <li className={cx("collectionLinkItem")} key={index}>
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
                <div
                  onClick={(e) => setSelectedFilter([])}
                  className={cx("selectedClear")}
                >
                  <div className={cx("selectedClearTxt")}>Clear</div>
                </div>
              </div>
              <ul className={cx("selectedList")}>
                {selectedFilter.map((item, index) => (
                  <li className={cx("selectedItem")} key={index}>
                    <div
                      onClick={(e) => removeFilter(item)}
                      className={cx("selectedItemIcon")}
                    >
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
                {priceFilter.map((item, index) => (
                  <li
                    onClick={(e) => handleFilterSelect(item)}
                    className={cx("filterOptItem")}
                    key={index}
                  >
                    <input
                      checked={
                        selectedFilter.indexOf(item) !== -1 ? true : false
                      }
                      className={cx("filterCheckBox")}
                      type="checkbox"
                      onChange={() => {}}
                    ></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>LOẠI SẢN PHẨM</div>
              <ul className={cx("filterOpt")}>
                {typeFilter.map((item, index) => (
                  <li
                    onClick={(e) => handleFilterSelect(item)}
                    className={cx("filterOptItem")}
                    key={index}
                  >
                    <input
                      checked={
                        selectedFilter.indexOf(item) !== -1 ? true : false
                      }
                      className={cx("filterCheckBox")}
                      type="checkbox"
                      onChange={() => {}}
                    ></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>THƯƠNG HIỆU</div>
              <ul className={cx("filterOpt")}>
                {brandFilter.map((item, index) => (
                  <li
                    onClick={(e) => handleFilterSelect(item)}
                    className={cx("filterOptItem")}
                    key={index}
                  >
                    <input
                      checked={
                        selectedFilter.indexOf(item) !== -1 ? true : false
                      }
                      className={cx("filterCheckBox")}
                      type="checkbox"
                      onChange={() => {}}
                    ></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>MÀU SẮC</div>
              <ul className={cx("filterOpt")}>
                {colorFilter.map((item, index) => (
                  <li
                    onClick={(e) => handleFilterSelect(item)}
                    className={cx("filterOptItem")}
                    key={index}
                  >
                    <input
                      checked={
                        selectedFilter.indexOf(item) !== -1 ? true : false
                      }
                      className={cx("filterCheckBox")}
                      type="checkbox"
                      onChange={() => {}}
                    ></input>
                    <p className={cx("filterOptItemTxt")}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("filterItem")}>
              <div className={cx("filterItemTitle")}>KIỂU VẢI</div>
              <ul className={cx("filterOpt")}>
                {fabricTypeFilter.map((item, index) => (
                  <li
                    onClick={(e) => handleFilterSelect(item)}
                    className={cx("filterOptItem")}
                    key={index}
                  >
                    <input
                      checked={
                        selectedFilter.indexOf(item) !== -1 ? true : false
                      }
                      className={cx("filterCheckBox")}
                      type="checkbox"
                      onChange={() => {}}
                    ></input>
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
                <option className={cx("sortOptItem")}>Mặc định</option>
                <option className={cx("sortOptItem")}>A &#8594; Z</option>
                <option className={cx("sortOptItem")}>Z &#8594; A</option>
                <option className={cx("sortOptItem")}>Giá tăng dần</option>
                <option className={cx("sortOptItem")}>Giá giảm dần</option>
                <option className={cx("sortOptItem")}>Cũ nhất</option>
                <option className={cx("sortOptItem")}>Mới nhất</option>
              </select>
            </div>
          </div>
          <div className={cx("productsContainer")}>
            {products ? (
              selectedFilter.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div className={cx("productCard")} key={index}>
                    <Product product={product} />
                  </div>
                ))
              ) : (
                products.map((product, index) => (
                  <div className={cx("productCard")} key={index}>
                    <Product product={product} />
                  </div>
                ))
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {totalPages > 0 && (
        <div className={cx("paginations-container")}>
          <ReactPaginate
            nextLabel={<GrNext />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={totalPages}
            previousLabel={<GrPrevious />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
}
