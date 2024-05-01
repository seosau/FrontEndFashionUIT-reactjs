import React, { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import { Await, Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FaPlus, FaFilter } from "react-icons/fa6";
import { BsSortDown } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Toast } from "primereact/toast";
import style from "./AllProducts.module.scss";
import className from "classnames/bind";
import Product from "../../components/Product/Product";
import axiosClient from "../../config/axios";
import AddToCartPopup from "../../components/AddToCartPopup/AddToCartPopup";
import QuickViewPopup from "../../components/QuickViewPopup/QuickViewPopup";
const cx = className.bind(style);

export default function AllProducts() {
  const collectionLinks = [
    "Thời Trang Nam",
    "Thời Trang Nữ",
    "Thời Trang Trẻ Em",
    "Thời Trang Tập Gym",
  ];
  const priceFilter = [
    "Dưới 100.000 đ",
    "Từ 100.000 đ - 200.000 đ",
    "Từ 200.000 đ - 500.000 đ",
    "Từ 500.000 đ - 1.000.000 đ",
    "Trên 1.000.000 đ",
  ];
  const typeFilter = [
    "Áo Cotton",
    "Áo Khoác",
    "Áo phông",
    "Áo Polo",
    "Chân váy",
    "Đồ tập Gym",
  ];
  const colorFilter = [
    "Xanh lá",
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
  // Lấy keyword

  // products
  const [products, setProducts] = useState();
  const [keyword, setKeyWord] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortProducts, setSortProducts] = useState("default");
  // lấy url
  const location = useLocation();
  // lấy products
  const getProducts = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const keywordQuery =
      urlParams.get("searchValue") || urlParams.get("keyword");
    setKeyWord(keywordQuery);
    await axiosClient
      .get(
        `/products?page=${currentPage}&limit=${currentLimit}&keyword=${keywordQuery}`
      )
      .then(({ data }) => {
        setProducts(data.data);
        setTotalPages(data.pagination.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);
  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1);
  };
  const findCommonProducts = (productList) => {
    const countMap = new Map();
    productList.forEach((item) => {
      if (countMap.has(item)) {
        countMap.set(item, countMap.get(item) + 1);
      } else {
        countMap.set(item, 1);
      }
    });

    let maxCount = 0;
    countMap.forEach((count) => {
      if (count > maxCount) {
        maxCount = count;
      }
    });

    const mostFrequentElements = [];
    countMap.forEach((count, element) => {
      if (count === maxCount) {
        mostFrequentElements.push(element);
      }
    });

    return mostFrequentElements;
  };

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortProducts(sortOption);
    if (sortOption === "default") return;
    if (sortOption === "A-Z") {
      products.sort((a, b) => a.name.localeCompare(b.name));
      if (filteredProducts)
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      return;
    }
    if (sortOption === "Z-A") {
      products.sort((a, b) => b.name.localeCompare(a.name));
      if (filteredProducts)
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));

      return;
    }
    if (sortOption === "priceIncrease") {
      products.sort((a, b) => a.price - b.price);
      if (filteredProducts) filteredProducts.sort((a, b) => a.price - b.price);
      return;
    }
    if (sortOption === "priceDecrease") {
      products.sort((a, b) => b.price - a.price);
      if (filteredProducts) filteredProducts.sort((a, b) => b.price - a.price);
      return;
    }
    if (sortOption === "oldest") {
      products.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      if (filteredProducts)
        filteredProducts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      return;
    }
    if (sortOption === "newest") {
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      if (filteredProducts)
        filteredProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      return;
    }
  };

  const [hidePopup, setHidePopup] = useState(true);
  const [showPopupQuickView, setShowPopupQuickView] = useState(false);

  const [cartProduct, setCartProduct] = useState()
  const [quickViewProduct, setQuickViewProduct] = useState()

  const handleClickCart = (product = {}) => {
    setCartProduct(product)
    setHidePopup(!hidePopup);
  };

  const handleClickEye = (product = {}) => {
    setQuickViewProduct(product)
    setShowPopupQuickView(!showPopupQuickView);
  }

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
      let tempProduct = products.filter((product) => (product.price - product.price * product.discount / 100) < 100);
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[1])) {
      let tempProduct = products.filter(
        (product) => (product.price - product.price * product.discount / 100) >= 100 && (product.price - product.price * product.discount / 100) <= 200
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[2])) {
      let tempProduct = products.filter(
        (product) => (product.price - product.price * product.discount / 100) >= 200 && (product.price - product.price * product.discount / 100) <= 500
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[3])) {
      let tempProduct = products.filter(
        (product) => (product.price - product.price * product.discount / 100) >= 500 && (product.price - product.price * product.discount / 100) <= 1000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[4])) {
      let tempProduct = products.filter((product) => (product.price - product.price * product.discount / 100) > 1000);
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }

    // typeFilter
    for (let i = 0; i < typeFilter.length; i++) {
      if (selectedFilter.includes(typeFilter[i])) {
        let tempProduct = products.filter((product) =>
          product.category.categoryDetail.includes(typeFilter[i])
        );
        if (amountType === 0) {
          filteredProductsByType.push(...tempProduct);
        } else {
          filteredProductsByType = filteredProductsByType.filter((product) =>
            tempProduct.includes(product)
          );
        }
        amountType++;
      }
    }

    // colorFilter
    for (let i = 0; i < colorFilter.length; i++) {
      if (selectedFilter.includes(colorFilter[i])) {
        let tempProduct = products.filter((product) =>
          product.colors.some(cl => cl.colorName.toLowerCase() === colorFilter[i].toLowerCase())
        );
        if (amountColor === 0) {
          filteredProductsByColor.push(...tempProduct);
        } else {
          filteredProductsByColor = filteredProductsByColor.filter((product) =>
            tempProduct.includes(product)
          );
        }
        amountColor++;
      }
    }

    // fabricFilter
    for (let i = 0; i < fabricTypeFilter.length; i++) {
      if (selectedFilter.includes(fabricTypeFilter[i])) {
        let tempProduct = products.filter((product) =>
          product.category.fabricType.includes(fabricTypeFilter[i])
        );
        if (amountFabric === 0) {
          filteredProductsByFabric.push(...tempProduct);
        } else {
          filteredProductsByFabric = filteredProductsByFabric.filter(
            (product) => tempProduct.includes(product)
          );
        }
        amountFabric++;
      }
    }

    let filterResult = [];
    if (
      (amountFabric !== 0 && filteredProductsByFabric.length === 0) ||
      (amountPrice !== 0 && filteredProductsByPrice.length === 0) ||
      (amountColor !== 0 && filteredProductsByColor.length === 0) ||
      (amountType !== 0 && filteredProductsByType.length === 0)
    ) {
      filterResult = [];
      setFilteredProducts([]);
      return;
    }
    let filterTemp = [
      ...filteredProductsByPrice,
      ...filteredProductsByType,
      ...filteredProductsByColor,
      ...filteredProductsByFabric,
    ];

    filterResult = findCommonProducts(filterTemp);
    setFilteredProducts(filterResult);
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

  const toast = useRef(null);

  const error = () => {
    toast.current.show({ severity: 'error', summary: 'Lỗi', detail: 'Thêm sản phẩm thất bại', life: 3000 });
  }

  const show = () => {
    toast.current.show({ severity: "success", summary: "Thành công", detail: "Thêm sản phẩm vào giỏ hàng thành công!" });
  };


  useEffect(() => {
    const fetchData = async () => {
      await setCurrentPage(1);
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
    };

    fetchData();
  }, [location.search]);

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
                      onChange={() => { }}
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
                      onChange={() => { }}
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
                      onChange={() => { }}
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
                      onChange={() => { }}
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
            <div className={cx("productsHeadingTitle")}>
              {keyword ? `Kết quả tìm kiếm cho ${keyword}` : "TẤT CẢ SẢN PHẨM"}
            </div>
            <div className={cx("sortContainer")}>
              <div className={cx("sortIcon")}>
                <BsSortDown />
              </div>
              <div className={cx("sortTitle")}>Sắp xếp:</div>
              <select
                className={cx("sortOpt")}
                value={sortProducts}
                onChange={handleSortChange}
              >
                <option className={cx("sortOptItem")} value="default">
                  Mặc định
                </option>
                <option className={cx("sortOptItem")} value="A-Z">
                  A &#8594; Z
                </option>
                <option className={cx("sortOptItem")} value="Z-A">
                  Z &#8594; A
                </option>
                <option className={cx("sortOptItem")} value="priceIncrease">
                  Giá tăng dần
                </option>
                <option className={cx("sortOptItem")} value="priceDecrease">
                  Giá giảm dần
                </option>
                <option className={cx("sortOptItem")} value="oldest">
                  Cũ nhất
                </option>
                <option className={cx("sortOptItem")} value="newest">
                  Mới nhất
                </option>
              </select>
            </div>
          </div>
          <div className={cx("productsContainer")}>
            {products ? (
              selectedFilter.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div className={cx("productCard")} key={index}>
                    <Product
                      discount={product.discount ? true : false}
                      product={product}
                      handleClickCart={() => handleClickCart(product)}
                      handleClickEye={() => handleClickEye(product)}
                    />
                  </div>
                ))
              ) : (
                products.map((product, index) => (
                  <div className={cx("productCard")} key={index}>
                    <Product
                      product={product}
                      discount={product.discount ? true : false}
                      handleClickCart={() => handleClickCart(product)}
                      handleClickEye={() => handleClickEye(product)}
                    />
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
      <Toast ref={toast} />
      {showPopupQuickView &&
        <QuickViewPopup
          product={quickViewProduct}
          togglePopupQuickView={() => setShowPopupQuickView(prevState => !prevState)}
          addToCartSuccess={show}
          addToCartFail={error}
        />}
      {!hidePopup && <div className={cx("cart-popup-backdrop")}></div>}
      {!hidePopup &&
        <AddToCartPopup
          product={cartProduct}
          togglePopup={() => setHidePopup(prevState => !prevState)}
          addToCartSuccess={show}
          addToCartFail={error}
        />}
    </div>
  );
}
