import React, { useState } from "react";
import style from "./Category.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

const data = [
  {
    index: 1,
    name: "Nữ",
    subcategories: [
      {
        name: "Áo",
        subcategories: [
          { name: "Áo Len", link: "/ao-len" },
          { name: "Áo Thun", link: "/ao-thun" },
          { name: "Áo Sơ Mi", link: "/ao-so-mi" },
          { name: "Áo Cardigan", link: "/ao-cardigan" },
        ],
      },
      {
        name: "Quần",
        subcategories: [
          { name: "Quần Tây Nữ", link: "/quan-tay-nu" },
          { name: "Quần Jean Nữ", link: "/quan-jean-nu" },
          { name: "Quần Short Nữ", link: "/quan-short-nu" },
          { name: "Quần Leggings Nữ", link: "/quan-leggings-nu" },
        ],
      },
      {
        name: "Váy",
        subcategories: [
          { name: "Chân Váy Nữ", link: "/chan-vay-nu" },
          { name: "Quần Váy Nữ", link: "/quan-vay-nu" },
          { name: "Váy Ngắn Nữ", link: "/vay-ngan-nu" },
          { name: "Váy Liền Thân", link: "/vay-lien-than" },
        ],
      },
      {
        name: "Đồ Mặc Trong",
        subcategories: [
          { name: "Áo Bra Tops", link: "/ao-bra-tops" },
          { name: "Quần Tất Lưới", link: "/quan-tat-luoi" },
          { name: "Quần Con Size Lớn", link: "/quan-con-size-lon" },
          { name: "Áo Ngực Không Gọng", link: "/ao-nguc-khong-gong" },
        ],
      },
      {
        name: "Đồ Mặc Nhà",
        subcategories: [
          { name: "Đồ Pyjama Nữ", link: "/do-pyjama-nu" },
          { name: "Đồ Relaco", link: "/do-relaco" },
          { name: "Bộ Giường Ngủ", link: "/bo-giuong-ngu" },
          { name: "Dép Đi Trong Nhà", link: "/dep-di-trong-nha" },
        ],
      },
      {
        name: "Phụ Kiện",
        subcategories: [
          { name: "Túi Xách Nữ", link: "/tui-xach-nu" },
          { name: "Đồng Hồ Nữ", link: "/dong-ho-nu" },
          { name: "Bông Tai Nữ", link: "/bong-tai-nu" },
          { name: "Tất Cả Phụ Kiện", link: "/tat-ca-phu-kien" },
        ],
      },
      {
        name: "Đầm Và Jumpsuit",
        subcategories: [
          { name: "Đầm Dạ Hội", link: "/dam-da-hoi" },
          { name: "Đầm Xòe Trễ Vai", link: "/dam-xoe-tre-vai" },
          { name: "Đầm Và Jumpsuit", link: "/dam-va-jumpsuit" },
        ],
      },
      {
        name: "Đồ Bộ Nữ",
        subcategories: [
          { name: "Đồ Bộ Mặc Nhà", link: "/do-bo-mac-nha" },
          { name: "Đồ Bộ Đi Chơi", link: "/do-bo-di-choi" },
        ],
      },
    ],
  },
  {
    index: 2,
    name: "Nam",
    subcategories: [
      {
        name: "Áo",
        subcategories: [
          { name: "Áo Thun", link: "/ao-thun" },
          { name: "Áo Polo", link: "/ao-polo" },
          { name: "Áo Sơ Mi", link: "/ao-so-mi" },
          { name: "Áo Ba Lỗ", link: "/ao-ba-lo" },
        ],
      },
      {
        name: "Quần",
        subcategories: [
          { name: "Quần Tây Nam", link: "/quan-tay-nam" },
          { name: "Quần Kaki Nam", link: "/quan-kaki-nam" },
          { name: "Quần Short Nam", link: "/quan-short-nam" },
          { name: "Quần Thể Thao Nam", link: "/quan-the-thao-nam" },
        ],
      },
      {
        name: "Đồ Mặc Ngoài",
        subcategories: [
          { name: "Áo Khoác (Coat)", link: "/ao-khoac-coat" },
          { name: "Áo Khoác (Jacket)", link: "/ao-khoac-jacket" },
          { name: "Áo Blouson & Hoodie", link: "/ao-blouson-hoodie" },
          { name: "Áo Khoác Siêu Nhẹ", link: "/ao-khoac-sieu-nhe" },
        ],
      },
      {
        name: "Đồ Mặc Trong",
        subcategories: [
          { name: "Đồ Lót", link: "/do-lot" },
          { name: "AIRism", link: "/airism" },
          { name: "Áo Mặc Trong", link: "/ao-mac-trong" },
          {
            name: "Quần Leggings Và Quần Tất",
            link: "/quan-leggings-va-quan-tat",
          },
        ],
      },
      {
        name: "Đồ Mặc Nhà",
        subcategories: [
          { name: "Đồ Ngủ", link: "/do-ngu" },
          { name: "Đồ Pyjama", link: "/do-pyjama" },
          { name: "Quần Chino", link: "/quan-chino" },
          { name: "Quần Dài Đến Mắt Cá", link: "/quan-dai-den-mat-ca" },
        ],
      },
      {
        name: "Phụ Kiện Nam",
        subcategories: [
          { name: "Ví - Bóp", link: "/vi-bop" },
          { name: "Mắt Kính", link: "/mat-kinh" },
          { name: "Vòng Tay", link: "/vong-tay" },
          { name: "Khẩu Trang AIRism", link: "/khau-trang-airism" },
        ],
      },
    ],
  },
  {
    index: 3,
    name: "Trẻ Em",
    subcategories: [
      {
        name: "Áo Trẻ Em",
        subcategories: [
          { name: "Áo Thun Trẻ Em", link: "/ao-thun-tre-em" },
          { name: "Áo Sơ Mi", link: "/ao-so-mi-tre-em" },
          { name: "Áo Kiểu Họa Tiết", link: "/ao-kieu-hoa-tiet" },
          { name: "Áo Thun Hoạt Hình", link: "/ao-thun-hoat-hinh" },
        ],
      },
      {
        name: "Quần Trẻ Em",
        subcategories: [
          { name: "Quần Dài", link: "/quan-dai-tre-em" },
          { name: "Quần Short", link: "/quan-short-tre-em" },
          { name: "Đầm Xòe", link: "/dam-xoe-tre-em" },
          { name: "Chân Váy", link: "/chan-vay-tre-em" },
        ],
      },
      {
        name: "Đồ Lót Trẻ Em",
        subcategories: [
          { name: "Quần Short", link: "/quan-short-tre-em" },
          { name: "Áo Lót Trẻ Em", link: "/ao-lot-tre-em" },
          { name: "Quần Lót Trẻ Em", link: "/quan-lot-tre-em" },
          { name: "Áo Mặc Trong Cài Trước", link: "/ao-mac-trong-cai-truoc" },
        ],
      },
      {
        name: "Phụ Kiện Trẻ Em",
        subcategories: [
          { name: "Kính Mắt", link: "/kinh-mat-tre-em" },
          { name: "Khẩu Trang", link: "/khau-trang-tre-em" },
          { name: "Túi Đeo", link: "/tui-deo-tre-em" },
          { name: "Nón Bảo Hiểm", link: "/non-bao-hiem-tre-em" },
        ],
      },
    ],
  },
  {
    index: 4,
    name: "Thời Trang Nam",
    subcategories: [
      { name: "Áo Thun", link: "/ao-thun-nam" },
      { name: "Áo Sơ Mi", link: "/ao-so-mi-nam" },
      { name: "Quần jeans", link: "/quan-jeans-nam" },
      { name: "Đồ thể thao", link: "/do-the-thao-nam" },
    ],
  },
  {
    index: 5,
    name: "Thời Trang Nữ",
    subcategories: [
      { name: "Đầm", link: "/dam" },
      { name: "Váy", link: "/vay" },
      { name: "Đồ Bộ", link: "/do-bo" },
      { name: "Đồ Ngủ", link: "/do-ngu" },
    ],
  },
  {
    index: 6,
    name: "Thời Trang Trẻ Em",
    subcategories: [
      { name: "Đồ Sơ Sinh", link: "/do-so-sinh" },
      { name: "Đồ Bé Trai", link: "/do-be-trai" },
      { name: "Đồ Bé Gái", link: "/do-be-gai" },
    ],
  },
  {
    index: 7,
    name: "Thời Trang Tập Gym",
    subcategories: [
      { name: "Áo Tập Gym", link: "/ao-tap-gym" },
      { name: "Quần Tập Gym", link: "/quan-tap-gym" },
      { name: "Đồ Bộ Tập Gym", link: "/do-bo-tap-gym" },
    ],
  },
];

export default function Category() {
  const [isVisible, setIsVisible] = useState(0);
  const toggleMenu = (index) => {
    setIsVisible(index);
  };
  return (
    <div className={cx("aside-content-blog")}>
      <div className={cx("title-head")}>Danh mục</div>
      <nav className={cx("nav-category")}>
        <ul className={cx("nav", "navbar-pills")}>
          {data.map((e) => (
            <li
              className={cx(
                "nav-item",
                "relative",
                isVisible === e.index ? "showing-detail" : "not-show-detail"
              )}
            >
              <div className={cx("category-title")}>
                <Link title={e.name} to="" className={cx("nav-link", "pr-5")}>
                  {e.name}
                </Link>
                {/* <i className={cx("open_mnu", "down_icon")} onClick={toggleMenu} /> */}
                {isVisible === e.index ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => toggleMenu(0)}
                    className={cx("fa-icon", "fa-minus")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => toggleMenu(e.index)}
                    className={cx("fa-icon", "fa-plus")}
                  />
                )}
              </div>
              <ul
                className={cx(
                  "menu_down",
                  `${isVisible === e.index ? `visible` : `hidden`}`
                )}
              >
                {e.subcategories.map((e1) => (
                  <li
                    className={cx("dropdown-submenu", "nav-item", "relative")}
                  >
                    <Link title={e1.name} className={cx("nav-linkpr-5")} to="">
                      {e1.name}
                    </Link>
                    {/* <i className={cx("open_mnu", "down_icon")} />
                                        <ul className={cx("menu_down")}>
                                            {e1.subcategories.map((e2) => (
                                                <li className={cx("nav-item")}>
                                                    <Link
                                                        title={e2.name}
                                                        className={cx("nav-link", "pl-4")}
                                                        to={e2.link}
                                                    >
                                                        {e2.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul> */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// import React, { useState } from "react";
// import style from "./Category.module.scss";
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);

// const categories = [
//     {
//         name: "Nữ",
//         subcategories: [
//             {
//                 name: "Áo",
//                 subcategories: [
//                     { name: "Áo Len", link: "/ao-len" },
//                     { name: "Áo Thun", link: "/ao-thun" },
//                     { name: "Áo Sơ Mi", link: "/ao-so-mi" },
//                     { name: "Áo Cardigan", link: "/ao-cardigan" }
//                 ]
//             },
//             {
//                 name: "Quần",
//                 subcategories: [
//                     { name: "Quần Tây Nữ", link: "/quan-tay-nu" },
//                     { name: "Quần Jean Nữ", link: "/quan-jean-nu" },
//                     { name: "Quần Short Nữ", link: "/quan-short-nu" },
//                     { name: "Quần Leggings Nữ", link: "/quan-leggings-nu" }
//                 ]
//             },
//             {
//                 name: "Váy",
//                 subcategories: [
//                     { name: "Chân Váy Nữ", link: "/chan-vay-nu" },
//                     { name: "Quần Váy Nữ", link: "/quan-vay-nu" },
//                     { name: "Váy Ngắn Nữ", link: "/vay-ngan-nu" },
//                     { name: "Váy Liền Thân", link: "/vay-lien-than" }
//                 ]
//             },
//             {
//                 name: "Đồ Mặc Trong",
//                 subcategories: [
//                     { name: "Áo Bra Tops", link: "/ao-bra-tops" },
//                     { name: "Quần Tất Lưới", link: "/quan-tat-luoi" },
//                     { name: "Quần Con Size Lớn", link: "/quan-con-size-lon" },
//                     { name: "Áo Ngực Không Gọng", link: "/ao-nguc-khong-gong" }
//                 ]
//             },
//             {
//                 name: "Đồ Mặc Nhà",
//                 subcategories: [
//                     { name: "Đồ Pyjama Nữ", link: "/do-pyjama-nu" },
//                     { name: "Đồ Relaco", link: "/do-relaco" },
//                     { name: "Bộ Giường Ngủ", link: "/bo-giuong-ngu" },
//                     { name: "Dép Đi Trong Nhà", link: "/dep-di-trong-nha" }
//                 ]
//             },
//             {
//                 name: "Phụ Kiện",
//                 subcategories: [
//                     { name: "Túi Xách Nữ", link: "/tui-xach-nu" },
//                     { name: "Đồng Hồ Nữ", link: "/dong-ho-nu" },
//                     { name: "Bông Tai Nữ", link: "/bong-tai-nu" },
//                     { name: "Tất Cả Phụ Kiện", link: "/tat-ca-phu-kien" }
//                 ]
//             },
//             {
//                 name: "Đầm Và Jumpsuit",
//                 subcategories: [
//                     { name: "Đầm Dạ Hội", link: "/dam-da-hoi" },
//                     { name: "Đầm Xòe Trễ Vai", link: "/dam-xoe-tre-vai" },
//                     { name: "Đầm Và Jumpsuit", link: "/dam-va-jumpsuit" }
//                 ]
//             },
//             {
//                 name: "Đồ Bộ Nữ",
//                 subcategories: [
//                     { name: "Đồ Bộ Mặc Nhà", link: "/do-bo-mac-nha" },
//                     { name: "Đồ Bộ Đi Chơi", link: "/do-bo-di-choi" }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Nam",
//         subcategories: [
//             {
//                 name: "Áo",
//                 subcategories: [
//                     { name: "Áo Thun", link: "/ao-thun" },
//                     { name: "Áo Polo", link: "/ao-polo" },
//                     { name: "Áo Sơ Mi", link: "/ao-so-mi" },
//                     { name: "Áo Ba Lỗ", link: "/ao-ba-lo" }
//                 ]
//             },
//             {
//                 name: "Quần",
//                 subcategories: [
//                     { name: "Quần Tây Nam", link: "/quan-tay-nam" },
//                     { name: "Quần Kaki Nam", link: "/quan-kaki-nam" },
//                     { name: "Quần Short Nam", link: "/quan-short-nam" },
//                     { name: "Quần Thể Thao Nam", link: "/quan-the-thao-nam" }
//                 ]
//             },
//             {
//                 name: "Đồ Mặc Ngoài",
//                 subcategories: [
//                     { name: "Áo Khoác (Coat)", link: "/ao-khoac-coat" },
//                     { name: "Áo Khoác (Jacket)", link: "/ao-khoac-jacket" },
//                     { name: "Áo Blouson & Hoodie", link: "/ao-blouson-hoodie" },
//                     { name: "Áo Khoác Siêu Nhẹ", link: "/ao-khoac-sieu-nhe" }
//                 ]
//             },
//             {
//                 name: "Đồ Mặc Trong",
//                 subcategories: [
//                     { name: "Đồ Lót", link: "/do-lot" },
//                     { name: "AIRism", link: "/airism" },
//                     { name: "Áo Mặc Trong", link: "/ao-mac-trong" },
//                     { name: "Quần Leggings Và Quần Tất", link: "/quan-leggings-va-quan-tat" }
//                 ]
//             },
//             {
//                 name: "Đồ Mặc Nhà",
//                 subcategories: [
//                     { name: "Đồ Ngủ", link: "/do-ngu" },
//                     { name: "Đồ Pyjama", link: "/do-pyjama" },
//                     { name: "Quần Chino", link: "/quan-chino" },
//                     { name: "Quần Dài Đến Mắt Cá", link: "/quan-dai-den-mat-ca" }
//                 ]
//             },
//             {
//                 name: "Phụ Kiện Nam",
//                 subcategories: [
//                     { name: "Ví - Bóp", link: "/vi-bop" },
//                     { name: "Mắt Kính", link: "/mat-kinh" },
//                     { name: "Vòng Tay", link: "/vong-tay" },
//                     { name: "Khẩu Trang AIRism", link: "/khau-trang-airism" }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Trẻ Em",
//         subcategories: [
//             {
//                 name: "Áo Trẻ Em",
//                 subcategories: [
//                     { name: "Áo Thun Trẻ Em", link: "/ao-thun-tre-em" },
//                     { name: "Áo Sơ Mi", link: "/ao-so-mi-tre-em" },
//                     { name: "Áo Kiểu Họa Tiết", link: "/ao-kieu-hoa-tiet" },
//                     { name: "Áo Thun Hoạt Hình", link: "/ao-thun-hoat-hinh" }
//                 ]
//             },
//             {
//                 name: "Quần Trẻ Em",
//                 subcategories: [
//                     { name: "Quần Dài", link: "/quan-dai-tre-em" },
//                     { name: "Quần Short", link: "/quan-short-tre-em" },
//                     { name: "Đầm Xòe", link: "/dam-xoe-tre-em" },
//                     { name: "Chân Váy", link: "/chan-vay-tre-em" }
//                 ]
//             },
//             {
//                 name: "Đồ Lót Trẻ Em",
//                 subcategories: [
//                     { name: "Quần Short", link: "/quan-short-tre-em" },
//                     { name: "Áo Lót Trẻ Em", link: "/ao-lot-tre-em" },
//                     { name: "Quần Lót Trẻ Em", link: "/quan-lot-tre-em" },
//                     { name: "Áo Mặc Trong Cài Trước", link: "/ao-mac-trong-cai-truoc" }
//                 ]
//             },
//             {
//                 name: "Phụ Kiện Trẻ Em",
//                 subcategories: [
//                     { name: "Kính Mắt", link: "/kinh-mat-tre-em" },
//                     { name: "Khẩu Trang", link: "/khau-trang-tre-em" },
//                     { name: "Túi Đeo", link: "/tui-deo-tre-em" },
//                     { name: "Nón Bảo Hiểm", link: "/non-bao-hiem-tre-em" }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Thời Trang Nam",
//         subcategories: [
//             { name: "Áo Thun", link: "/ao-thun-nam" },
//             { name: "Áo Sơ Mi", link: "/ao-so-mi-nam" },
//             { name: "Quần jeans", link: "/quan-jeans-nam" },
//             { name: "Đồ thể thao", link: "/do-the-thao-nam" }
//         ]
//     },
//     {
//         name: "Thời Trang Nữ",
//         subcategories: [
//             { name: "Đầm", link: "/dam" },
//             { name: "Váy", link: "/vay" },
//             { name: "Đồ Bộ", link: "/do-bo" },
//             { name: "Đồ Ngủ", link: "/do-ngu" }
//         ]
//     },
//     {
//         name: "Thời Trang Trẻ Em",
//         subcategories: [
//             { name: "Đồ Sơ Sinh", link: "/do-so-sinh" },
//             { name: "Đồ Bé Trai", link: "/do-be-trai" },
//             { name: "Đồ Bé Gái", link: "/do-be-gai" }
//         ]
//     },
//     {
//         name: "Thời Trang Tập Gym",
//         subcategories: [
//             { name: "Áo Tập Gym", link: "/ao-tap-gym" },
//             { name: "Quần Tập Gym", link: "/quan-tap-gym" },
//             { name: "Đồ Bộ Tập Gym", link: "/do-bo-tap-gym" }
//         ]
//     }
// ];

// export default function Category() {
//     const [isVisible, setIsVisible] = useState(false);
//     const toggleMenu = () => {
//         setIsVisible(!isVisible);
//     }
//     return (
//         <div className={cx("aside-content-blog")}>
//             <div className={cx("title-head")}>Danh mục</div>
//             <nav className={cx("nav-category")}>
//                 <ul className={cx("nav navbar-pills")}>
//                     <li className={cx("nav-item", "relative")}>
//                         <Link title="Nữ" to="/nu" className={cx("nav-link", "pr-5")}>
//                             Nữ
//                         </Link>
//                         <i className={cx("open_mnu", "down_icon")} onClick={toggleMenu} />
//                         <ul className={cx("menu_down", `${isVisible ? `visible` : `hidden`}`)}>
//                             <li className={cx("dropdown-submenu", "nav-item", "relative")}>
//                                 <Link title="Áo" className={cx("nav-linkpr-5")} to="/ao">
//                                     Áo
//                                 </Link>
//                                 <i className={cx("open_mnu", "down_icon")} />
//                                 <ul className={cx("menu_down")}>
//                                     <li className={cx("nav-item")}>
//                                         <Link title="Áo Len" className={cx("nav-link", "pl-4")} to="/ao-len">
//                                         {/* <Link title="Áo Len" className={cx("nav-link")} to="/ao-len"> */}
//                                             Áo Len{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link title="Áo Thun" className={cx("nav-link", "pl-4")} to="/ao-thun">
//                                         {/* <Link title="Áo Thun" className={cx("nav-link")} to="/ao-thun"> */}
//                                             Áo Thun{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link title="Áo Sơ Mi" className={cx("nav-link", "pl-4")} to="/ao-so-mi">
//                                         {/* <Link title="Áo Sơ Mi" className={cx("nav-link")} to="/ao-so-mi"> */}
//                                             Áo Sơ Mi{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Áo Cardigan"
//                                             className={cx("nav-link", "pl-4")}
//                                             to="/ao-cardigan"
//                                         >
//                                             Áo Cardigan{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             {/* <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link title="Quần" className={cx("nav-link pr-5")} to="/quan">
//                                     Quần
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Tây Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-tay-nu"
//                                         >
//                                             Quần Tây Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Jean Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-jean-nu"
//                                         >
//                                             Quần Jean Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Short Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-short-nu"
//                                         >
//                                             Quần Short Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Leggings Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-leggings-nu"
//                                         >
//                                             Quần Leggings Nữ{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link title="Váy" className={cx("nav-link pr-5")} to="/vay">
//                                     Váy
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Chân Váy Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/chan-vay-nu"
//                                         >
//                                             Chân Váy Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Váy Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-vay-nu"
//                                         >
//                                             Quần Váy Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Váy Ngắn Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/vay-ngan-nu"
//                                         >
//                                             Váy Ngắn Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Váy Liền Thân"
//                                             className={cx("nav-link pl-4")}
//                                             to="/vay-lien-than"
//                                         >
//                                             Váy Liền Thân{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link
//                                     title="Đồ Mặc Trong"
//                                     className={cx("nav-link pr-5")}
//                                     to="/do-mac-trong"
//                                 >
//                                     Đồ Mặc Trong
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Áo Bra Tops"
//                                             className={cx("nav-link pl-4")}
//                                             to="/ao-bra-tops"
//                                         >
//                                             Áo Bra Tops{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Tất Lưới"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-tat-luoi"
//                                         >
//                                             Quần Tất Lưới{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Quần Con Size Lớn"
//                                             className={cx("nav-link pl-4")}
//                                             to="/quan-con-size-lon"
//                                         >
//                                             Quần Con Size Lớn{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Áo Ngực Không Gọng"
//                                             className={cx("nav-link pl-4")}
//                                             to="/ao-nguc-khong-gong"
//                                         >
//                                             Áo Ngực Không Gọng{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link title="Đồ Mặc Nhà" className={cx("nav-link pr-5")} to="/do-mac-nha">
//                                     Đồ Mặc Nhà
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đồ Pyjama Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/do-pyjama-nu"
//                                         >
//                                             Đồ Pyjama Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đồ Relaco"
//                                             className={cx("nav-link pl-4")}
//                                             to="/do-relaco"
//                                         >
//                                             Đồ Relaco{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Bộ Giường Ngủ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/bo-giuong-ngu"
//                                         >
//                                             Bộ Giường Ngủ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Dép Đi Trong Nhà"
//                                             className={cx("nav-link pl-4")}
//                                             to="/dep-di-trong-nha"
//                                         >
//                                             Dép Đi Trong Nhà{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link title="Phụ Kiện" className={cx("nav-link pr-5")} to="/phu-kien">
//                                     Phụ Kiện
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Túi Xách Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/tui-xach-nu"
//                                         >
//                                             Túi Xách Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đồng Hồ Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/dong-ho-nu"
//                                         >
//                                             Đồng Hồ Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Bông Tai Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             to="/bong-tai-nu"
//                                         >
//                                             Bông Tai Nữ{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Tất Cả Phụ Kiện"
//                                             className={cx("nav-link pl-4")}
//                                             to="/tat-ca-phu-kien"
//                                         >
//                                             Tất Cả Phụ Kiện{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link title="Đầm Và Jumpsuit" className={cx("nav-link pr-5")} to="/">
//                                     Đầm Và Jumpsuit
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đầm Dạ Hội"
//                                             className={cx("nav-link pl-4")}
//                                             to="/dam-da-hoi"
//                                         >
//                                             Đầm Dạ Hội{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đầm Xòe Trễ Vai"
//                                             className={cx("nav-link pl-4")}
//                                             to="/dam-xoe-tre-vai"
//                                         >
//                                             Đầm Xòe Trễ Vai{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đầm Và Jumpsuit"
//                                             className={cx("nav-link pl-4")}
//                                             to="/dam-va-jumpsuit"
//                                         >
//                                             Đầm Và Jumpsuit{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <Link title="Đồ Bộ Nữ" className={cx("nav-link pr-5")} to="/do-bo-nu">
//                                     Đồ Bộ Nữ
//                                 </Link>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đồ Bộ Mặc Nhà"
//                                             className={cx("nav-link pl-4")}
//                                             to="/do-bo-mac-nha"
//                                         >
//                                             Đồ Bộ Mặc Nhà{" "}
//                                         </Link>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <Link
//                                             title="Đồ Bộ Đi Chơi"
//                                             className={cx("nav-link pl-4")}
//                                             to="/do-bo-di-choi"
//                                         >
//                                             Đồ Bộ Đi Chơi{" "}
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li> */}
//                         </ul>
//                     </li>
//                      {/* <li className="nav-item  relative">
//                          <Link title="Nam" to="/nam" className="nav-link pr-5">
//                              Nam
//                          </Link>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link title="Áo" className="nav-link pr-5" to="/ao">
//                                      Áo
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link title="Áo Thun" className="nav-link pl-4" to="/ao-thun">
//                                              Áo Thun{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Áo Polo" className="nav-link pl-4" to="/ao-polo">
//                                              Áo Polo{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Áo Sơ Mi" className="nav-link pl-4" to="/ao-so-mi">
//                                              Áo Sơ Mi{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Áo Ba Lỗ" className="nav-link pl-4" to="/ao-ba-lo">
//                                              Áo Ba Lỗ{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link title="Quần" className="nav-link pr-5" to="/quan">
//                                      Quần
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Tây Nam"
//                                              className="nav-link pl-4"
//                                              to="/quan-tay-nam"
//                                          >
//                                              Quần Tây Nam{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Kaki Nam"
//                                              className="nav-link pl-4"
//                                              to="/quan-kaki-nam"
//                                          >
//                                              Quần Kaki Nam{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Short Nam"
//                                              className="nav-link pl-4"
//                                              to="/quan-short-nam"
//                                          >
//                                              Quần Short Nam{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Thể Thao Nam"
//                                              className="nav-link pl-4"
//                                              to="/quan-the-thao-nam"
//                                          >
//                                              Quần Thể Thao Nam{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link
//                                      title="Đồ Mặc Ngoài"
//                                      className="nav-link pr-5"
//                                      to="/do-mac-ngoai"
//                                  >
//                                      Đồ Mặc Ngoài
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Khoác (Coat)"
//                                              className="nav-link pl-4"
//                                              to="/ao-khoac-coat"
//                                          >
//                                              Áo Khoác (Coat){" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Khoác (Jacket)"
//                                              className="nav-link pl-4"
//                                              to="/ao-khoac-jacket"
//                                          >
//                                              Áo Khoác (Jacket){" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Blouson & Hoodie"
//                                              className="nav-link pl-4"
//                                              to="/ao-blouson-hoodie"
//                                          >
//                                              Áo Blouson &amp; Hoodie{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Khoác Siêu Nhẹ"
//                                              className="nav-link pl-4"
//                                              to="/ao-khoac-sieu-nhe"
//                                          >
//                                              Áo Khoác Siêu Nhẹ{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link
//                                      title="Đồ Mặc Trong"
//                                      className="nav-link pr-5"
//                                      to="/do-mac-trong"
//                                  >
//                                      Đồ Mặc Trong
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link title="Đồ Lót" className="nav-link pl-4" to="/do-lot">
//                                              Đồ Lót{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="AIRism" className="nav-link pl-4" to="/airism">
//                                              AIRism{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Mặc Trong"
//                                              className="nav-link pl-4"
//                                              to="/ao-mac-trong"
//                                          >
//                                              Áo Mặc Trong{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Leggings Và Quần Tất"
//                                              className="nav-link pl-4"
//                                              to="/quan-leggings-va-quan-tat"
//                                          >
//                                              Quần Leggings Và Quần Tất{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link title="Đồ Mặc Nhà" className="nav-link pr-5" to="/do-mac-nha">
//                                      Đồ Mặc Nhà
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link title="Đồ Ngủ" className="nav-link pl-4" to="/do-ngu">
//                                              Đồ Ngủ{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Đồ Pyjama"
//                                              className="nav-link pl-4"
//                                              to="/do-pyjama"
//                                          >
//                                              Đồ Pyjama{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Chino"
//                                              className="nav-link pl-4"
//                                              to="/quan-chino"
//                                          >
//                                              Quần Chino{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Dài Đến Mắt Cá"
//                                              className="nav-link pl-4"
//                                              to="/quan-dai-den-mat-ca"
//                                          >
//                                              Quần Dài Đến Mắt Cá{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link
//                                      title="Phụ Kiện Nam"
//                                      className="nav-link pr-5"
//                                      to="/phu-kien-nam"
//                                  >
//                                      Phụ Kiện Nam
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link title="Ví - Bóp" className="nav-link pl-4" to="/vi-bop">
//                                              Ví - Bóp{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Mắt Kính" className="nav-link pl-4" to="/mat-kinh">
//                                              Mắt Kính{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Vòng Tay" className="nav-link pl-4" to="/vong-tay">
//                                              Vòng Tay{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Khẩu Trang AIRism"
//                                              className="nav-link pl-4"
//                                              to="/khau-trang-airism"
//                                          >
//                                              Khẩu Trang AIRism{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <Link title="Trẻ Em" to="/tre-em" className="nav-link pr-5">
//                              Trẻ Em
//                          </Link>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link title="Áo Trẻ Em" className="nav-link pr-5" to="/ao-tre-em">
//                                      Áo Trẻ Em
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Thun Trẻ Em"
//                                              className="nav-link pl-4"
//                                              to="/ao-thun-tre-em"
//                                          >
//                                              Áo Thun Trẻ Em{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Áo Sơ Mi" className="nav-link pl-4" to="/ao-so-mi">
//                                              Áo Sơ Mi{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Kiểu Họa Tiết"
//                                              className="nav-link pl-4"
//                                              to="/ao-kieu-hoa-tiet"
//                                          >
//                                              Áo Kiểu Họa Tiết{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Thun Hoạt Hình"
//                                              className="nav-link pl-4"
//                                              to="/ao-thun-hoat-hinh"
//                                          >
//                                              Áo Thun Hoạt Hình{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link
//                                      title="Quần Trẻ Em"
//                                      className="nav-link pr-5"
//                                      to="/quan-tre-em"
//                                  >
//                                      Quần Trẻ Em
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link title="Quần Dài" className="nav-link pl-4" to="/quan-dai">
//                                              Quần Dài{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Short"
//                                              className="nav-link pl-4"
//                                              to="/quan-short-1"
//                                          >
//                                              Quần Short{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Đầm Xòe" className="nav-link pl-4" to="/dam-xoe">
//                                              Đầm Xòe{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Chân Váy" className="nav-link pl-4" to="/chan-vay">
//                                              Chân Váy{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link
//                                      title="Đồ Lót Trẻ Em"
//                                      className="nav-link pr-5"
//                                      to="/do-lot-tre-em"
//                                  >
//                                      Đồ Lót Trẻ Em
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Short"
//                                              className="nav-link pl-4"
//                                              to="/quan-short-1"
//                                          >
//                                              Quần Short{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Lót Trẻ Em"
//                                              className="nav-link pl-4"
//                                              to="/ao-lot-tre-em"
//                                          >
//                                              Áo Lót Trẻ Em{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Quần Lót Trẻ Em"
//                                              className="nav-link pl-4"
//                                              to="/quan-lot-tre-em"
//                                          >
//                                              Quần Lót Trẻ Em{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Áo Mặc Trong Cài Trước"
//                                              className="nav-link pl-4"
//                                              to="/ao-mac-trong-cai-truoc"
//                                          >
//                                              Áo Mặc Trong Cài Trước{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <Link
//                                      title="Phụ Kiện Trẻ Em"
//                                      className="nav-link pr-5"
//                                      to="/phu-kien-tre-em"
//                                  >
//                                      Phụ Kiện Trẻ Em
//                                  </Link>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <Link title="Kính Mắt" className="nav-link pl-4" to="/kinh-mat">
//                                              Kính Mắt{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Khẩu Trang"
//                                              className="nav-link pl-4"
//                                              to="/khau-trang"
//                                          >
//                                              Khẩu Trang{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link title="Túi Đeo" className="nav-link pl-4" to="/tui-deo">
//                                              Túi Đeo{" "}
//                                          </Link>
//                                      </li>
//                                      <li className="nav-item">
//                                          <Link
//                                              title="Nón Bảo Hiểm"
//                                              className="nav-link pl-4"
//                                              to="/non-bao-hiem"
//                                          >
//                                              Nón Bảo Hiểm{" "}
//                                          </Link>
//                                      </li>
//                                  </ul>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <Link
//                              title="Thời Trang Nam"
//                              to="/thoi-trang-nam"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Nam
//                          </Link>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <Link title="Áo Thun" className="nav-link" to="/ao-thun">
//                                      Áo Thun
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Áo Sơ Mi" className="nav-link" to="/ao-so-mi">
//                                      Áo Sơ Mi
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Quần jeans" className="nav-link" to="/quan-jeans">
//                                      Quần jeans
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Đồ thể thao" className="nav-link" to="/do-the-thao">
//                                      Đồ thể thao
//                                  </Link>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <Link
//                              title="Thời Trang Nữ"
//                              to="/thoi-trang-nu"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Nữ
//                          </Link>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <Link title="Đầm" className="nav-link" to="/dam">
//                                      Đầm
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Váy" className="nav-link" to="/vay">
//                                      Váy
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Đồ Bộ" className="nav-link" to="/do-bo">
//                                      Đồ Bộ
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Đồ Ngủ" className="nav-link" to="/do-ngu">
//                                      Đồ Ngủ
//                                  </Link>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <Link
//                              title="Thời Trang Trẻ Em"
//                              to="/thoi-trang-tre-em"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Trẻ Em
//                          </Link>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <Link title="Đồ Sơ Sinh" className="nav-link" to="/do-so-sinh">
//                                      Đồ Sơ Sinh
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Đồ Bé Trai" className="nav-link" to="/do-be-trai">
//                                      Đồ Bé Trai
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Đồ Bé Gái" className="nav-link" to="/do-be-gai">
//                                      Đồ Bé Gái
//                                  </Link>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <Link
//                              title="Thời Trang Tập Gym"
//                              to="/thoi-trang-tap-gym"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Tập Gym
//                          </Link>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <Link title="Áo Tập Gym" className="nav-link" to="/ao-tap-gym">
//                                      Áo Tập Gym
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Quần Tập Gym" className="nav-link" to="/quan-tap-gym">
//                                      Quần Tập Gym
//                                  </Link>
//                              </li>
//                              <li className="nav-item">
//                                  <Link title="Đồ Bộ Tập Gym" className="nav-link" to="/do-bo-tap-gym">
//                                      Đồ Bộ Tập Gym
//                                  </Link>
//                              </li>
//                          </ul>
//                      </li> */}
//                 </ul>
//             </nav>
//         </div>

//     )
// }
