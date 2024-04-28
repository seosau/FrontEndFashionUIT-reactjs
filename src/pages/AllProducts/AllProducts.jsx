import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaPlus, FaFilter } from "react-icons/fa6";
import { BsSortDown } from "react-icons/bs";
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

  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortProducts, setSortProducts] = useState('default')
  const getProducts = async () => {
    await axiosClient
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findCommonProducts = (productList) => {
    const countMap = new Map();
    productList.forEach(item => {
      if (countMap.has(item)) {
        countMap.set(item, countMap.get(item) + 1);
      } else {
        countMap.set(item, 1);
      }
    });

    let maxCount = 0;
    countMap.forEach(count => {
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
  }

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortProducts(sortOption)
    if (sortOption === 'default')
      return;
    if (sortOption === 'A-Z') {
      products.sort((a, b) => a.name.localeCompare(b.name))
      if (filteredProducts)
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      return;
    }
    if (sortOption === 'Z-A') {
      products.sort((a, b) => b.name.localeCompare(a.name))
      if (filteredProducts)
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name))

      return;
    }
    if (sortOption === 'priceIncrease') {
      products.sort((a, b) => a.price - b.price)
      if (filteredProducts)
        filteredProducts.sort((a, b) => a.price - b.price)
      return;
    }
    if (sortOption === 'priceDecrease') {
      products.sort((a, b) => b.price - a.price)
      if (filteredProducts)
        filteredProducts.sort((a, b) => b.price - a.price)
      return;
    }
    if (sortOption === 'oldest') {
      products.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      if (filteredProducts)
        filteredProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      return;
    }
    if (sortOption === 'newest') {
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      if (filteredProducts)
        filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      return;
    }
  }
  console.log(products)

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
      let tempProduct = products.filter((product) => product.price < 2000);
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[1])) {
      let tempProduct = products.filter(
        (product) => product.price >= 2000 && product.price <= 4000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[2])) {
      let tempProduct = products.filter(
        (product) => product.price >= 4000 && product.price <= 7000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[3])) {
      let tempProduct = products.filter(
        (product) => product.price >= 7000 && product.price <= 13000
      );
      filteredProductsByPrice = [...filteredProductsByPrice, ...tempProduct];
      amountPrice++;
    }
    if (selectedFilter.includes(priceFilter[4])) {
      let tempProduct = products.filter((product) => product.price > 13000);
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
          product.color.includes(colorFilter[i].toLowerCase())
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
          filteredProductsByFabric = filteredProductsByFabric.filter((product) =>
            tempProduct.includes(product)
          );
        }
        amountFabric++;
      }
    }

    console.log(amountType)

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
      ...filteredProductsByFabric
    ];

    filterResult = findCommonProducts(filterTemp)
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
            <div className={cx("productsHeadingTitle")}>TẤT CẢ SẢN PHẨM</div>
            <div className={cx("sortContainer")}>
              <div className={cx("sortIcon")}>
                <BsSortDown />
              </div>
              <div className={cx("sortTitle")}>Sắp xếp:</div>
              <select className={cx("sortOpt")} value={sortProducts} onChange={handleSortChange}>
                <option className={cx("sortOptItem")} value='default'>Mặc định</option>
                <option className={cx("sortOptItem")} value='A-Z'>A &#8594; Z</option>
                <option className={cx("sortOptItem")} value='Z-A'>Z &#8594; A</option>
                <option className={cx("sortOptItem")} value='priceIncrease'>Giá tăng dần</option>
                <option className={cx("sortOptItem")} value='priceDecrease'>Giá giảm dần</option>
                <option className={cx("sortOptItem")} value='oldest'>Cũ nhất</option>
                <option className={cx("sortOptItem")} value='newest'>Mới nhất</option>
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
    </div>
  );
}
