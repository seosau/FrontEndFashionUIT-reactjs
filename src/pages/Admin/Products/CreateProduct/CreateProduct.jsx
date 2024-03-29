import { CiCircleRemove } from "react-icons/ci";
import style from "./CreateProduct.module.scss";
import className from "classnames/bind";
const cx = className.bind(style);
function CreateProduct() {
  return (
    <div className={cx("container")}>
      <form className={cx("formcontainer")}>
        <h2 className={cx("title")}>Biểu mẫu thêm sản phẩm</h2>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Tên sản phẩm
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="productname"
            placeholder="Áo Polo Nam Slim Fit Ôm Vừa Người, Tôn Dáng"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Loại sản phẩm
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="productType"
            placeholder="Áo"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Loại sản phẩm chi tiết
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="productTypeDetail"
            placeholder="Áo Polo"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Chất liệu
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="fabric"
            placeholder="Cotton "
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Giới tính
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="sex"
            placeholder="Nam"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Kích cỡ
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="size"
            placeholder="Size S"
          />
          <ul className={cx("list-size")}>
            <li className={cx("item-size")}>
              <span>Size S</span>
              <CiCircleRemove className={cx("icon-remove")} />
            </li>
            <li className={cx("item-size")}>
              <span>Size L</span>
              <CiCircleRemove className={cx("icon-remove")} />
            </li>
          </ul>
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Màu sắc
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="color"
            placeholder="Nâu"
          />
          <ul className={cx("list-size")}>
            <li className={cx("item-size")}>
              <span>Màu nâu</span>
              <CiCircleRemove className={cx("icon-remove")} />
            </li>
            <li className={cx("item-size")}>
              <span>Màu đỏ</span>
              <CiCircleRemove className={cx("icon-remove")} />
            </li>
          </ul>
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Giá
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="productprice"
            placeholder="245.000₫"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Mô tả sản phẩm
          </label>
          <br />
          <textarea
            className={cx("form-control")}
            name="description"
            rows={5}
            placeholder="Chất liệu Cotton tự nhiên mềm mại, thấm hút mồ hôi và thoáng khí mang lang lại cảm giác thoải mái, dễ chịu mỗi ngày.
Thiết kế ngắn tay, cổ tròn, kiểu dáng regular dễ dàng kết hợp với các trang phục khác."
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Hình ảnh
          </label>
          <br />
          <input type="file" className={cx("form-control")} name="image" />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Mã giảm giá
          </label>
          <br />
          <input type="text" className={cx("form-control")} name="discount" />
        </div>
        <button className={cx("form-submit")}>Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default CreateProduct;
