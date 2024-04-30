import style from "./CheckOut.module.scss";
import className from "classnames/bind";
import { RiLogoutBoxRLine } from "react-icons/ri";
import React, { useState, useEffect, useContext } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../../config/axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { BsBank2 } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import AddAddressForm from "../../components/AddAddressForm/AddAddressForm";
const cx = className.bind(style);

function CheckOut() {
  const navigate = useNavigate();
  const { decodedToken } = useContext(AuthContext);
  const location = useLocation();
  const totalPrice = location?.state?.totalPrice;
  const checkoutItems = location?.state?.checkoutItems;
  const [payment, setPayment] = useState("");
  console.log(checkoutItems);
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState(null);
  const [pickedAddress, setPickedAddress] = useState(true);
  const [pickedPayment, setPickedPayment] = useState(true);
  const [note, setNote] = useState("");
  const [hiddenForm, setHiddenForm] = useState(true);

  useEffect(() => {
    axiosClient
      .get(`/user/address`)
      .then(({ data }) => {
        setAddresses(data.addresses);
        setAddress(0);
      })
      .catch((error) => {
        console.log("Đã có lỗi xãy ra, vui lòng thử lại!");
      });
  }, [hiddenForm]);
  const validate = () => {
    if (address === null) {
      setPickedAddress(false);
      return false;
    } else if (payment === "") {
      if (pickedAddress == false) {
        setPickedAddress(true);
      }
      setPickedPayment(false);
      return false;
    } else if (pickedAddress == false) {
      setPickedPayment(true);
    }
    return true;
  };
  const handleAddAddress = () => {
    setHiddenForm(false);
  };
  const handleCheckoutCOD = () => {
    var checkoutInfoTmp = {};
    checkoutInfoTmp.address = addresses[address];
    checkoutInfoTmp.note = note;
    checkoutInfoTmp.paymentMethod = payment;
    checkoutInfoTmp.isConfirmed = true;
    checkoutInfoTmp.totalPrice = totalPrice + 40;
    checkoutInfoTmp.products = checkoutItems;
    checkoutInfoTmp.paid = false;
    axiosClient
      .post(`/order/create`, { orderInfo: checkoutInfoTmp })
      .then(({ data }) => {
        window.alert("Đặt hàng thành công");
        navigate("/order/success");
      })
      .catch((error) => {
        console.log("Đã có lỗi xãy ra, vui lòng thử lại!");
      });
  };

  const handleCheckoutBanking = () => {
    var checkoutInfoTmp = {};
    checkoutInfoTmp.address = addresses[address];
    checkoutInfoTmp.note = note;
    checkoutInfoTmp.paymentMethod = payment;
    checkoutInfoTmp.isConfirmed = true;
    checkoutInfoTmp.totalPrice = totalPrice + 40;
    checkoutInfoTmp.products = checkoutItems;
    checkoutInfoTmp.paid = false;

    var amount = (totalPrice + 40) * 1000;
    var language = "vn";
    var bankCode = "";
    axiosClient
      .post(`/order/vnpay/url`, {
        amount,
        language,
        bankCode,
        orderInfo: checkoutInfoTmp,
      })
      .then(({ data }) => {
        window.location.href = data.vnpUrl;
      })
      .catch((error) => {
        console.log("Đã có lỗi xãy ra, vui lòng thử lại!");
      });
  };
  const handleCheckout = () => {
    if (validate()) {
      if (payment === "banking") {
        handleCheckoutBanking();
        setPayment("");
      } else {
        handleCheckoutCOD();
      }
    }
  };
  return (
    <div className={cx("main")}>
      {!hiddenForm ? <div className={cx("isOverlay")}></div> : null}
      {!hiddenForm ? <AddAddressForm hiddenForm={hiddenForm} setHiddenForm={setHiddenForm} /> : null}
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("logoContainer")}>
            <div className={cx("logo")}>
              <img className={cx("logoImg")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/logo.png?1706504358658" alt="logo" />
            </div>
          </div>
          <div className={cx("info")}>
            <div className={cx("order-info")}>
              <div className={cx("order-info-title")}>
                <h3 className={cx("order-info-titleTxt")}>Thông tin nhận hàng</h3>
                {pickedAddress ? null : <div className={cx("warning")}>Vui lòng chọn địa chỉ nhận hàng</div>}
              </div>

              <div className={cx("select-content")}>
                <div className={cx("inputField")}>
                  <div className={cx("small-title")}>Sổ địa chỉ</div>
                  <div className={cx("inputContainer")}>
                    {addresses[0] ? (
                      <div className={cx("")}>
                        <select onChange={(e) => setAddress(e.target.value)} className={cx("input")}>
                          {addresses.map((address, index) => (
                            <option value={index} key={index} className={cx("addressOtp")}>
                              {address.name}, {address.detail}, {address.ward}, {address.district}, {address.province}
                            </option>
                          ))}
                        </select>
                        <div onClick={(e) => handleAddAddress()} className={cx("addAddressBtn")}>
                          <div className={cx("addAddressBtnTxt")}>
                            <CiCirclePlus size={24} />
                            Thêm địa chỉ
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div onClick={(e) => handleAddAddress()} className={cx("addAddressBtn")}>
                        <div className={cx("addAddressBtnTxt")}>
                          <CiCirclePlus size={24} />
                          Thêm địa chỉ
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className={cx("inputField")}>
                  <div className={cx("small-title")}>Email</div>
                  <div className={cx("inputContainer")}>
                    <input className={cx("input")} type="email" defaultValue={decodedToken?.email} disabled></input>
                  </div>
                </div>

                <div className={cx("inputField")}>
                  <div className={cx("small-title")}>Họ và tên</div>
                  <div className={cx("inputContainer")}>
                    <input disabled className={cx("input")} type="text" defaultValue={addresses[address]?.name}></input>
                  </div>
                </div>

                <div className={cx("inputField")}>
                  <div className={cx("small-title")}>Số điện thoại</div>
                  <div className={cx("inputContainer")}>
                    <input disabled defaultValue={addresses[address]?.phoneNumber} className={cx("input")} type="text" placeholder={"Số điện thoại (tuỳ chọn)"}></input>
                  </div>
                </div>

                <div className={cx("inputField")}>
                  <div className={cx("small-title")}>Ghi chú</div>
                  <div className={cx("inputContainer")}>
                    <textarea onChange={(e) => setNote(e.target.value)} className={cx("textArea")} name="note"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("transfer-checkout")}>
              <div className={cx("checkout-title")}>
                <h3 className={cx("checkout-info-titleTxt")}>Phương thức thanh toán</h3>
                {pickedPayment ? null : <div className={cx("warning")}>Vui lòng chọn phương thức thanh toán</div>}
              </div>
              <div onClick={(e) => setPayment("cod")} className={cx("checkout-option", payment === "cod" ? "checkout-option-active" : null)}>
                <div className={cx("codCheck")}>
                  <input checked={payment === "cod" ? true : false} value={"cod"} name="paymentMethod" className={cx("checkout-checkbox")} type="radio"></input>
                  <div className={cx("option-text")}>Thanh toán khi giao hàng (COD)</div>
                </div>
                <div className={cx("option-icon")}>
                  <FaRegMoneyBillAlt color={payment === "cod" ? "#009e61" : null} size={30} />
                </div>
              </div>
              <div onClick={(e) => setPayment("banking")} className={cx("checkout-option", payment === "banking" ? "checkout-option-active" : null)}>
                <div className={cx("codCheck")}>
                  <input className={cx("checkout-checkbox")} checked={payment === "banking" ? true : false} value={"banking"} name="paymentMethod" type="radio"></input>
                  <div className={cx("option-text")}>Thanh toán trực tuyến</div>
                </div>
                <div className={cx("option-icon")}>
                  <BsBank2 color={payment === "banking" ? "#009e61" : null} size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("checkout-side")}>
          <div className={cx("quantity")}>
            <h3 className={cx("checkoutTitle")}>Đơn hàng ({checkoutItems?.length} sản phẩm)</h3>
          </div>
          <div className={cx("checkoutProductsContainer")}>
            {checkoutItems?.map((checkoutItem, index) => (
              <div key={index} className={cx("productField")}>
                <div className={cx("productLine")}></div>
                <div className={cx("productInfo")}>
                  <div className={cx("productImgContainer")}>
                    <img src={checkoutItem.image} className={cx("productImg")}></img>
                  </div>
                  <div className={cx("productContent")}>
                    <div className={cx("productDesc")}>
                      <div className={cx("productName")}>{checkoutItem.name}</div>
                      <div className={cx("flex")}>
                        <div className={cx("sizeAndColor")}>
                          Size: {checkoutItem.size}, Màu: {checkoutItem.color}
                        </div>
                      </div>
                    </div>
                    <div className={cx("priceField")}>
                      <div className={cx("price")}>{checkoutItem.price}.000đ</div>
                      <div className={cx("productQuantity")}>x{checkoutItem.quantity}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cx("fullWidthLine")}></div>
          <div className={cx("voucherContainer")}>
            <input placeholder="Nhập mã giảm giá" className={cx("voucherInput")}></input>
            <div className={cx("voucherBtn")}>Áp dụng</div>
          </div>
          <div className={cx("fullWidthLine")}></div>
          <div className={cx("totalContainer")}>
            <div className={cx("tmpContainer")}>
              <div className={cx("tmpCount")}>
                <div className={cx("tmpCountTitle")}>Tạm tính</div>
                <div className={cx("tmpCountValue")}>{totalPrice > 1000 ? Math.floor(totalPrice / 1000) + "." + (totalPrice % 1000) : totalPrice}.000đ</div>
              </div>
              <div className={cx("shippingCostContainer")}>
                <div className={cx("shippingCostTitle")}>Phí vận chuyển</div>
                <div className={cx("shippingCostValue")}>40.000đ</div>
              </div>
            </div>
            <div className={cx("fullWidthLine")}></div>

            <div className={cx("finalContainer")}>
              <div className={cx("finalPrice")}>
                <div className={cx("finalTitle")}>Tổng cộng</div>
                <div className={cx("finalValue")}>{totalPrice + 40 > 1000 ? Math.floor((totalPrice + 40) / 1000) + "." + ((totalPrice + 40) % 1000) : totalPrice + 40}.000đ</div>
              </div>
              <div className={cx("finalOptContainer")}>
                <Link to={"/cart"} className={cx("backBtn")}>
                  <TiArrowBackOutline color="blue" /> Quay về giỏ hàng
                </Link>
                <div onClick={handleCheckout} className={cx("orderBtn")}>
                  ĐẶT HÀNG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
