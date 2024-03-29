import React, { useState } from "react";
import style from "./Category.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const data = [
    {
        name: "Nữ",
        subcategories: [
            {
                name: "Áo",
                subcategories: [
                    { name: "Áo Len", link: "/ao-len" },
                    { name: "Áo Thun", link: "/ao-thun" },
                    { name: "Áo Sơ Mi", link: "/ao-so-mi" },
                    { name: "Áo Cardigan", link: "/ao-cardigan" }
                ]
            },
            {
                name: "Quần",
                subcategories: [
                    { name: "Quần Tây Nữ", link: "/quan-tay-nu" },
                    { name: "Quần Jean Nữ", link: "/quan-jean-nu" },
                    { name: "Quần Short Nữ", link: "/quan-short-nu" },
                    { name: "Quần Leggings Nữ", link: "/quan-leggings-nu" }
                ]
            },
            {
                name: "Váy",
                subcategories: [
                    { name: "Chân Váy Nữ", link: "/chan-vay-nu" },
                    { name: "Quần Váy Nữ", link: "/quan-vay-nu" },
                    { name: "Váy Ngắn Nữ", link: "/vay-ngan-nu" },
                    { name: "Váy Liền Thân", link: "/vay-lien-than" }
                ]
            },
            {
                name: "Đồ Mặc Trong",
                subcategories: [
                    { name: "Áo Bra Tops", link: "/ao-bra-tops" },
                    { name: "Quần Tất Lưới", link: "/quan-tat-luoi" },
                    { name: "Quần Con Size Lớn", link: "/quan-con-size-lon" },
                    { name: "Áo Ngực Không Gọng", link: "/ao-nguc-khong-gong" }
                ]
            },
            {
                name: "Đồ Mặc Nhà",
                subcategories: [
                    { name: "Đồ Pyjama Nữ", link: "/do-pyjama-nu" },
                    { name: "Đồ Relaco", link: "/do-relaco" },
                    { name: "Bộ Giường Ngủ", link: "/bo-giuong-ngu" },
                    { name: "Dép Đi Trong Nhà", link: "/dep-di-trong-nha" }
                ]
            },
            {
                name: "Phụ Kiện",
                subcategories: [
                    { name: "Túi Xách Nữ", link: "/tui-xach-nu" },
                    { name: "Đồng Hồ Nữ", link: "/dong-ho-nu" },
                    { name: "Bông Tai Nữ", link: "/bong-tai-nu" },
                    { name: "Tất Cả Phụ Kiện", link: "/tat-ca-phu-kien" }
                ]
            },
            {
                name: "Đầm Và Jumpsuit",
                subcategories: [
                    { name: "Đầm Dạ Hội", link: "/dam-da-hoi" },
                    { name: "Đầm Xòe Trễ Vai", link: "/dam-xoe-tre-vai" },
                    { name: "Đầm Và Jumpsuit", link: "/dam-va-jumpsuit" }
                ]
            },
            {
                name: "Đồ Bộ Nữ",
                subcategories: [
                    { name: "Đồ Bộ Mặc Nhà", link: "/do-bo-mac-nha" },
                    { name: "Đồ Bộ Đi Chơi", link: "/do-bo-di-choi" }
                ]
            }
        ]
    },
    {
        name: "Nam",
        subcategories: [
            {
                name: "Áo",
                subcategories: [
                    { name: "Áo Thun", link: "/ao-thun" },
                    { name: "Áo Polo", link: "/ao-polo" },
                    { name: "Áo Sơ Mi", link: "/ao-so-mi" },
                    { name: "Áo Ba Lỗ", link: "/ao-ba-lo" }
                ]
            },
            {
                name: "Quần",
                subcategories: [
                    { name: "Quần Tây Nam", link: "/quan-tay-nam" },
                    { name: "Quần Kaki Nam", link: "/quan-kaki-nam" },
                    { name: "Quần Short Nam", link: "/quan-short-nam" },
                    { name: "Quần Thể Thao Nam", link: "/quan-the-thao-nam" }
                ]
            },
            {
                name: "Đồ Mặc Ngoài",
                subcategories: [
                    { name: "Áo Khoác (Coat)", link: "/ao-khoac-coat" },
                    { name: "Áo Khoác (Jacket)", link: "/ao-khoac-jacket" },
                    { name: "Áo Blouson & Hoodie", link: "/ao-blouson-hoodie" },
                    { name: "Áo Khoác Siêu Nhẹ", link: "/ao-khoac-sieu-nhe" }
                ]
            },
            {
                name: "Đồ Mặc Trong",
                subcategories: [
                    { name: "Đồ Lót", link: "/do-lot" },
                    { name: "AIRism", link: "/airism" },
                    { name: "Áo Mặc Trong", link: "/ao-mac-trong" },
                    { name: "Quần Leggings Và Quần Tất", link: "/quan-leggings-va-quan-tat" }
                ]
            },
            {
                name: "Đồ Mặc Nhà",
                subcategories: [
                    { name: "Đồ Ngủ", link: "/do-ngu" },
                    { name: "Đồ Pyjama", link: "/do-pyjama" },
                    { name: "Quần Chino", link: "/quan-chino" },
                    { name: "Quần Dài Đến Mắt Cá", link: "/quan-dai-den-mat-ca" }
                ]
            },
            {
                name: "Phụ Kiện Nam",
                subcategories: [
                    { name: "Ví - Bóp", link: "/vi-bop" },
                    { name: "Mắt Kính", link: "/mat-kinh" },
                    { name: "Vòng Tay", link: "/vong-tay" },
                    { name: "Khẩu Trang AIRism", link: "/khau-trang-airism" }
                ]
            }
        ]
    },
    {
        name: "Trẻ Em",
        subcategories: [
            {
                name: "Áo Trẻ Em",
                subcategories: [
                    { name: "Áo Thun Trẻ Em", link: "/ao-thun-tre-em" },
                    { name: "Áo Sơ Mi", link: "/ao-so-mi-tre-em" },
                    { name: "Áo Kiểu Họa Tiết", link: "/ao-kieu-hoa-tiet" },
                    { name: "Áo Thun Hoạt Hình", link: "/ao-thun-hoat-hinh" }
                ]
            },
            {
                name: "Quần Trẻ Em",
                subcategories: [
                    { name: "Quần Dài", link: "/quan-dai-tre-em" },
                    { name: "Quần Short", link: "/quan-short-tre-em" },
                    { name: "Đầm Xòe", link: "/dam-xoe-tre-em" },
                    { name: "Chân Váy", link: "/chan-vay-tre-em" }
                ]
            },
            {
                name: "Đồ Lót Trẻ Em",
                subcategories: [
                    { name: "Quần Short", link: "/quan-short-tre-em" },
                    { name: "Áo Lót Trẻ Em", link: "/ao-lot-tre-em" },
                    { name: "Quần Lót Trẻ Em", link: "/quan-lot-tre-em" },
                    { name: "Áo Mặc Trong Cài Trước", link: "/ao-mac-trong-cai-truoc" }
                ]
            },
            {
                name: "Phụ Kiện Trẻ Em",
                subcategories: [
                    { name: "Kính Mắt", link: "/kinh-mat-tre-em" },
                    { name: "Khẩu Trang", link: "/khau-trang-tre-em" },
                    { name: "Túi Đeo", link: "/tui-deo-tre-em" },
                    { name: "Nón Bảo Hiểm", link: "/non-bao-hiem-tre-em" }
                ]
            }
        ]
    },
    {
        name: "Thời Trang Nam",
        subcategories: [
            { name: "Áo Thun", link: "/ao-thun-nam" },
            { name: "Áo Sơ Mi", link: "/ao-so-mi-nam" },
            { name: "Quần jeans", link: "/quan-jeans-nam" },
            { name: "Đồ thể thao", link: "/do-the-thao-nam" }
        ]
    },
    {
        name: "Thời Trang Nữ",
        subcategories: [
            { name: "Đầm", link: "/dam" },
            { name: "Váy", link: "/vay" },
            { name: "Đồ Bộ", link: "/do-bo" },
            { name: "Đồ Ngủ", link: "/do-ngu" }
        ]
    },
    {
        name: "Thời Trang Trẻ Em",
        subcategories: [
            { name: "Đồ Sơ Sinh", link: "/do-so-sinh" },
            { name: "Đồ Bé Trai", link: "/do-be-trai" },
            { name: "Đồ Bé Gái", link: "/do-be-gai" }
        ]
    },
    {
        name: "Thời Trang Tập Gym",
        subcategories: [
            { name: "Áo Tập Gym", link: "/ao-tap-gym" },
            { name: "Quần Tập Gym", link: "/quan-tap-gym" },
            { name: "Đồ Bộ Tập Gym", link: "/do-bo-tap-gym" }
        ]
    }
]


export default function Category() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div className={cx("aside-content-blog")}>
            <div className={cx("title-head")}>Danh mục</div>
            <nav className={cx("nav-category")}>
                <ul className={cx("nav navbar-pills")}>
                    {data.map((e) => (
                        <li className={cx("nav-item", "relative")}>
                            <a title={e.name} href="" className={cx("nav-link", "pr-5")}>
                                {e.name}
                            </a>
                            <i className={cx("open_mnu", "down_icon")} onClick={toggleMenu} />
                            <ul className={cx("menu_down", `${isVisible ? `visible` : `hidden`}`)}>
                                {e.subcategories.map((e1) => (
                                    <li className={cx("dropdown-submenu", "nav-item", "relative")}>
                                        <a title={e1.name} className={cx("nav-linkpr-5")} href="">
                                            {e1.name}
                                        </a>
                                        {/* <i className={cx("open_mnu", "down_icon")} />
                                        <ul className={cx("menu_down")}>
                                            {e1.subcategories.map((e2) => (
                                                <li className={cx("nav-item")}>
                                                    <a
                                                        title={e2.name}
                                                        className={cx("nav-link", "pl-4")}
                                                        href={e2.link}
                                                    >
                                                        {e2.name}
                                                    </a>
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

    )
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
//                         <a title="Nữ" href="/nu" className={cx("nav-link", "pr-5")}>
//                             Nữ
//                         </a>
//                         <i className={cx("open_mnu", "down_icon")} onClick={toggleMenu} />
//                         <ul className={cx("menu_down", `${isVisible ? `visible` : `hidden`}`)}>
//                             <li className={cx("dropdown-submenu", "nav-item", "relative")}>
//                                 <a title="Áo" className={cx("nav-linkpr-5")} href="/ao">
//                                     Áo
//                                 </a>
//                                 <i className={cx("open_mnu", "down_icon")} />
//                                 <ul className={cx("menu_down")}>
//                                     <li className={cx("nav-item")}>
//                                         <a title="Áo Len" className={cx("nav-link", "pl-4")} href="/ao-len">
//                                         {/* <a title="Áo Len" className={cx("nav-link")} href="/ao-len"> */}
//                                             Áo Len{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a title="Áo Thun" className={cx("nav-link", "pl-4")} href="/ao-thun">
//                                         {/* <a title="Áo Thun" className={cx("nav-link")} href="/ao-thun"> */}
//                                             Áo Thun{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a title="Áo Sơ Mi" className={cx("nav-link", "pl-4")} href="/ao-so-mi">
//                                         {/* <a title="Áo Sơ Mi" className={cx("nav-link")} href="/ao-so-mi"> */}
//                                             Áo Sơ Mi{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Áo Cardigan"
//                                             className={cx("nav-link", "pl-4")}
//                                             href="/ao-cardigan"
//                                         >
//                                             Áo Cardigan{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             {/* <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a title="Quần" className={cx("nav-link pr-5")} href="/quan">
//                                     Quần
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Tây Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-tay-nu"
//                                         >
//                                             Quần Tây Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Jean Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-jean-nu"
//                                         >
//                                             Quần Jean Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Short Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-short-nu"
//                                         >
//                                             Quần Short Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Leggings Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-leggings-nu"
//                                         >
//                                             Quần Leggings Nữ{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a title="Váy" className={cx("nav-link pr-5")} href="/vay">
//                                     Váy
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Chân Váy Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/chan-vay-nu"
//                                         >
//                                             Chân Váy Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Váy Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-vay-nu"
//                                         >
//                                             Quần Váy Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Váy Ngắn Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/vay-ngan-nu"
//                                         >
//                                             Váy Ngắn Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Váy Liền Thân"
//                                             className={cx("nav-link pl-4")}
//                                             href="/vay-lien-than"
//                                         >
//                                             Váy Liền Thân{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a
//                                     title="Đồ Mặc Trong"
//                                     className={cx("nav-link pr-5")}
//                                     href="/do-mac-trong"
//                                 >
//                                     Đồ Mặc Trong
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Áo Bra Tops"
//                                             className={cx("nav-link pl-4")}
//                                             href="/ao-bra-tops"
//                                         >
//                                             Áo Bra Tops{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Tất Lưới"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-tat-luoi"
//                                         >
//                                             Quần Tất Lưới{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Quần Con Size Lớn"
//                                             className={cx("nav-link pl-4")}
//                                             href="/quan-con-size-lon"
//                                         >
//                                             Quần Con Size Lớn{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Áo Ngực Không Gọng"
//                                             className={cx("nav-link pl-4")}
//                                             href="/ao-nguc-khong-gong"
//                                         >
//                                             Áo Ngực Không Gọng{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a title="Đồ Mặc Nhà" className={cx("nav-link pr-5")} href="/do-mac-nha">
//                                     Đồ Mặc Nhà
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đồ Pyjama Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/do-pyjama-nu"
//                                         >
//                                             Đồ Pyjama Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đồ Relaco"
//                                             className={cx("nav-link pl-4")}
//                                             href="/do-relaco"
//                                         >
//                                             Đồ Relaco{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Bộ Giường Ngủ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/bo-giuong-ngu"
//                                         >
//                                             Bộ Giường Ngủ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Dép Đi Trong Nhà"
//                                             className={cx("nav-link pl-4")}
//                                             href="/dep-di-trong-nha"
//                                         >
//                                             Dép Đi Trong Nhà{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a title="Phụ Kiện" className={cx("nav-link pr-5")} href="/phu-kien">
//                                     Phụ Kiện
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Túi Xách Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/tui-xach-nu"
//                                         >
//                                             Túi Xách Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đồng Hồ Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/dong-ho-nu"
//                                         >
//                                             Đồng Hồ Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Bông Tai Nữ"
//                                             className={cx("nav-link pl-4")}
//                                             href="/bong-tai-nu"
//                                         >
//                                             Bông Tai Nữ{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Tất Cả Phụ Kiện"
//                                             className={cx("nav-link pl-4")}
//                                             href="/tat-ca-phu-kien"
//                                         >
//                                             Tất Cả Phụ Kiện{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a title="Đầm Và Jumpsuit" className={cx("nav-link pr-5")} href="/">
//                                     Đầm Và Jumpsuit
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đầm Dạ Hội"
//                                             className={cx("nav-link pl-4")}
//                                             href="/dam-da-hoi"
//                                         >
//                                             Đầm Dạ Hội{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đầm Xòe Trễ Vai"
//                                             className={cx("nav-link pl-4")}
//                                             href="/dam-xoe-tre-vai"
//                                         >
//                                             Đầm Xòe Trễ Vai{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đầm Và Jumpsuit"
//                                             className={cx("nav-link pl-4")}
//                                             href="/dam-va-jumpsuit"
//                                         >
//                                             Đầm Và Jumpsuit{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className={cx("dropdown-submenu nav-item  relative")}>
//                                 <a title="Đồ Bộ Nữ" className={cx("nav-link pr-5")} href="/do-bo-nu">
//                                     Đồ Bộ Nữ
//                                 </a>
//                                 <i className={cx("open_mnu down_icon")} />
//                                 <ul className={cx("menu_down")} style={{ display: "none" }}>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đồ Bộ Mặc Nhà"
//                                             className={cx("nav-link pl-4")}
//                                             href="/do-bo-mac-nha"
//                                         >
//                                             Đồ Bộ Mặc Nhà{" "}
//                                         </a>
//                                     </li>
//                                     <li className={cx("nav-item")}>
//                                         <a
//                                             title="Đồ Bộ Đi Chơi"
//                                             className={cx("nav-link pl-4")}
//                                             href="/do-bo-di-choi"
//                                         >
//                                             Đồ Bộ Đi Chơi{" "}
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </li> */}
//                         </ul>
//                     </li>
//                      {/* <li className="nav-item  relative">
//                          <a title="Nam" href="/nam" className="nav-link pr-5">
//                              Nam
//                          </a>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a title="Áo" className="nav-link pr-5" href="/ao">
//                                      Áo
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a title="Áo Thun" className="nav-link pl-4" href="/ao-thun">
//                                              Áo Thun{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Áo Polo" className="nav-link pl-4" href="/ao-polo">
//                                              Áo Polo{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Áo Sơ Mi" className="nav-link pl-4" href="/ao-so-mi">
//                                              Áo Sơ Mi{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Áo Ba Lỗ" className="nav-link pl-4" href="/ao-ba-lo">
//                                              Áo Ba Lỗ{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a title="Quần" className="nav-link pr-5" href="/quan">
//                                      Quần
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Tây Nam"
//                                              className="nav-link pl-4"
//                                              href="/quan-tay-nam"
//                                          >
//                                              Quần Tây Nam{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Kaki Nam"
//                                              className="nav-link pl-4"
//                                              href="/quan-kaki-nam"
//                                          >
//                                              Quần Kaki Nam{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Short Nam"
//                                              className="nav-link pl-4"
//                                              href="/quan-short-nam"
//                                          >
//                                              Quần Short Nam{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Thể Thao Nam"
//                                              className="nav-link pl-4"
//                                              href="/quan-the-thao-nam"
//                                          >
//                                              Quần Thể Thao Nam{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a
//                                      title="Đồ Mặc Ngoài"
//                                      className="nav-link pr-5"
//                                      href="/do-mac-ngoai"
//                                  >
//                                      Đồ Mặc Ngoài
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Khoác (Coat)"
//                                              className="nav-link pl-4"
//                                              href="/ao-khoac-coat"
//                                          >
//                                              Áo Khoác (Coat){" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Khoác (Jacket)"
//                                              className="nav-link pl-4"
//                                              href="/ao-khoac-jacket"
//                                          >
//                                              Áo Khoác (Jacket){" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Blouson & Hoodie"
//                                              className="nav-link pl-4"
//                                              href="/ao-blouson-hoodie"
//                                          >
//                                              Áo Blouson &amp; Hoodie{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Khoác Siêu Nhẹ"
//                                              className="nav-link pl-4"
//                                              href="/ao-khoac-sieu-nhe"
//                                          >
//                                              Áo Khoác Siêu Nhẹ{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a
//                                      title="Đồ Mặc Trong"
//                                      className="nav-link pr-5"
//                                      href="/do-mac-trong"
//                                  >
//                                      Đồ Mặc Trong
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a title="Đồ Lót" className="nav-link pl-4" href="/do-lot">
//                                              Đồ Lót{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="AIRism" className="nav-link pl-4" href="/airism">
//                                              AIRism{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Mặc Trong"
//                                              className="nav-link pl-4"
//                                              href="/ao-mac-trong"
//                                          >
//                                              Áo Mặc Trong{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Leggings Và Quần Tất"
//                                              className="nav-link pl-4"
//                                              href="/quan-leggings-va-quan-tat"
//                                          >
//                                              Quần Leggings Và Quần Tất{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a title="Đồ Mặc Nhà" className="nav-link pr-5" href="/do-mac-nha">
//                                      Đồ Mặc Nhà
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a title="Đồ Ngủ" className="nav-link pl-4" href="/do-ngu">
//                                              Đồ Ngủ{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Đồ Pyjama"
//                                              className="nav-link pl-4"
//                                              href="/do-pyjama"
//                                          >
//                                              Đồ Pyjama{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Chino"
//                                              className="nav-link pl-4"
//                                              href="/quan-chino"
//                                          >
//                                              Quần Chino{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Dài Đến Mắt Cá"
//                                              className="nav-link pl-4"
//                                              href="/quan-dai-den-mat-ca"
//                                          >
//                                              Quần Dài Đến Mắt Cá{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a
//                                      title="Phụ Kiện Nam"
//                                      className="nav-link pr-5"
//                                      href="/phu-kien-nam"
//                                  >
//                                      Phụ Kiện Nam
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a title="Ví - Bóp" className="nav-link pl-4" href="/vi-bop">
//                                              Ví - Bóp{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Mắt Kính" className="nav-link pl-4" href="/mat-kinh">
//                                              Mắt Kính{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Vòng Tay" className="nav-link pl-4" href="/vong-tay">
//                                              Vòng Tay{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Khẩu Trang AIRism"
//                                              className="nav-link pl-4"
//                                              href="/khau-trang-airism"
//                                          >
//                                              Khẩu Trang AIRism{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <a title="Trẻ Em" href="/tre-em" className="nav-link pr-5">
//                              Trẻ Em
//                          </a>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a title="Áo Trẻ Em" className="nav-link pr-5" href="/ao-tre-em">
//                                      Áo Trẻ Em
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Thun Trẻ Em"
//                                              className="nav-link pl-4"
//                                              href="/ao-thun-tre-em"
//                                          >
//                                              Áo Thun Trẻ Em{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Áo Sơ Mi" className="nav-link pl-4" href="/ao-so-mi">
//                                              Áo Sơ Mi{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Kiểu Họa Tiết"
//                                              className="nav-link pl-4"
//                                              href="/ao-kieu-hoa-tiet"
//                                          >
//                                              Áo Kiểu Họa Tiết{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Thun Hoạt Hình"
//                                              className="nav-link pl-4"
//                                              href="/ao-thun-hoat-hinh"
//                                          >
//                                              Áo Thun Hoạt Hình{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a
//                                      title="Quần Trẻ Em"
//                                      className="nav-link pr-5"
//                                      href="/quan-tre-em"
//                                  >
//                                      Quần Trẻ Em
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a title="Quần Dài" className="nav-link pl-4" href="/quan-dai">
//                                              Quần Dài{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Short"
//                                              className="nav-link pl-4"
//                                              href="/quan-short-1"
//                                          >
//                                              Quần Short{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Đầm Xòe" className="nav-link pl-4" href="/dam-xoe">
//                                              Đầm Xòe{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Chân Váy" className="nav-link pl-4" href="/chan-vay">
//                                              Chân Váy{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a
//                                      title="Đồ Lót Trẻ Em"
//                                      className="nav-link pr-5"
//                                      href="/do-lot-tre-em"
//                                  >
//                                      Đồ Lót Trẻ Em
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Short"
//                                              className="nav-link pl-4"
//                                              href="/quan-short-1"
//                                          >
//                                              Quần Short{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Lót Trẻ Em"
//                                              className="nav-link pl-4"
//                                              href="/ao-lot-tre-em"
//                                          >
//                                              Áo Lót Trẻ Em{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Quần Lót Trẻ Em"
//                                              className="nav-link pl-4"
//                                              href="/quan-lot-tre-em"
//                                          >
//                                              Quần Lót Trẻ Em{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Áo Mặc Trong Cài Trước"
//                                              className="nav-link pl-4"
//                                              href="/ao-mac-trong-cai-truoc"
//                                          >
//                                              Áo Mặc Trong Cài Trước{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                              <li className="dropdown-submenu nav-item  relative">
//                                  <a
//                                      title="Phụ Kiện Trẻ Em"
//                                      className="nav-link pr-5"
//                                      href="/phu-kien-tre-em"
//                                  >
//                                      Phụ Kiện Trẻ Em
//                                  </a>
//                                  <i className="open_mnu down_icon" />
//                                  <ul className="menu_down" style={{ display: "none" }}>
//                                      <li className="nav-item">
//                                          <a title="Kính Mắt" className="nav-link pl-4" href="/kinh-mat">
//                                              Kính Mắt{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Khẩu Trang"
//                                              className="nav-link pl-4"
//                                              href="/khau-trang"
//                                          >
//                                              Khẩu Trang{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a title="Túi Đeo" className="nav-link pl-4" href="/tui-deo">
//                                              Túi Đeo{" "}
//                                          </a>
//                                      </li>
//                                      <li className="nav-item">
//                                          <a
//                                              title="Nón Bảo Hiểm"
//                                              className="nav-link pl-4"
//                                              href="/non-bao-hiem"
//                                          >
//                                              Nón Bảo Hiểm{" "}
//                                          </a>
//                                      </li>
//                                  </ul>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <a
//                              title="Thời Trang Nam"
//                              href="/thoi-trang-nam"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Nam
//                          </a>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <a title="Áo Thun" className="nav-link" href="/ao-thun">
//                                      Áo Thun
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Áo Sơ Mi" className="nav-link" href="/ao-so-mi">
//                                      Áo Sơ Mi
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Quần jeans" className="nav-link" href="/quan-jeans">
//                                      Quần jeans
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Đồ thể thao" className="nav-link" href="/do-the-thao">
//                                      Đồ thể thao
//                                  </a>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <a
//                              title="Thời Trang Nữ"
//                              href="/thoi-trang-nu"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Nữ
//                          </a>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <a title="Đầm" className="nav-link" href="/dam">
//                                      Đầm
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Váy" className="nav-link" href="/vay">
//                                      Váy
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Đồ Bộ" className="nav-link" href="/do-bo">
//                                      Đồ Bộ
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Đồ Ngủ" className="nav-link" href="/do-ngu">
//                                      Đồ Ngủ
//                                  </a>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <a
//                              title="Thời Trang Trẻ Em"
//                              href="/thoi-trang-tre-em"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Trẻ Em
//                          </a>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <a title="Đồ Sơ Sinh" className="nav-link" href="/do-so-sinh">
//                                      Đồ Sơ Sinh
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Đồ Bé Trai" className="nav-link" href="/do-be-trai">
//                                      Đồ Bé Trai
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Đồ Bé Gái" className="nav-link" href="/do-be-gai">
//                                      Đồ Bé Gái
//                                  </a>
//                              </li>
//                          </ul>
//                      </li>
//                      <li className="nav-item  relative">
//                          <a
//                              title="Thời Trang Tập Gym"
//                              href="/thoi-trang-tap-gym"
//                              className="nav-link pr-5"
//                          >
//                              Thời Trang Tập Gym
//                          </a>
//                          <i className="open_mnu down_icon" />
//                          <ul className="menu_down" style={{ display: "none" }}>
//                              <li className="nav-item">
//                                  <a title="Áo Tập Gym" className="nav-link" href="/ao-tap-gym">
//                                      Áo Tập Gym
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Quần Tập Gym" className="nav-link" href="/quan-tap-gym">
//                                      Quần Tập Gym
//                                  </a>
//                              </li>
//                              <li className="nav-item">
//                                  <a title="Đồ Bộ Tập Gym" className="nav-link" href="/do-bo-tap-gym">
//                                      Đồ Bộ Tập Gym
//                                  </a>
//                              </li>
//                          </ul>
//                      </li> */}
//                 </ul>
//             </nav>
//         </div>

//     )
// }