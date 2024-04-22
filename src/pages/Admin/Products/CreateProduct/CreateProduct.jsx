// use hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// use icons
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

// use axios
import axiosClient from "../../../../config/axios";

// use validation form
import { checkEmptyKeys, generateErrorMessage } from "../../../../utils";
// use style
import style from "./CreateProduct.module.scss";
import className from "classnames/bind";
const cx = className.bind(style);

const productSample = {
  name: "",
  images: [],
  description: "",
  price: 0,
  category: {
    categoryType: "",
    sex: "",
    fabricType: "",
    categoryDetail: "",
  },
  color: [],
  size: [],
  stock: [],
  discount: 0,
};

function CreateProduct() {
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState(productSample);
  const [currentSize, setCurrentSize] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [errors, setErrors] = useState({});
  const addSize = (e) => {
    e.preventDefault();
    if (currentSize.trim() !== "") {
      const isExistedSize = productInfo.size.includes(
        currentSize.toUpperCase()
      );
      if (!isExistedSize) {
        setProductInfo({
          ...productInfo,
          size: [...productInfo.size, currentSize.toUpperCase()],
        });
      }
      setCurrentSize("");
    }
  };
  const removeSize = (index) => {
    const sizeRemoved = productInfo.size[index];
    const newSizeArr = productInfo.size.filter((size, idx) => idx !== index);
    const newStock = productInfo.stock.filter(
      (item) => item.size !== sizeRemoved
    );
    setProductInfo({
      ...productInfo,
      size: newSizeArr,
      stock: newStock,
    });
  };
  const addColor = (e) => {
    e.preventDefault();
    if (currentColor.trim() !== "") {
      const isExistedColor = productInfo.color.includes(
        currentColor.toLowerCase()
      );
      if (!isExistedColor) {
        setProductInfo({
          ...productInfo,
          color: [...productInfo.color, currentColor.toLowerCase()],
        });
      }
      setCurrentColor("");
    }
  };
  const removeColor = (index) => {
    const colorRemoved = productInfo.color[index];
    const newColorArr = productInfo.color.filter((size, idx) => idx !== index);
    const newStock = productInfo.stock.filter(
      (item) => item.color !== colorRemoved
    );
    setProductInfo({
      ...productInfo,
      color: newColorArr,
      stock: newStock,
    });
  };
  useEffect(() => {
    if (productInfo.size.length > 0 && productInfo.color.length > 0) {
      const newProductInStock = productInfo.size
        .map((size) =>
          productInfo.color.map((color) => ({ size, color, quantity: 0 }))
        )
        .flat();
      const newProductInStockMerged = [...productInfo.stock];
      newProductInStock.forEach((newItem) => {
        const existingItemIndex = newProductInStockMerged.findIndex(
          (oldItem) =>
            oldItem.color === newItem.color && oldItem.size === newItem.size
        );
        if (existingItemIndex === -1) {
          newProductInStockMerged.push(newItem);
        }
      });
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        stock: [...newProductInStockMerged],
      }));
    } else {
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        stock: [],
      }));
    }
  }, [productInfo.size, productInfo.color]);

  const updateStockQuantity = (index, quantity) => {
    const newProductInStock = [...productInfo.stock];
    newProductInStock[index].quantity = quantity;
    setProductInfo({ ...productInfo, stock: [...newProductInStock] });
  };

  const onImageChoose = (e, color) => {
    const files = e.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        newImages.push({
          imgUrl: reader.result,
          color,
        });
        if (newImages.length === files.length) {
          setProductInfo({
            ...productInfo,
            images: [...productInfo.images, ...newImages],
          });

          e.target.value = "";
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const removeImage = (index) => {
    setProductInfo({
      ...productInfo,
      images: productInfo.images.filter((image, idx) => idx !== index),
    });
  };

  const addProduct = (e) => {
    e.preventDefault();

    const emptyKeys = checkEmptyKeys(productInfo);
    const newErrors = {};
    emptyKeys.forEach((key) => {
      newErrors[key] = generateErrorMessage(key);
    });
    if (Object.keys(newErrors).length > 1) {
      setErrors(newErrors);
    } else {
      axiosClient
        .post("/admin/product/store", productInfo)
        .then((res) => {
          navigate("/admin/products");
        })
        .catch((error) => console.log(error));
    }
  };
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
            value={productInfo.name}
            onChange={(e) =>
              setProductInfo({ ...productInfo, name: e.target.value })
            }
          />
          {errors?.name ? (
            <span className={cx("error-text")}>{errors.name}</span>
          ) : null}
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
            value={productInfo.category.categoryType}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                category: {
                  ...productInfo.category,
                  categoryType: e.target.value,
                },
              })
            }
          />
          {errors["category.categoryType"] ? (
            <span className={cx("error-text")}>
              {errors["category.categoryType"]}
            </span>
          ) : null}
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
            value={productInfo.category.categoryDetail}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                category: {
                  ...productInfo.category,
                  categoryDetail: e.target.value,
                },
              })
            }
          />
          {errors["category.categoryDetail"] ? (
            <span className={cx("error-text")}>
              {errors["category.categoryDetail"]}
            </span>
          ) : null}
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
            value={productInfo.category.fabricType}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                category: {
                  ...productInfo.category,
                  fabricType: e.target.value,
                },
              })
            }
          />
          {errors["category.fabricType"] ? (
            <span className={cx("error-text")}>
              {errors["category.fabricType"]}
            </span>
          ) : null}
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
            value={productInfo.category.sex}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                category: { ...productInfo.category, sex: e.target.value },
              })
            }
          />
          {errors["category.sex"] ? (
            <span className={cx("error-text")}>{errors["category.sex"]}</span>
          ) : null}
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Kích cỡ
          </label>
          <br />
          <div className={cx("form-action")}>
            <input
              type="text"
              className={cx("form-control")}
              name="size"
              placeholder="Size S"
              value={currentSize}
              onChange={(e) => setCurrentSize(e.target.value)}
            />
            <button className={cx("form-btn-add")} onClick={addSize}>
              <IoIosAddCircleOutline className={cx("icon-add")} />
            </button>
            {errors?.size ? (
              <span className={cx("error-text")}>{errors.size}</span>
            ) : null}
          </div>
          {productInfo.size.length > 0 && (
            <ul className={cx("list-size")}>
              {productInfo.size.map((size, index) => (
                <li className={cx("item-size")}>
                  <span>Size {size}</span>
                  <CiCircleRemove
                    className={cx("icon-remove")}
                    onClick={() => removeSize(index)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Màu sắc
          </label>
          <br />
          <div className={cx("form-action")}>
            <input
              type="text"
              className={cx("form-control")}
              name="color"
              placeholder="Nâu"
              value={currentColor}
              onChange={(e) => setCurrentColor(e.target.value)}
            />
            <button className={cx("form-btn-add")} onClick={addColor}>
              <IoIosAddCircleOutline className={cx("icon-add")} />
            </button>
            {errors?.color ? (
              <span className={cx("error-text")}>{errors.color}</span>
            ) : null}
          </div>
          {productInfo.color.length > 0 && (
            <ul className={cx("list-size")}>
              {productInfo.color.map((color, index) => (
                <li className={cx("item-size")}>
                  <span className={cx("img-color")}>Màu {color}</span>
                  <CiCircleRemove
                    className={cx("icon-remove")}
                    onClick={() => removeColor(index)}
                  />
                </li>
              ))}
            </ul>
          )}
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
            value={productInfo.price}
            onChange={(e) =>
              setProductInfo({ ...productInfo, price: Number(e.target.value) })
            }
          />
          {errors?.price ? (
            <span className={cx("error-text")}>{errors.price}</span>
          ) : null}
        </div>
        {productInfo.stock.length > 0 && (
          <div className={cx("form-group")}>
            <label htmlFor="productname" className={cx("form-label")}>
              Nhập dữ liệu trong kho
            </label>
            <ul className={cx("list-stock")}>
              {productInfo.stock.map((item, index) => (
                <li className={cx("item-stock")}>
                  <span>
                    Size {item.size} - Màu {item.color}:
                  </span>

                  <input
                    type="text"
                    value={item.quantity}
                    placeholder="Nhập số lượng"
                    onChange={(e) =>
                      updateStockQuantity(index, Number(e.target.value))
                    }
                  />
                </li>
              ))}
            </ul>
            {errors?.stock ? (
              <span className={cx("error-text")}>{errors.stock}</span>
            ) : null}
            <br />
          </div>
        )}

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
            value={productInfo.description}
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
          />
          {errors?.description ? (
            <span className={cx("error-text")}>{errors.description}</span>
          ) : null}
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Hình ảnh
          </label>
          <br />
          {productInfo.color.map((color) => (
            <div className={cx("form-action")}>
              <div className={cx("form-flex")}>
                <span className={cx("img-color")}>Màu {color}</span>
                <button className={cx("btn-chooseImg")}>
                  <input
                    className={cx("img-choose-input")}
                    multiple
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => onImageChoose(e, color)}
                  />
                  Chọn
                </button>
              </div>
              {productInfo.images.length > 0 && (
                <div className={cx("imgs-container")}>
                  {productInfo.images.map((image, index) => {
                    return image.color === color ? (
                      <span className={cx("img-item")}>
                        <CiCircleRemove
                          className={cx("icon-remove", "icon-remove-position")}
                          onClick={() => removeImage(index)}
                        />
                        <img
                          src={image.imgUrl}
                          alt={image.color}
                          className={cx("img-choosen")}
                        />
                      </span>
                    ) : null;
                  })}
                </div>
              )}
              {errors?.images ? (
                <span className={cx("error-text")}>{errors.images}</span>
              ) : null}
            </div>
          ))}
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Mã giảm giá
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="discount"
            value={productInfo.discount}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                discount: Number(e.target.value),
              })
            }
          />
        </div>
        <button className={cx("form-submit")} onClick={addProduct}>
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
