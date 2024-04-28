import className from "classnames/bind";
import style from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { LiaPhoneSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { SlLogin, SlLogout, SlUser } from "react-icons/sl";
import { PiUserPlus, PiUser } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaGift } from "react-icons/fa6";
import { IoChevronDownSharp } from "react-icons/io5";

import Search from "../../components/Search/Search";
import { useContext, useState, useEffect } from "react";
import { logDOM } from "@testing-library/react";
import axiosClient from "../../config/axios";
import { AuthContext } from "../../context/AuthContext";
import { useStateContext } from "../../context/CartContextProvider";
const cx = className.bind(style);
function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchsuggestions] = useState([]);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    setSearchVisible(query !== "");
  };
  const { isAuth, setIsAuth, setDecodedToken } = useContext(AuthContext);
  const { setCartItems, quantityInCart, setQuantityInCart } = useStateContext();
  const getQuantityInCart = async () => {
    try {
      const response = await axiosClient.get("/cart/get");
      setQuantityInCart(response.data.quantity);
      setCartItems(response.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAuth) getQuantityInCart();
  }, [isAuth]);

  const navigate = useNavigate();
  const handleLogout = () => {
    axiosClient
      .get(`/auth/logout`)
      .then(({ data }) => {
        localStorage.removeItem("decodedToken");
        setIsAuth(false);
        setCartItems([]);
        setQuantityInCart(0);
        setDecodedToken(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Login Error", error.response.data.message);
      });
  };
  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <div className={cx("header__logo")}>
          <img className={cx("header__img")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/logo.png?1706504358658" alt="logo" />
        </div>
        <div className={cx("header__navbar")}>
          <div className={cx("header__top")}>
            <div className={cx("header__hotline")}>
              <LiaPhoneSolid className={cx("header__icon")} />
              <div className={cx("header__phone")}>
                <span>Hotline: </span>
                <Link to="tel:1900 675">1900 6750</Link>
              </div>
            </div>
            <div className={cx("header__location", "space-right")}>
              <CiLocationOn className={cx("header__icon")} />
              <span className={cx("header__listlocation")}>
                <Link to="/chainstore">Hệ thống cửa hàng</Link>
              </span>
            </div>

            <Search />
          </div>
          <ul className={cx("header__bot")}>
            <li className={cx("header__bot-item")}>
              <Link to="/" className={cx("nav-link")}>
                Trang chủ
              </Link>
            </li>
            <li className={cx("header__bot-item", "has-mega")}>
              <Link to="/nu" className={cx("nav-link")}>
                Nữ
                <IoChevronDownSharp className={cx("icon-down")} />
              </Link>
              <div className={cx("mega-content")}>
                <div className={cx("row")}>
                  <div className={cx("flex-25", "mega-banner")}>
                    <Link to="" className={cx("banner-effect")} title="Nữ">
                      <img className={cx("lazyload", "img-responsive", "loaded")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/mega-1-image-1.jpg?1706504358658" alt="Nữ" />
                    </Link>
                  </div>
                  <div className={cx("flex-75", "mega-menu-list")}>
                    <ul className={cx("level0", "half-banner")}>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/ao" title="Áo">
                          Áo
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-len" title="Áo Len">
                              Áo Len
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-thun" title="Áo Thun">
                              Áo Thun
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-so-mi" title="Áo Sơ Mi">
                              Áo Sơ Mi
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-cardigan" title="Áo Cardigan">
                              Áo Cardigan
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/quan" title="Quần">
                          Quần
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/quan-tay-nu" title="Quần Tây Nữ">
                              Quần Tây Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-jean-nu" title="Quần Jean Nữ">
                              Quần Jean Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-short-nu" title="Quần Short Nữ">
                              Quần Short Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-leggings-nu" title="Quần Leggings Nữ">
                              Quần Leggings Nữ
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/vay" title="Váy">
                          Váy
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/chan-vay-nu" title="Chân Váy Nữ">
                              Chân Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-vay-nu" title="Quần Váy Nữ">
                              Quần Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-ngan-nu" title="Váy Ngắn Nữ">
                              Váy Ngắn Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-lien-than" title="Váy Liền Thân">
                              Váy Liền Thân
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/do-mac-trong" title="Đồ Mặc Trong">
                          Đồ Mặc Trong
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-bra-tops" title="Áo Bra Tops">
                              Áo Bra Tops
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-tat-luoi" title="Quần Tất Lưới">
                              Quần Tất Lưới
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-con-size-lon" title="Quần Con Size Lớn">
                              Quần Con Size Lớn
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-nguc-khong-gong" title="Áo Ngực Không Gọng">
                              Áo Ngực Không Gọng
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/do-mac-nha" title="Đồ Mặc Nhà">
                          Đồ Mặc Nhà
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/do-pyjama-nu" title="Đồ Pyjama Nữ">
                              Đồ Pyjama Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/do-relaco" title="Đồ Relaco">
                              Đồ Relaco
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/bo-giuong-ngu" title="Bộ Giường Ngủ">
                              Bộ Giường Ngủ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/dep-di-trong-nha" title="Dép Đi Trong Nhà">
                              Dép Đi Trong Nhà
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/phu-kien" title="Phụ Kiện">
                          Phụ Kiện
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/tui-xach-nu" title="Túi Xách Nữ">
                              Túi Xách Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/dong-ho-nu" title="Đồng Hồ Nữ">
                              Đồng Hồ Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/bong-tai-nu" title="Bông Tai Nữ">
                              Bông Tai Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/tat-ca-phu-kien" title="Tất Cả Phụ Kiện">
                              Tất Cả Phụ Kiện
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/dam-va-jumpsut" title="Đầm Và Jumpsut">
                          Đầm Và Jumpsut
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/dam-da-hoi" title="Đầm Dạ Hội">
                              Đầm Dạ Hội
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/dam-xoe-tre-vai" title="Đầm Xòe Trễ Vai">
                              Đầm Xòe Trễ Vai
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/dam-va-jumpsuit" title="Đầm Và Jumpsuit">
                              Đầm Và Jumpsuit
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/do-bo-nu" title="Đồ Bộ Nữ">
                          Đồ Bộ Nữ
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/do-bo-mac-nha" title="Đồ Bộ Mặc Nhà">
                              Đồ Bộ Mặc Nhà
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/do-bo-di-choi" title="Đồ Bộ Đi Chơi">
                              Đồ Bộ Đi Chơi
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("header__bot-item", "has-mega")}>
              <Link href="#" className={cx("nav-link")}>
                Nam
                <IoChevronDownSharp className={cx("icon-down")} />
              </Link>
              <div className={cx("mega-content")}>
                <div className={cx("row")}>
                  <div className={cx("flex-25", "mega-banner")}>
                    <Link to="" className={cx("banner-effect")} title="Nam">
                      <img className={cx("lazyload", "img-responsive", "loaded")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/mega-2-image-1.jpg?1706504358658" alt="Nam" />
                    </Link>
                  </div>
                  <div className={cx("flex-50", "mega-menu-list")}>
                    <ul className={cx("level0")}>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/ao" title="Áo">
                          Áo
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-len" title="Áo Len">
                              Áo Len
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-thun" title="Áo Thun">
                              Áo Thun
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-so-mi" title="Áo Sơ Mi">
                              Áo Sơ Mi
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-cardigan" title="Áo Cardigan">
                              Áo Cardigan
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/quan" title="Quần">
                          Quần
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/quan-tay-nu" title="Quần Tây Nữ">
                              Quần Tây Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-jean-nu" title="Quần Jean Nữ">
                              Quần Jean Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-short-nu" title="Quần Short Nữ">
                              Quần Short Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-leggings-nu" title="Quần Leggings Nữ">
                              Quần Leggings Nữ
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/vay" title="Váy">
                          Váy
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/chan-vay-nu" title="Chân Váy Nữ">
                              Chân Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-vay-nu" title="Quần Váy Nữ">
                              Quần Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-ngan-nu" title="Váy Ngắn Nữ">
                              Váy Ngắn Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-lien-than" title="Váy Liền Thân">
                              Váy Liền Thân
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/do-mac-trong" title="Đồ Mặc Trong">
                          Đồ Mặc Trong
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-bra-tops" title="Áo Bra Tops">
                              Áo Bra Tops
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-tat-luoi" title="Quần Tất Lưới">
                              Quần Tất Lưới
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-con-size-lon" title="Quần Con Size Lớn">
                              Quần Con Size Lớn
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-nguc-khong-gong" title="Áo Ngực Không Gọng">
                              Áo Ngực Không Gọng
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/do-mac-nha" title="Đồ Mặc Nhà">
                          Đồ Mặc Nhà
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/do-pyjama-nu" title="Đồ Pyjama Nữ">
                              Đồ Pyjama Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/do-relaco" title="Đồ Relaco">
                              Đồ Relaco
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/bo-giuong-ngu" title="Bộ Giường Ngủ">
                              Bộ Giường Ngủ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/dep-di-trong-nha" title="Dép Đi Trong Nhà">
                              Dép Đi Trong Nhà
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/phu-kien" title="Phụ Kiện">
                          Phụ Kiện
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/tui-xach-nu" title="Túi Xách Nữ">
                              Túi Xách Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/dong-ho-nu" title="Đồng Hồ Nữ">
                              Đồng Hồ Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/bong-tai-nu" title="Bông Tai Nữ">
                              Bông Tai Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/tat-ca-phu-kien" title="Tất Cả Phụ Kiện">
                              Tất Cả Phụ Kiện
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("flex-25", "mega-banner")}>
                    <Link to="" className={cx("banner-effect")} title="Nam">
                      <img className={cx("lazyload", "img-responsive", "loaded")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/mega-2-image-1.jpg?1706504358658" alt="Nam" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("header__bot-item", "has-mega")}>
              <Link href="#" className={cx("nav-link")}>
                Trẻ em
                <IoChevronDownSharp className={cx("icon-down")} />
              </Link>
              <div className={cx("mega-content")}>
                <div className={cx("row")}>
                  <div className={cx("flex-25", "mega-banner")}>
                    <Link to="" className={cx("banner-effect")} title="Trẻ em">
                      <img className={cx("lazyload", "img-responsive", "loaded")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/mega-3-image-2.jpg?1706504358658" alt="Trẻ em" />
                    </Link>
                  </div>
                  <div className={cx("flex-50", "mega-menu-list")}>
                    <ul className={cx("level0", "half-banner")}>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/ao" title="Áo">
                          Áo
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-len" title="Áo Len">
                              Áo Len
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-thun" title="Áo Thun">
                              Áo Thun
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-so-mi" title="Áo Sơ Mi">
                              Áo Sơ Mi
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-cardigan" title="Áo Cardigan">
                              Áo Cardigan
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/quan" title="Quần">
                          Quần
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/quan-tay-nu" title="Quần Tây Nữ">
                              Quần Tây Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-jean-nu" title="Quần Jean Nữ">
                              Quần Jean Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-short-nu" title="Quần Short Nữ">
                              Quần Short Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-leggings-nu" title="Quần Leggings Nữ">
                              Quần Leggings Nữ
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/vay" title="Váy">
                          Váy
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/chan-vay-nu" title="Chân Váy Nữ">
                              Chân Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-vay-nu" title="Quần Váy Nữ">
                              Quần Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-ngan-nu" title="Váy Ngắn Nữ">
                              Váy Ngắn Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-lien-than" title="Váy Liền Thân">
                              Váy Liền Thân
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/do-mac-trong" title="Đồ Mặc Trong">
                          Đồ Mặc Trong
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-bra-tops" title="Áo Bra Tops">
                              Áo Bra Tops
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-tat-luoi" title="Quần Tất Lưới">
                              Quần Tất Lưới
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-con-size-lon" title="Quần Con Size Lớn">
                              Quần Con Size Lớn
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-nguc-khong-gong" title="Áo Ngực Không Gọng">
                              Áo Ngực Không Gọng
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("flex-25", "mega-banner")}>
                    <Link to="" className={cx("banner-effect")} title="Trẻ em">
                      <img className={cx("lazyload", "img-responsive", "loaded")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/mega-3-image-2.jpg?1706504358658" alt="Trẻ em" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("header__bot-item", "has-mega")}>
              <Link to="/products" className={cx("nav-link")}>
                Sản phẩm
                <IoChevronDownSharp className={cx("icon-down")} />
              </Link>
              <div className={cx("mega-content")}>
                <div className={cx("row")}>
                  <div className={cx("flex-25", "mega-banner")}>
                    <Link to="" className={cx("banner-effect")} title="Nữ">
                      <img className={cx("lazyload", "img-responsive", "loaded")} src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/mega-4-image-1.jpg?1706504358658" alt="Nữ" />
                    </Link>
                  </div>
                  <div className={cx("flex-75", "mega-menu-list")}>
                    <ul className={cx("level0", "half-banner")}>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} to="/ao" title="Áo">
                          Áo
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-len" title="Áo Len">
                              Áo Len
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-thun" title="Áo Thun">
                              Áo Thun
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-so-mi" title="Áo Sơ Mi">
                              Áo Sơ Mi
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-cardigan" title="Áo Cardigan">
                              Áo Cardigan
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/quan" title="Quần">
                          Quần
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/quan-tay-nu" title="Quần Tây Nữ">
                              Quần Tây Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-jean-nu" title="Quần Jean Nữ">
                              Quần Jean Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-short-nu" title="Quần Short Nữ">
                              Quần Short Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-leggings-nu" title="Quần Leggings Nữ">
                              Quần Leggings Nữ
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/vay" title="Váy">
                          Váy
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/chan-vay-nu" title="Chân Váy Nữ">
                              Chân Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-vay-nu" title="Quần Váy Nữ">
                              Quần Váy Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-ngan-nu" title="Váy Ngắn Nữ">
                              Váy Ngắn Nữ
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/vay-lien-than" title="Váy Liền Thân">
                              Váy Liền Thân
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("level1", "parent", "item", "fix-navs")}>
                        <Link className={cx("hmega")} href="/do-mac-trong" title="Đồ Mặc Trong">
                          Đồ Mặc Trong
                        </Link>
                        <ul className={cx("level1")}>
                          <li className={cx("level2")}>
                            <Link to="/ao-bra-tops" title="Áo Bra Tops">
                              Áo Bra Tops
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-tat-luoi" title="Quần Tất Lưới">
                              Quần Tất Lưới
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/quan-con-size-lon" title="Quần Con Size Lớn">
                              Quần Con Size Lớn
                            </Link>
                          </li>
                          <li className={cx("level2")}>
                            <Link to="/ao-nguc-khong-gong" title="Áo Ngực Không Gọng">
                              Áo Ngực Không Gọng
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("header__bot-item")}>
              <Link to="/blogs" className={cx("nav-link")}>
                Tin tức
              </Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link to="/contact-support" className={cx("nav-link")}>
                Liên hệ
              </Link>
            </li>
            <li className={cx("header__bot-item")}>
              <Link href="#" className={cx("nav-link")}>
                <FaGift color="red" />
                <span className={cx("text")}>Khuyến mãi</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("header__action")}>
          <div className={cx("header__action-item", "header__action-item-auth")}>
            <span className={cx("box-icon")}>
              <SlUser className={cx("header__action-icon")} />
            </span>
            <div className={cx("action-title")}>Tài khoản</div>
            <ul className={cx("list-auth-action")}>
              {isAuth == false ? (
                <>
                  <li className={cx("item-auth-action")}>
                    <Link to="/login">
                      <SlLogin />
                      <span>Đăng nhập</span>
                    </Link>
                  </li>
                  <li className={cx("item-auth-action")}>
                    <Link to="/register">
                      <PiUserPlus />
                      <span>Đăng ký</span>
                    </Link>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li className={cx("item-auth-action")}>
                    <Link to="/account">
                      <PiUser />
                      <span>Tài khoản</span>
                    </Link>
                  </li>
                  <li onClick={() => handleLogout()} className={cx("item-auth-action", "logout")}>
                    <Link to="/login">
                      <SlLogout color="#fff" />
                      <span className={cx("logoutTxt")}>Đăng xuất</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/cart" className={cx("header__action-item")}>
            <span className={cx("box-icon")}>
              <HiOutlineShoppingBag className={cx("header__action-icon")} />
            </span>
            <div className={cx("action-title")}>Giỏ hàng</div>
            <span className={cx("cart-count")}>{quantityInCart}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
