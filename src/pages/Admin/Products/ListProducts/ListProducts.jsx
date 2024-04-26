import { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import axiosClient from "../../../../config/axios";
import { useDebounce } from "../../../../hooks";

import style from "./ListProducts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function ListProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);

    inputRef.current.focus();
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  useEffect(() => {
    if (!debounced.trim()) {
      // setSearchResult([]);
      // return;
      axiosClient
        .get("/admin/products")
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error));
    }
    const fetchApi = async () => {
      setLoading(true);

      await axiosClient
        .get(`/product/search/${debounced}`)
        .then(({ data }) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, [debounced]);
  const convertStringDate = (stringTime) => {
    var date = new Date(stringTime);
    var nam = date.getFullYear();
    var thang = date.getMonth() + 1;
    var ngay = date.getDate();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();
    const chuoiNgayThangNam =
      (ngay < 10 ? "0" : "") +
      ngay +
      "/" +
      (thang < 10 ? "0" : "") +
      thang +
      "/" +
      nam;
    return {
      date: chuoiNgayThangNam,
      time: gio + "h" + phut + "m" + giay + "s",
    };
  };
  const deleteProduct = (slug) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.slug !== slug)
    );
    axiosClient
      .delete(`/admin/product/delete/${slug}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const selectedProduct = (slug) => {
    if (selectedProducts.includes(slug)) {
      const fillteredArr = selectedProducts.filter(
        (productSlug) => productSlug !== slug
      );
      setSelectedProducts([...fillteredArr]);
    } else {
      setSelectedProducts([...selectedProducts, slug]);
    }
  };
  const selectedAllProducts = () => {
    const slugArr = products.map((product) => product.slug);
    if (selectedProducts.length > 0) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts([...slugArr]);
    }
  };
  const deleteSelectedproduct = (e) => {
    e.preventDefault();
    axiosClient
      .delete("/admin/product/delete/all", { data: selectedProducts })
      .then((res) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) =>
            !selectedProducts.includes(product.slug)
          )
        );
        setSelectedProducts([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={cx("addproduct__container")}>
      <div className={cx("addproduct__header")}>
        <h1 className={cx("addproduct__header-title")}>Danh sách sản phẩm</h1>
        <Link
          to="/admin/product/create"
          className={cx("addproduct__header-btn-create")}
        >
          <IoMdAdd />
          <span>Thêm sản phẩm</span>
        </Link>
      </div>
      <div className={cx("addproduct__body")}>
        <div className={cx("addproduct__action")}>
          {/* <select name="stock" id="" className={cx("action-stock")}>
            <option value="">In stock</option>
            <option value="">Low stock</option>
            <option value="">Out of stock</option>
          </select>
          <select name="stock" id="" className={cx("action-active")}>
            <option value="">Published</option>
            <option value="">Draft</option>
          </select> */}
          <div className={cx("action-search")}>
            <GoSearch className={cx("action-search-icon")} />
            <input
              type="text"
              className={cx("action-search-input")}
              placeholder="Tìm kiếm sản phẩm..."
              onChange={handleChange}
            />
          </div>
          <div className={cx("action-delete")}>
            {selectedProducts.length > 0 ? (
              <>
                <FaTrashAlt />
                <button onClick={deleteSelectedproduct}>
                  Delete {selectedProducts.length}
                </button>
              </>
            ) : null}
          </div>
        </div>
        <table className={cx("addproduct__table")}>
          <thead className={cx("table-head-list")}>
            <tr>
              <th className={cx("table-head-item")}>
                <input
                  type="checkbox"
                  className={cx("action-checkbox")}
                  onChange={selectedAllProducts}
                  checked={selectedProducts.length > 0}
                />
              </th>
              <th className={cx("table-head-item")}>Tên sản phẩm</th>
              <th className={cx("table-head-item")}>Thời gian tạo</th>
              <th className={cx("table-head-item")}>Kho hàng</th>
              <th className={cx("table-head-item")}>Giá</th>
              <th className={cx("table-head-item")}>Tình trạng</th>
              <th className={cx("table-head-item")}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx("table-body")}>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr className={cx("product-item")}>
                  <td className={cx("action-checkbox")}>
                    <input
                      type="checkbox"
                      onChange={() => selectedProduct(product.slug)}
                      checked={selectedProducts.includes(product.slug)}
                    />
                  </td>
                  <td>
                    <div className={cx("product-info")}>
                      <img
                        src={product.images[0].imgUrl}
                        alt={product.slug}
                        className={cx("product-img")}
                      />
                      <div className={cx("product-info-detail")}>
                        <p className={cx("product-name")}>
                          <strong>{product.name}</strong>
                        </p>
                        <span className={cx("product-category")}>
                          {product.category.categoryDetail}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={cx("product-time")}>
                    <p className={cx("product-date")}>
                      <strong>
                        {convertStringDate(product.updatedAt).date}
                      </strong>
                    </p>
                    <span className={cx("product-time-detail")}>
                      {convertStringDate(product.updatedAt).time}
                    </span>
                  </td>
                  <td className={cx("product-stock")}>
                    {product.stock.map((stockItem) => (
                      <p className={cx("product-stock-detail")}>
                        Size : {stockItem.size} - Màu : {stockItem.color} -{" "}
                        {stockItem.quantity} cái
                      </p>
                    ))}
                  </td>
                  <td className={cx("product-price")}>
                    {product.price}.000vnd
                  </td>
                  <td className={cx("product-status")}>
                    {product?.status ? "Có" : "Không"}
                  </td>
                  <td className={cx("product-action")}>
                    <ul className={cx("product-action-list")}>
                      <li className={cx("product-action-item")}>
                        <Link to={`/admin/product/edit/${product.slug}`}>
                          <TbEdit className={cx("icon", "icon-edit")} />
                          Edit
                        </Link>
                      </li>
                      <li className={cx("product-action-item")}>
                        <CiSquareRemove
                          className={cx("icon", "icon-remove")}
                          onClick={() => deleteProduct(product.slug)}
                        />
                        Remove
                      </li>
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <div>Chưa có sản phẩm nào</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
