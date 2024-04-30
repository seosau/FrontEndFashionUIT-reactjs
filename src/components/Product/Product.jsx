import React from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import { LuX } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useStateContext } from "../../context/CartContextProvider";
import className from "classnames/bind";
import axiosClient from "../../config/axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import QuickViewInfo from "../QuickViewInfo/QuickViewInfo";
const cx = className.bind(styles);

export default function Product({
  product,
  ranking,
  newPrice,
  productCount,
  productCountSale,
  discount,
  openPopup,
}) {
  const { cartItems, setQuantityInCart, setCartItems } = useStateContext();
  const { isAuth } = useContext(AuthContext);
  const [hidePopup, setHidePopup] = useState(true);
  const [showPopupQuickView, setShowPopupQuickView] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setquantity] = useState(1);

  const handleClickCart = () => {
    setHidePopup(!hidePopup);
  };

  const handleAddToCart = async () => {
    if (isAuth) {
      if (product.stock === 0) {
        return alert("Hết sản phẩm");
      }

      if (!selectedSize) {
        alert("vui lòng chọn size");
        return;
      }

      if (!selectedColor) {
        alert("vui lòng chọn màu");
        return;
      }

      const data = {
        products: {
          productId: product._id,
          size: selectedSize,
          color: selectedColor,
          quantity: parseInt(quantity),
          price: product.price,
        },
      };

      axiosClient
        .post("/cart/add", data)
        .then((response) => {
          console.log(response.data.message);
          setQuantityInCart(response.data.quantity);
          const tmp = [...cartItems];

          const existingItemIndex = cartItems.findIndex(
            (item) =>
              item.productId === data.products.productId &&
              item.size === data.products.size &&
              item.color === data.products.color
          );

          if (existingItemIndex !== -1) {
            tmp[existingItemIndex].quantity += parseInt(data.products.quantity);
          } else {
            tmp.push(data.products);
          }
          setCartItems(tmp);
          setHidePopup(true);
          alert(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Bạn chưa đăng nhập");
    }
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const handleSelectquantity = (event) => {
    setquantity(event.target.value);
  };

  return (
    <>
      {product ? (
        <>
          <div className={cx("product-thumbnail")}>
            <Link className={cx("product-overlay")}></Link>
            <Link className={cx("image-thumbnail", "no-underline")}>
              <img
                className={cx("lazyload", "loaded")}
                src={product.images[0].imgUrl}
                alt={product.name}
              />
            </Link>
            {discount && <span className={cx("sale")}>{discount}</span>}
            {ranking ? (
              <div className={cx("product-index-num")}>
                <span className={cx("cri_index")}></span>
                <span className={cx("number_index")}>#{ranking}</span>
              </div>
            ) : null}
            <div className={cx("product-action")}>
              <Link className={cx("product-overlay-action")}></Link>
              <div className={cx("group-action")}>
                <Link to={`/product/detail/${product.slug}`}>
                  <CiSettings className={cx("icon")} title="" />
                </Link>
                <IoEyeOutline
                  className={cx("icon")}
                  title="Xem trước"
                  onClick={() =>
                    setShowPopupQuickView((prevState) => !prevState)
                  }
                />
                <HiOutlineShoppingBag
                  className={cx("icon")}
                  title="Thêm vào giỏ"
                  onClick={handleClickCart}
                />
              </div>
            </div>
          </div>
          {!hidePopup && <div className={cx("cart-popup-backdrop")}></div>}
          {!hidePopup && (
            <div className={cx("cart-popup-container")}>
              <div className={cx("cart-popup-header")}>
                <span>
                  <HiOutlineShoppingBag className={cx("cart-popup-icon")} />
                  Nhập thông tin
                  <IoClose
                    className={cx("cart-popup-close-icon")}
                    onClick={() => setHidePopup(true)}
                  />
                </span>
              </div>
              <div className={cx("cart-popup-content")}>
                <div className={cx("cart-size")}>
                  <span>Chọn size:</span>
                  <div className={cx("group-size")}>
                    {product.sizes.map((size, index) => (
                      <div key={index}
                        className={cx(
                          "size",
                          selectedSize === size && "active-selected"
                        )}
                        onClick={() => handleSelectSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={cx("cart-color")}>
                  <span>Chọn màu:</span>
                  <div className={cx("group-color")}>
                    {product.colors.map((color, index) => (
                      <div key={index}
                        className={cx(
                          "color",
                          selectedColor === color.colorName && "active-selected"
                        )}
                        onClick={() => handleSelectColor(color.colorName)}
                      >
                        {color.colorName}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={cx("cart-quantity")}>
                  <span>Nhập số lượng:</span>
                  <input
                    type="number"
                    value={quantity}
                    className={cx("quantity")}
                    min={1}
                    max={99}
                    onChange={handleSelectquantity}
                  />
                </div>
              </div>
              <div className={cx("cart-popup-button-group")}>
                <button type="button" className={cx("btn-continue")}>
                  Thanh toán ngay
                </button>
                <button
                  type="button"
                  className={cx("btn-checkout")}
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          )}
          {showPopupQuickView && (
            <div className={cx("popup-quickview-container")}>
              <LuX
                className={cx("close-popup")}
                onClick={() => setShowPopupQuickView((prevState) => !prevState)}
              />
              <QuickViewInfo product={product}/>
            </div>
          )}
          <div className={cx("product-info")}>
            <Link className={cx("no-underline")}>
              <h3 className={cx("product-name")}>{product.name}</h3>
            </Link>
            <div className={cx("price-box")}>
              {newPrice ? (
                <>
                  <span className={cx("price")}>{newPrice.toLocaleString('de-DE')}.000₫</span>
                  <span className={cx("compare-price")}>{product.price.toLocaleString('de-DE')}.000₫</span>
                </>
              ) : (
                <span className={cx("price")}>{product.price.toLocaleString('de-DE')}.000₫</span>
              )}
              {productCount && (
                <div className={cx("productcount")}>
                  <div className={cx("countitem", "visible")}>
                    <span className={cx("a-center")}>
                      Đã bán {product.sold}
                    </span>
                    <div className={cx("countdown")}>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {productCountSale && (
              <div className={cx("productcount-sale")}>
                <div className={cx("countitem", "visible")}>
                  <span className={cx("a-center")}>
                    Đã bán {productCountSale}
                  </span>
                  <div className={cx("countdown")}>
                    <span></span>
                  </div>
                  <div className={cx("sale-bar")}></div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
