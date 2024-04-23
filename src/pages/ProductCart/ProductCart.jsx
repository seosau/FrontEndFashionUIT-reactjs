import {Link} from "react-router-dom";
import style from "./ProductCart.module.scss";
import className from "classnames/bind";
import { SlArrowRight, SlLike } from "react-icons/sl";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import Product from "../../components/Product/Product";
const cx = className.bind(style);

export default function ProductCart() {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (Product) => {
        setCartItems([...cartItems, Product]);
    };
    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return <div className={cx("body-wrap")} >
        <div className={cx("bread_crumb")}> 
            <div className={cx("container")}>
                <ul className={cx("breadcrumb")}>
                    <li className={cx("home")}>
                        <a href= "/" title = "Trang chủ">Trang chủ</a>
                    </li>
                    <div className={cx("arrow-right")}>
                    <SlArrowRight />
                    </div>
                    <li className={cx("cart")}>
                        <b>Giỏ Hàng</b>
                    </li>
                </ul>
            </div>
        </div>
        <div className={cx("main-cart-page")}>
            <div className={cx("header-cart")}>
                <h1 className={cx("title-cart")}>GIỎ HÀNG CỦA BẠN</h1> 
            </div>
           
            <div className={cx("body-cart")}>
                <div className={cx("cart-moblie-page")}>
                    {cartItems.length !== 0 ? (
                       <div className={cx("cart-empty")}>
                       <div className={cx("cart-empty-icon")}><HiOutlineShoppingCart/>
                        </div>
                        <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                    </div> 
                    ): (
                        <div className={cx("cartMobilePage")}>
                            <div className={cx("box-free-ship")}>
                        <div className={cx("progress-free-shipping")} data-value={150000}>
                        <div className={cx("progress-bar")} role={"progress-bar"} aria-valuemin={0} aria-valuemax={100}>
                             <div className={cx("content-free-shipping")}>
                                 Mua tối thiểu 906.000đ để được
                                 <b> MIỄN PHÍ VẬN CHUYỂN</b>
                             </div>
                         </div>
                        </div>
                     </div>
                        <form action = "/cart" method="post" noValidate className={cx("cart-mobile-body")}>
                            <div className={cx("cart-header-info")}>
                                <div className={cx("cart-header-info-ttsp")}>THÔNG TIN SẢN PHẨM</div>
                                <div className={cx("cart-header-info-price")}>ĐƠN GIÁ</div>
                                <div className={cx("cart-header-info-qty")}>SỐ LƯỢNG</div>
                                <div className={cx("cart-header-info-total")}>THÀNH TIỀN</div>
                            </div>
                            <div className={cx("cart-inner-body")}>
                            <div className={cx("cart-row")}>
                                <div className={cx("cart-row-product-cart")} data-line = "1">
                                    <Link to="/" className={cx("cart-product-image")} title=""/>
                                        <img src="" alt=""></img>
                                    <div className={cx("grid-item-info-detail")}>
                                        <div className={cx("item-info-name")}>
                                            <Link to="" className={cx("item-info-name-link")} >
                                                Tên sản phẩm
                                            </Link>
                                            <span className={cx("item-info-size")}>M</span>
                                            <Link className={cx("btn-remove-item-cart")}
                                                to="" data-line="1">Xóa</Link>
                                        </div>     
                                        <div className={cx("grid-price")}>
                                            <div className={cx("grid-item-cart-price")}>
                                                <span className={cx("cart-price")}>349.000đ</span>
                                            </div>
                                        </div>
                                        <div className={cx("grid-qty")}>
                                            <div className={cx("grid-cart-select-item")}>
                                                <div className={cx("grid-cart-select-group-btn")}>
                                                    <button className={cx("btn-adjust-qty-minus")}
                                                    > - </button>
                                                    <input type="text" className={cx("number-sidebar")}
                                                    maxLength={3} value={1} 
                                                    ></input>
                                                    <button className={cx("btn-adjust-qty-plus")}> + </button>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className={cx("grid-total")}>
                                            <div className={cx("grid-cart-price")}>
                                                <span className={cx("cart-price-total")}>349.000đ</span>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div className={cx("cart-button")}>
                                <div className={cx("cart-subtotal")}>
                                    <div className={cx("cart-subtotal-text")}>Tổng tiền:</div>
                                    <div className={cx("cart-subtotal-price")}>
                                        <div className={cx("total-price")}>abcd</div>
                                    </div>
                                </div>
                                <div className={cx("cart-btn-continue")}>
                                    <Link className={cx("btn-checkout")} to="/products">TIẾP TỤC MUA HÀNG</Link>
                                </div>
                                <div className={cx("cart-btn-checkout")}>
                                    <button onClick="location.href='/checkout'" type = "button"
                                    className={cx("cart-btn-proceed-checkout")} id="btn-proceed-checkout" title="Thanh toán">
                                        THANH TOÁN
                                    </button>
                                </div>
                           </div>
                        </form>
                    </div>
                    )} 
                </div>
                <div className={cx("discount-main-page")}>
                    <div className={cx("pro-discount")}>
                        <div className={cx("pro-discount-header")}>
                            <img className={cx("pro-discount-icon")}src="https://bizweb.dktcdn.net/100/451/884/themes/857425/assets/code_dis.gif?1706504358658%22" alt="MÃ GIẢM GIÁ" />
                         MÃ GIẢM GIÁ 
                        </div>
                        <div className={cx("item-discount")}>
                            <div className={cx("top-discount")}>
                                <div className={cx("item-name")}>
                                    <p className={cx("code-dis")}> 10% OFF</p>
                                    <span className={cx("top-code")}> Top Code</span>
                                </div>
                            <img className={cx("discount-icon")} width="36" height="20" src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon1_value_img.png?1706504358658"
                            alt = "10% OFF"/>
                        </div>
                        <div className={cx("coupon-desc")}> Giảm 
                        <b> 10% </b>
                        cho đơn hàng từ
                        <b> 500K.</b>
                        </div>
                        <div className={cx("copy-discount")}>
                            <p className={cx("code-zip")}>BFAS10</p>
                            <button className={cx("btn-discount-copy")} data-copy="BFAS10">
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>
                    <div className={cx("item-discount")}>
                        <div className={cx("top-discount")}>
                            <div className={cx("item-name")}>
                                <p className={cx("code-dis")}> 15% OFF</p>
                            </div>
                            <img className={cx("discount-icon")} width="36" height="20" src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon2_value_img.png?1706504358658"
                            alt = "15% OFF"/>
                        </div>
                        <div className={cx("coupon-desc")}> Giảm 
                            <b> 15% </b>
                            cho đơn hàng từ
                            <b> 900K.</b>
                        </div>
                        <div className={cx("copy-discount")}>
                            <p className={cx("code-zip")}>BFAS15</p>
                            <button className={cx("btn-discount-copy")} data-copy="BFAS15">
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>
                    <div className={cx("item-discount")}>
                        <div className={cx("top-discount")}>
                            <div className={cx("item-name")}>
                                <p className={cx("code-dis")}> FREE SHIP</p>
                            </div>
                            <img className={cx("discount-icon")} width="36" height="20" src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon3_value_img.png?1706504358658"
                            alt = "FREE SHIP"/>
                        </div>
                        <div className={cx("coupon-desc")}> 
                            <b> Free ship </b>
                            cho đơn hàng 
                            <b> nội thành</b>
                        </div>
                        <div className={cx("copy-discount")}>
                            <p className={cx("code-zip")}>BFASFREE</p>
                            <button className={cx("btn-discount-copy")} data-copy="BFASFREE">
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
</div>
}
