import { TbEdit } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import style from "./ListProducts.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

function ListProducts() {
  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Danh sách sản phẩm</h1>
      <table className={cx("table-product")}>
        <thead>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/409605809_2046023819099995_2387937422268289495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dvB9E-WZxAoAX8z_tUT&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAM15WHeN2o-_2lZANd9ArAct8gXk34-cn7H9tuU5YlnQ&oe=660F69D2"
                alt=""
                className={cx("product-image")}
              />
            </td>
            <td className={cx("product-name")}>Áo polo</td>
            <td className={cx("product-price")}>50000</td>
            <td className={cx("product-info")}>
              <ul>
                <li>
                  <span className={cx("product-size")}> Size S - </span>
                  <span className={cx("product-color")}> Màu xanh - </span>
                  <span className={cx("product-quantity")}> 50 </span>
                </li>
              </ul>
            </td>
            <td>
              <button className={cx("btn")}>
                <FaEye className={cx("icon", "icon-view")} />
              </button>
            </td>
            <td>
              <button className={cx("btn")}>
                <TbEdit className={cx("icon", "icon-edit")} />
              </button>
            </td>
            <td>
              <button className={cx("btn")}>
                <CiSquareRemove className={cx("icon", "icon-remove")} />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/409605809_2046023819099995_2387937422268289495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dvB9E-WZxAoAX8z_tUT&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAM15WHeN2o-_2lZANd9ArAct8gXk34-cn7H9tuU5YlnQ&oe=660F69D2"
                alt=""
                className={cx("product-image")}
              />
            </td>
            <td className={cx("product-name")}>Áo polo</td>
            <td className={cx("product-price")}>50000</td>
            <td className={cx("product-info")}>
              <ul>
                <li>
                  <span className={cx("product-size")}> Size S - </span>
                  <span className={cx("product-color")}> Màu xanh - </span>
                  <span className={cx("product-quantity")}> 50 </span>
                </li>
                <li>
                  <span className={cx("product-size")}> Size L - </span>
                  <span className={cx("product-color")}> Màu xanh - </span>
                  <span className={cx("product-quantity")}> 70 </span>
                </li>
              </ul>
            </td>
            <td>
              <Link className={cx("btn")}>
                <FaEye className={cx("icon", "icon-view")} />
              </Link>
            </td>
            <td>
              <Link className={cx("btn")}>
                <TbEdit className={cx("icon", "icon-edit")} />
              </Link>
            </td>
            <td>
              <Link className={cx("btn")}>
                <CiSquareRemove className={cx("icon", "icon-remove")} />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts;
