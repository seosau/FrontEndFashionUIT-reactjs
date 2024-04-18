import { useState, useEffect } from "react";
import axiosClient from "../../../../config/axios";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import style from "./ListProducts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function ListProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/admin/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Danh sách sản phẩm</h1>
      <table className={cx("table-product")}>
        <thead>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={product.images[0].imgUrl}
                    alt={product.slug}
                    className={cx("product-image")}
                  />
                </td>
                <td className={cx("product-name")}>{product.name}</td>
                <td className={cx("product-desc")}>{product.description}</td>
                <td className={cx("product-price")}>{product.price} .000vnd</td>
                <td className={cx("product-info")}>
                  <ul>
                    {product.stock.map((infoStock, index) => (
                      <li key={index}>
                        <span className={cx("product-size")}>
                          {" "}
                          Size {infoStock.size} -{" "}
                        </span>
                        <span className={cx("product-color")}>
                          Màu {infoStock.color} -
                        </span>
                        <span className={cx("product-quantity")}>
                          {" "}
                          {infoStock.quantity}{" "}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button className={cx("btn")}>
                    <FaEye className={cx("icon", "icon-view")} />
                  </button>
                </td>
                <td>
                  <Link
                    className={cx("btn")}
                    to={`/admin/product/edit/${product.slug}`}
                  >
                    <TbEdit className={cx("icon", "icon-edit")} />
                  </Link>
                </td>
                <td>
                  <button className={cx("btn")}>
                    <CiSquareRemove className={cx("icon", "icon-remove")} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts;
