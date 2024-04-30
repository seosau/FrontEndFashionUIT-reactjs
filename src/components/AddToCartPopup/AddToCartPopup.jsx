import React, { useState, useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styles from "./AddToCartPopup.module.scss";
import className from "classnames/bind";
import axiosClient from "../../config/axios";
import { useStateContext } from "../../context/CartContextProvider";
import { AuthContext } from "../../context/AuthContext";
const cx = className.bind(styles);

export default function AddToCartPopup({ product, togglePopup }) {

    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [quantity, setquantity] = useState(1);
    const { cartItems, setQuantityInCart, setCartItems } = useStateContext();
    const { isAuth } = useContext(AuthContext);

    const handleSelectColor = (color) => {
        setSelectedColor(color);
    };

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };

    const handleSelectquantity = (event) => {
        setquantity(event.target.value);
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
                    togglePopup();
                    alert(response.data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Bạn chưa đăng nhập");
        }
    };


    return (
        <div className={cx("cart-popup-container")}>
            <div className={cx("cart-popup-header")}>
                <span>
                    <HiOutlineShoppingBag className={cx("cart-popup-icon")} />
                    Nhập thông tin
                    <IoClose
                        className={cx("cart-popup-close-icon")}
                        onClick={togglePopup}
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
    )
}