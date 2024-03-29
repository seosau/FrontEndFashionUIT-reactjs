import React from "react";
import style from "./NewsDetail.module.scss";
import classNames from "classnames/bind";
import Category from "../../components/Category/Category";
import Tags from "../../components/Tags/Tags";
import HotNews from "../../components/HotNews/HotNews";

const cx = classNames.bind(style);

export default function NewsDetail() {
    return (
        <article className={cx("article-main")}>
            <div className={cx("row")}>
                <div className={cx("right-content", "col-lg-9", "col-12", "order-lg-2")}>
                    <div className={cx("article-details", "clearfix")}>
                        <h1 className={cx("article-title")}>
                            Nhà thiết kế vĩ đại đầu tiên của năm 2022
                        </h1>
                        <div className={cx("posts")}>
                            <div className={cx("time-post", "f")}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fal"
                                    data-icon="clock"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className={cx("svg-inline--fa", "fa-clock", "fa-w-16")}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                        className={cx("")}
                                    />
                                </svg>
                                Thứ Ba, 05/04/2022
                            </div>
                            <div className={cx("time-post")}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="user"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className={cx("svg-inline--fa", "fa-user", "fa-w-14")}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                        className={cx("")}
                                    />
                                </svg>
                                <span>Bean Fashion</span>
                            </div>
                        </div>
                        <div className={cx("rte")}>
                            <p>
                                Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1
                                giờ chiều ngày 1.
                            </p>
                            <p>
                                Mọi chiếc ghế trong không gian nhà kho hang động, nơi
                                được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi
                                khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người
                                tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê
                                bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần đầu
                                tiên sau nhiều năm”.&nbsp;Ditto biên tập viên kiêm giám tuyển
                                Stefano Tonchi.&nbsp;Julia Fox, nam châm nổi tiếng của thời điểm
                                này, ở hàng ghế đầu.&nbsp;Renzo Rosso, ông trùm, chủ sở hữu của Only
                                the Brave, một trong số ít tập đoàn của Ý, đang chủ trì, một nụ cười
                                trên môi.
                            </p>
                            <p>Tất cả ở đó để xem bộ sưu tập Diesel mới.</p>
                            <p>Chờ đã… Diesel?&nbsp;Thương hiệu quần jean rock 'n' roll?</p>
                            <p>
                                Diesel, thương hiệu quần jean rock 'n' roll một thời do Glenn
                                Martens thiết kế.
                            </p>
                            <p>
                                <img
                                    data-thumb="original"
                                    original-height={2048}
                                    original-width={1366}
                                    src="https://bizweb.dktcdn.net/100/423/358/files/nha-thiet-ke-vi-dai-nam-2022-1.jpg?v=1646493284789"
                                />
                            </p>
                            <p>
                                Đó là chặng thứ ba trong bộ ba buổi trình diễn của ông Martens kể từ
                                đầu năm, đã cùng nhau đưa ông từ nhà khái niệm thích hợp, được yêu
                                mến bởi những người trong ngành có đầu óc cao, những người yêu thích
                                thời trang và sinh viên trường nghệ thuật, lên vị trí số một. nhà
                                thiết kế của năm 2022.
                            </p>
                            <p>
                                Vào ngày 19 tháng 1, có một buổi trình diễn chung của nam và nữ cho
                                Y / Project, thương hiệu Pháp đình đám mà anh tiếp quản vào năm
                                2013, có áo ba lỗ lưới, váy và quần lụa với phần thân và háng của
                                nam và nữ được kết hợp ngẫu nhiên. , trong một bài bình luận không
                                phải ngẫu nhiên về cuộc trò chuyện rộng hơn xung quanh giới tính và
                                bản sắc.
                            </p>
                            <p>
                                Tuần tiếp theo, bộ sưu tập thời trang cao cấp đầu tiên của anh ấy
                                với tư cách là&nbsp;nhà thiết kế khách mời cho Jean Paul
                                Gaultier&nbsp;, hoàn chỉnh với những chiếc váy dạ hội đồ sộ trông
                                giống như biển có bọt và váy nàng tiên cá được làm từ những dải ruy
                                băng lụa cắt vụn, giống như một chiếc áo nịt ngực không bao giờ lỗi
                                mốt.
                            </p>
                            <p>
                                Sau đó, ba tuần sau đó, Diesel đến với 1.000 dạng denim: chần, sờn,
                                cắt dán, mạ crôm, tái chế, tái tạo.
                            </p>
                            <p>
                                Ông Martens không phải là nhà thiết kế đầu tiên thử sức với nhiều
                                thương hiệu đồng thời (hiện tại Jonathan Anderson với JW Anderson và
                                Loewe và Raf Simons với thương hiệu của riêng mình và Prada là một
                                trong số những người thực hiện nghĩa vụ kép), nhưng ông có thể là
                                người đầu tiên nắm lấy những ngôi nhà có vẻ khác biệt như vậy để
                                được ca ngợi ngang nhau.
                            </p>
                            <p>
                                <img
                                    data-thumb="original"
                                    original-height={2048}
                                    original-width={1366}
                                    src="https://bizweb.dktcdn.net/100/423/358/files/nha-thiet-ke-vi-dai-nam-2022-2.jpg?v=1646493382770"
                                />
                            </p>
                            <p>
                                Xem chương trình Diesel “khiến tôi rơi nước mắt,” ông Rosso nói sau
                                đó.&nbsp;"Cách xử lý denim của anh ấy là điều mà chúng tôi chưa từng
                                thấy trước đây."
                            </p>
                            <p>Ông ấy, ông Tonchi nói, "không sợ bất cứ điều gì."</p>
                            <p>
                                Khi ông Martens được bổ nhiệm làm chủ tịch hội đồng giám khảo thời
                                trang cho ấn bản lần thứ 37 của Liên hoan nhiếp ảnh và thời trang
                                quốc tế Hyères, giải thưởng thời trang của Liên hoan phim Cannes, sự
                                biến đổi của ông từ thiên tài lập dị thành vận động viên đỉnh cao
                                trong ngành dường như đã hoàn tất.&nbsp;Nhưng bây giờ mọi người rốt
                                cuộc đang xem, hắn sẽ làm gì tiếp theo?
                            </p>
                            <p id="link-346345d4">Quá lạ, quá nhiều</p>
                            <p>
                                “Chúng tôi chưa bao giờ rao giảng rằng chúng tôi sẽ tạo ra những
                                hình bóng đẹp,” ông Martens, 38 tuổi, nói vài tuần trước buổi trình
                                diễn Diesel.&nbsp;“Rất nhiều việc chúng tôi làm là vì lợi ích của
                                việc đẩy giới hạn và rất nhiều người trước đây đã nói:“ Tại sao? ””
                                Anh ấy đang nói về Y / Project và Phóng to qua video từ văn phòng Y
                                / Project của anh ấy trong Paris.
                            </p>
                            <p>
                                Anh ta đang mặc bộ đồng phục quen thuộc của mình: một chiếc áo len
                                đen cũ mua từ một cửa hàng ở London, quần jean denim đen và một
                                chiếc mũ bóng chày bạc màu.&nbsp;Anh ta có hai sợi dây xích quanh
                                cổ, một chiếc khuyên tai ở tai và hai chiếc nhẫn trên ngón tay, và
                                anh ta đã cạo trọc một nửa.
                            </p>
                            <p>
                                Y / Project, anh ấy nói, “đã tồn tại trong rất nhiều năm để thực
                                hiện thiết kế thử nghiệm này và những thứ kỳ quặc và không ai quan
                                tâm.&nbsp;Nó quá kỳ lạ, tất cả là quá nhiều.&nbsp;Họ đã bị đột quỵ
                                sau cái nhìn thứ ba. "&nbsp;Ngay cả nhân viên, anh ấy nói, thường có
                                "một khoảnh khắc phù hợp khi chúng tôi xem xét thiết kế của mình và
                                suy nghĩ, 'Chúng tôi có nghiêm túc làm điều này không?'"
                            </p>
                            <p>
                                <img
                                    data-thumb="original"
                                    original-height={2048}
                                    original-width={1366}
                                    src="https://bizweb.dktcdn.net/100/423/358/files/nha-thiet-ke-vi-dai-nam-2022-3.jpg?v=1646493449646"
                                />
                            </p>
                        </div>
                    </div>
                    <form
                        method="post"
                        action="/posts/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022/comments"
                        id="article_comments"
                        acceptCharset="UTF-8"
                    >
                        <input name="FormType" type="hidden" defaultValue="article_comments" />
                        <input name="utf8" type="hidden" defaultValue="true" />
                        <input
                            type="hidden"
                            id="Token-dabf3d26f98b42669b13bad124858a7e"
                            name="Token"
                            defaultValue="03AFcWeA4dvrO-cOsslZkyE7NyEX4LH5UlvHNmrBdMM8idwsW4_Zbfkax0moDWuKCxsbhtz_TL80NxtC1uIo9r_6uV7sxj08xvN6F_IaPwb_b7WsqU5mS3E8CFWqCopmYBPrQ5naWfpLDaLcx2zap3hR1SJZILhsNKgykx6KYE3-SgnxmHMjqAHhQ0fIdMWpf6ZaKwdSR_iQ11N4Tb9fjqX6tGTKfQ7b_IeSocrwivS3J8SFNFurRr6IkXF6sLNg70NNoCH6ile2T06bXkY3tJxQ0Agov_F5xVtKR0kAynulLtyANbPY3gedQC6sTnQP-TdDoXziHotBRni9WoCoEVUsRULp4G2323LUSbFfzjQespiogS1-EQKqlHQqBTKPvtMuvX-YU7XYjUxCZ7syHmd5gspO2-fKZOpVYsa9p8O0FTdBb_GSlWIZHBFXydhjrcsF1JkA-GZ0tSeM2ttBdjaG0udpdFL74iKh98oMO8H47h3ARk_6CAAIARqpc_cHBYt9TtMezasqqG2D2obcFm299HV0BpDbhifq0cVItuPDQVs3HtqZ4uOmqhXujMlnKFSl_nyAB7EuKa0crgruAKCxn7hYQOJy_MCAG7nqX1rO354TqSO9z1-aal7Wix2ktQ1r9Cy9_vWfCehFkIbocGk7-n4OWH-v33vC9-11u_3YfUXAA9Kipj1vA"
                        />
                        <div className={cx("form-coment")}>
                            <div className={cx("margin-top-0", "w-100")}>
                                <h5 className={cx("title-form-coment")}>Viết bình luận của bạn</h5>
                            </div>
                            <div className={cx("form-row")}>
                                <div className={cx("user-info")}>
                                    <div className={cx("col-md-6", "col-12")}>
                                        <fieldset className={cx("form-group", "padding-0")}>
                                            <input
                                                placeholder="Họ và tên"
                                                type="text"
                                                className={cx("form-control", "form-control-lg")}
                                                defaultValue=""
                                                id="full-name"
                                                name="Author"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className={cx("col-md-6", "col-12")}>
                                        <fieldset className={cx("form-group", "padding-0")}>
                                            <input
                                                placeholder="Email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                type="email"
                                                className={cx("form-control", "form-control-lg")}
                                                defaultValue=""
                                                name="Email"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                </div>
                                <div className={cx("col-lg-12", "col-md-12", "col-sm-12", "col-xs-12")}>
                                    <textarea
                                        placeholder="Nội dung"
                                        className={cx("form-control", "form-control-lg")}
                                        id="comment"
                                        name="Body"
                                        rows={6}
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className={cx("col-lg-12", "col-md-12", "col-sm-12", "col-xs-12")}>
                                    <button type="submit" className={cx("btn", "btn-primary", "button_45")}>
                                        Gửi thông tin
                                    </button>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End form mail */}
                    </form>
                </div>
                <div className={cx("blog_left_base", "col-lg-3", "col-12", "order-lg-1")}>
                    <div className={cx("side-right-stick")}>
                        {/* <div className="aside-content aside-content-blog">
                            <div className="title-head">Danh mục</div>
                            <nav className="nav-category">
                                <ul className="nav navbar-pills">
                                    <li className="nav-item  relative">
                                        <a title="Nữ" href="/nu" className="nav-link pr-5">
                                            Nữ
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a title="Áo" className="nav-link pr-5" href="/ao">
                                                    Áo
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Len"
                                                            className="nav-link pl-4"
                                                            href="/ao-len"
                                                        >
                                                            Áo Len{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Thun"
                                                            className="nav-link pl-4"
                                                            href="/ao-thun"
                                                        >
                                                            Áo Thun{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Sơ Mi"
                                                            className="nav-link pl-4"
                                                            href="/ao-so-mi"
                                                        >
                                                            Áo Sơ Mi{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Cardigan"
                                                            className="nav-link pl-4"
                                                            href="/ao-cardigan"
                                                        >
                                                            Áo Cardigan{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a title="Quần" className="nav-link pr-5" href="/quan">
                                                    Quần
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Tây Nữ"
                                                            className="nav-link pl-4"
                                                            href="/quan-tay-nu"
                                                        >
                                                            Quần Tây Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Jean Nữ"
                                                            className="nav-link pl-4"
                                                            href="/quan-jean-nu"
                                                        >
                                                            Quần Jean Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Short Nữ"
                                                            className="nav-link pl-4"
                                                            href="/quan-short-nu"
                                                        >
                                                            Quần Short Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Leggings Nữ"
                                                            className="nav-link pl-4"
                                                            href="/quan-leggings-nu"
                                                        >
                                                            Quần Leggings Nữ{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a title="Váy" className="nav-link pr-5" href="/vay">
                                                    Váy
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Chân Váy Nữ"
                                                            className="nav-link pl-4"
                                                            href="/chan-vay-nu"
                                                        >
                                                            Chân Váy Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Váy Nữ"
                                                            className="nav-link pl-4"
                                                            href="/quan-vay-nu"
                                                        >
                                                            Quần Váy Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Váy Ngắn Nữ"
                                                            className="nav-link pl-4"
                                                            href="/vay-ngan-nu"
                                                        >
                                                            Váy Ngắn Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Váy Liền Thân"
                                                            className="nav-link pl-4"
                                                            href="/vay-lien-than"
                                                        >
                                                            Váy Liền Thân{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Mặc Trong"
                                                    className="nav-link pr-5"
                                                    href="/do-mac-trong"
                                                >
                                                    Đồ Mặc Trong
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Bra Tops"
                                                            className="nav-link pl-4"
                                                            href="/ao-bra-tops"
                                                        >
                                                            Áo Bra Tops{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Tất Lưới"
                                                            className="nav-link pl-4"
                                                            href="/quan-tat-luoi"
                                                        >
                                                            Quần Tất Lưới{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Con Size Lớn"
                                                            className="nav-link pl-4"
                                                            href="/quan-con-size-lon"
                                                        >
                                                            Quần Con Size Lớn{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Ngực Không Gọng"
                                                            className="nav-link pl-4"
                                                            href="/ao-nguc-khong-gong"
                                                        >
                                                            Áo Ngực Không Gọng{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Mặc Nhà"
                                                    className="nav-link pr-5"
                                                    href="/do-mac-nha"
                                                >
                                                    Đồ Mặc Nhà
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Pyjama Nữ"
                                                            className="nav-link pl-4"
                                                            href="/do-pyjama-nu"
                                                        >
                                                            Đồ Pyjama Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Relaco"
                                                            className="nav-link pl-4"
                                                            href="/do-relaco"
                                                        >
                                                            Đồ Relaco{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Bộ Giường Ngủ"
                                                            className="nav-link pl-4"
                                                            href="/bo-giuong-ngu"
                                                        >
                                                            Bộ Giường Ngủ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Dép Đi Trong Nhà"
                                                            className="nav-link pl-4"
                                                            href="/dep-di-trong-nha"
                                                        >
                                                            Dép Đi Trong Nhà{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Phụ Kiện"
                                                    className="nav-link pr-5"
                                                    href="/phu-kien"
                                                >
                                                    Phụ Kiện
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Túi Xách Nữ"
                                                            className="nav-link pl-4"
                                                            href="/tui-xach-nu"
                                                        >
                                                            Túi Xách Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồng Hồ Nữ"
                                                            className="nav-link pl-4"
                                                            href="/dong-ho-nu"
                                                        >
                                                            Đồng Hồ Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Bông Tai Nữ"
                                                            className="nav-link pl-4"
                                                            href="/bong-tai-nu"
                                                        >
                                                            Bông Tai Nữ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Tất Cả Phụ Kiện"
                                                            className="nav-link pl-4"
                                                            href="/tat-ca-phu-kien"
                                                        >
                                                            Tất Cả Phụ Kiện{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đầm Và Jumpsuit"
                                                    className="nav-link pr-5"
                                                    href="/"
                                                >
                                                    Đầm Và Jumpsuit
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đầm Dạ Hội"
                                                            className="nav-link pl-4"
                                                            href="/dam-da-hoi"
                                                        >
                                                            Đầm Dạ Hội{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đầm Xòe Trễ Vai"
                                                            className="nav-link pl-4"
                                                            href="/dam-xoe-tre-vai"
                                                        >
                                                            Đầm Xòe Trễ Vai{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đầm Và Jumpsuit"
                                                            className="nav-link pl-4"
                                                            href="/dam-va-jumpsuit"
                                                        >
                                                            Đầm Và Jumpsuit{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Bộ Nữ"
                                                    className="nav-link pr-5"
                                                    href="/do-bo-nu"
                                                >
                                                    Đồ Bộ Nữ
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Bộ Mặc Nhà"
                                                            className="nav-link pl-4"
                                                            href="/do-bo-mac-nha"
                                                        >
                                                            Đồ Bộ Mặc Nhà{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Bộ Đi Chơi"
                                                            className="nav-link pl-4"
                                                            href="/do-bo-di-choi"
                                                        >
                                                            Đồ Bộ Đi Chơi{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  relative">
                                        <a title="Nam" href="/nam" className="nav-link pr-5">
                                            Nam
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a title="Áo" className="nav-link pr-5" href="/ao">
                                                    Áo
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Thun"
                                                            className="nav-link pl-4"
                                                            href="/ao-thun"
                                                        >
                                                            Áo Thun{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Polo"
                                                            className="nav-link pl-4"
                                                            href="/ao-polo"
                                                        >
                                                            Áo Polo{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Sơ Mi"
                                                            className="nav-link pl-4"
                                                            href="/ao-so-mi"
                                                        >
                                                            Áo Sơ Mi{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Ba Lỗ"
                                                            className="nav-link pl-4"
                                                            href="/ao-ba-lo"
                                                        >
                                                            Áo Ba Lỗ{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a title="Quần" className="nav-link pr-5" href="/quan">
                                                    Quần
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Tây Nam"
                                                            className="nav-link pl-4"
                                                            href="/quan-tay-nam"
                                                        >
                                                            Quần Tây Nam{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Kaki Nam"
                                                            className="nav-link pl-4"
                                                            href="/quan-kaki-nam"
                                                        >
                                                            Quần Kaki Nam{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Short Nam"
                                                            className="nav-link pl-4"
                                                            href="/quan-short-nam"
                                                        >
                                                            Quần Short Nam{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Thể Thao Nam"
                                                            className="nav-link pl-4"
                                                            href="/quan-the-thao-nam"
                                                        >
                                                            Quần Thể Thao Nam{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Mặc Ngoài"
                                                    className="nav-link pr-5"
                                                    href="/do-mac-ngoai"
                                                >
                                                    Đồ Mặc Ngoài
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Khoác (Coat)"
                                                            className="nav-link pl-4"
                                                            href="/ao-khoac-coat"
                                                        >
                                                            Áo Khoác (Coat){" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Khoác (Jacket)"
                                                            className="nav-link pl-4"
                                                            href="/ao-khoac-jacket"
                                                        >
                                                            Áo Khoác (Jacket){" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Blouson & Hoodie"
                                                            className="nav-link pl-4"
                                                            href="/ao-blouson-hoodie"
                                                        >
                                                            Áo Blouson &amp; Hoodie{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Khoác Siêu Nhẹ"
                                                            className="nav-link pl-4"
                                                            href="/ao-khoac-sieu-nhe"
                                                        >
                                                            Áo Khoác Siêu Nhẹ{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Mặc Trong"
                                                    className="nav-link pr-5"
                                                    href="/do-mac-trong"
                                                >
                                                    Đồ Mặc Trong
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Lót"
                                                            className="nav-link pl-4"
                                                            href="/do-lot"
                                                        >
                                                            Đồ Lót{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="AIRism"
                                                            className="nav-link pl-4"
                                                            href="/airism"
                                                        >
                                                            AIRism{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Mặc Trong"
                                                            className="nav-link pl-4"
                                                            href="/ao-mac-trong"
                                                        >
                                                            Áo Mặc Trong{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Leggings Và Quần Tất"
                                                            className="nav-link pl-4"
                                                            href="/quan-leggings-va-quan-tat"
                                                        >
                                                            Quần Leggings Và Quần Tất{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Mặc Nhà"
                                                    className="nav-link pr-5"
                                                    href="/do-mac-nha"
                                                >
                                                    Đồ Mặc Nhà
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Ngủ"
                                                            className="nav-link pl-4"
                                                            href="/do-ngu"
                                                        >
                                                            Đồ Ngủ{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đồ Pyjama"
                                                            className="nav-link pl-4"
                                                            href="/do-pyjama"
                                                        >
                                                            Đồ Pyjama{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Chino"
                                                            className="nav-link pl-4"
                                                            href="/quan-chino"
                                                        >
                                                            Quần Chino{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Dài Đến Mắt Cá"
                                                            className="nav-link pl-4"
                                                            href="/quan-dai-den-mat-ca"
                                                        >
                                                            Quần Dài Đến Mắt Cá{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Phụ Kiện Nam"
                                                    className="nav-link pr-5"
                                                    href="/phu-kien-nam"
                                                >
                                                    Phụ Kiện Nam
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Ví - Bóp"
                                                            className="nav-link pl-4"
                                                            href="/vi-bop"
                                                        >
                                                            Ví - Bóp{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Mắt Kính"
                                                            className="nav-link pl-4"
                                                            href="/mat-kinh"
                                                        >
                                                            Mắt Kính{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Vòng Tay"
                                                            className="nav-link pl-4"
                                                            href="/vong-tay"
                                                        >
                                                            Vòng Tay{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Khẩu Trang AIRism"
                                                            className="nav-link pl-4"
                                                            href="/khau-trang-airism"
                                                        >
                                                            Khẩu Trang AIRism{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  relative">
                                        <a title="Trẻ Em" href="/tre-em" className="nav-link pr-5">
                                            Trẻ Em
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Áo Trẻ Em"
                                                    className="nav-link pr-5"
                                                    href="/ao-tre-em"
                                                >
                                                    Áo Trẻ Em
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Thun Trẻ Em"
                                                            className="nav-link pl-4"
                                                            href="/ao-thun-tre-em"
                                                        >
                                                            Áo Thun Trẻ Em{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Sơ Mi"
                                                            className="nav-link pl-4"
                                                            href="/ao-so-mi"
                                                        >
                                                            Áo Sơ Mi{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Kiểu Họa Tiết"
                                                            className="nav-link pl-4"
                                                            href="/ao-kieu-hoa-tiet"
                                                        >
                                                            Áo Kiểu Họa Tiết{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Thun Hoạt Hình"
                                                            className="nav-link pl-4"
                                                            href="/ao-thun-hoat-hinh"
                                                        >
                                                            Áo Thun Hoạt Hình{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Quần Trẻ Em"
                                                    className="nav-link pr-5"
                                                    href="/quan-tre-em"
                                                >
                                                    Quần Trẻ Em
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Dài"
                                                            className="nav-link pl-4"
                                                            href="/quan-dai"
                                                        >
                                                            Quần Dài{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Short"
                                                            className="nav-link pl-4"
                                                            href="/quan-short-1"
                                                        >
                                                            Quần Short{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Đầm Xòe"
                                                            className="nav-link pl-4"
                                                            href="/dam-xoe"
                                                        >
                                                            Đầm Xòe{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Chân Váy"
                                                            className="nav-link pl-4"
                                                            href="/chan-vay"
                                                        >
                                                            Chân Váy{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Đồ Lót Trẻ Em"
                                                    className="nav-link pr-5"
                                                    href="/do-lot-tre-em"
                                                >
                                                    Đồ Lót Trẻ Em
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Short"
                                                            className="nav-link pl-4"
                                                            href="/quan-short-1"
                                                        >
                                                            Quần Short{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Lót Trẻ Em"
                                                            className="nav-link pl-4"
                                                            href="/ao-lot-tre-em"
                                                        >
                                                            Áo Lót Trẻ Em{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Quần Lót Trẻ Em"
                                                            className="nav-link pl-4"
                                                            href="/quan-lot-tre-em"
                                                        >
                                                            Quần Lót Trẻ Em{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Áo Mặc Trong Cài Trước"
                                                            className="nav-link pl-4"
                                                            href="/ao-mac-trong-cai-truoc"
                                                        >
                                                            Áo Mặc Trong Cài Trước{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu nav-item  relative">
                                                <a
                                                    title="Phụ Kiện Trẻ Em"
                                                    className="nav-link pr-5"
                                                    href="/phu-kien-tre-em"
                                                >
                                                    Phụ Kiện Trẻ Em
                                                </a>
                                                <i className="open_mnu down_icon" />
                                                <ul className="menu_down" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Kính Mắt"
                                                            className="nav-link pl-4"
                                                            href="/kinh-mat"
                                                        >
                                                            Kính Mắt{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Khẩu Trang"
                                                            className="nav-link pl-4"
                                                            href="/khau-trang"
                                                        >
                                                            Khẩu Trang{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Túi Đeo"
                                                            className="nav-link pl-4"
                                                            href="/tui-deo"
                                                        >
                                                            Túi Đeo{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            title="Nón Bảo Hiểm"
                                                            className="nav-link pl-4"
                                                            href="/non-bao-hiem"
                                                        >
                                                            Nón Bảo Hiểm{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  relative">
                                        <a
                                            title="Thời Trang Nam"
                                            href="/thoi-trang-nam"
                                            className="nav-link pr-5"
                                        >
                                            Thời Trang Nam
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="nav-item">
                                                <a title="Áo Thun" className="nav-link" href="/ao-thun">
                                                    Áo Thun
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a title="Áo Sơ Mi" className="nav-link" href="/ao-so-mi">
                                                    Áo Sơ Mi
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    title="Quần jeans"
                                                    className="nav-link"
                                                    href="/quan-jeans"
                                                >
                                                    Quần jeans
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    title="Đồ thể thao"
                                                    className="nav-link"
                                                    href="/do-the-thao"
                                                >
                                                    Đồ thể thao
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  relative">
                                        <a
                                            title="Thời Trang Nữ"
                                            href="/thoi-trang-nu"
                                            className="nav-link pr-5"
                                        >
                                            Thời Trang Nữ
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="nav-item">
                                                <a title="Đầm" className="nav-link" href="/dam">
                                                    Đầm
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a title="Váy" className="nav-link" href="/vay">
                                                    Váy
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a title="Đồ Bộ" className="nav-link" href="/do-bo">
                                                    Đồ Bộ
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a title="Đồ Ngủ" className="nav-link" href="/do-ngu">
                                                    Đồ Ngủ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  relative">
                                        <a
                                            title="Thời Trang Trẻ Em"
                                            href="/thoi-trang-tre-em"
                                            className="nav-link pr-5"
                                        >
                                            Thời Trang Trẻ Em
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="nav-item">
                                                <a
                                                    title="Đồ Sơ Sinh"
                                                    className="nav-link"
                                                    href="/do-so-sinh"
                                                >
                                                    Đồ Sơ Sinh
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    title="Đồ Bé Trai"
                                                    className="nav-link"
                                                    href="/do-be-trai"
                                                >
                                                    Đồ Bé Trai
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a title="Đồ Bé Gái" className="nav-link" href="/do-be-gai">
                                                    Đồ Bé Gái
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  relative">
                                        <a
                                            title="Thời Trang Tập Gym"
                                            href="/thoi-trang-tap-gym"
                                            className="nav-link pr-5"
                                        >
                                            Thời Trang Tập Gym
                                        </a>
                                        <i className="open_mnu down_icon" />
                                        <ul className="menu_down" style={{ display: "none" }}>
                                            <li className="nav-item">
                                                <a
                                                    title="Áo Tập Gym"
                                                    className="nav-link"
                                                    href="/ao-tap-gym"
                                                >
                                                    Áo Tập Gym
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    title="Quần Tập Gym"
                                                    className="nav-link"
                                                    href="/quan-tap-gym"
                                                >
                                                    Quần Tập Gym
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    title="Đồ Bộ Tập Gym"
                                                    className="nav-link"
                                                    href="/do-bo-tap-gym"
                                                >
                                                    Đồ Bộ Tập Gym
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="blog_tags">
                            <div className="title-head">Tags</div>
                            <ul className="list-tags">
                                <li className="item_tag">
                                    <a href="/tin-tuc/anna-zhou" title="Anna Zhou">
                                        Anna Zhou
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/denim" title="Denim">
                                        Denim
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/duong-pho" title="Đường phố">
                                        Đường phố
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/mua-thu-2022" title="Mùa thu 2022">
                                        Mùa thu 2022
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/nam-2022" title="Năm 2022">
                                        Năm 2022
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/nha-thiet-ke" title="Nhà thiết kế">
                                        Nhà thiết kế
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/phong-cach" title="Phong cách">
                                        Phong cách
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/quan-au" title="Quần âu">
                                        Quần âu
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/thoi-trang" title="Thời trang">
                                        Thời trang
                                    </a>
                                </li>
                                <li className="item_tag">
                                    <a href="/tin-tuc/thoi-trang-nu" title="Thời trang nữ">
                                        Thời trang nữ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="blog_noibat">
                            <h2 className="h2_sidebar_blog">
                                <a href="/blogs/all" title="Tin tức nổi bật">
                                    Tin tức nổi bật
                                </a>
                            </h2>
                            <div className="blog_content">
                                <div className="item clearfix">
                                    <div className="post-thumb">
                                        <a
                                            className="image-blog scale_hover"
                                            href="/4-kieu-trang-phuc-denim-dang-hot-nhat-hack-moi-do-tuoi-cho-cac-nang"
                                            title="4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng"
                                        >
                                            <img
                                                className="img_blog lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/451/884/articles/4-kieu-trang-phuc-demin-hot-nhat.jpg?v=1649173718847"
                                                data-src="https://bizweb.dktcdn.net/100/451/884/articles/4-kieu-trang-phuc-demin-hot-nhat.jpg?v=1649173718847"
                                                alt="4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng"
                                                data-was-processed="true"
                                            />
                                        </a>
                                    </div>
                                    <div className="contentright">
                                        <h3>
                                            <a
                                                title="4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng"
                                                href="/4-kieu-trang-phuc-denim-dang-hot-nhat-hack-moi-do-tuoi-cho-cac-nang"
                                            >
                                                4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho
                                                các nàng
                                            </a>
                                        </h3>
                                        <p className="time-post">
                                            <span>05/04/2022</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="item clearfix">
                                    <div className="post-thumb">
                                        <a
                                            className="image-blog scale_hover"
                                            href="/meo-mac-quan-au-dinh-cho-cac-nang-de-xinh-nhu-gai-phap-mix-chuan-tinh-te"
                                            title="Mẹo mặc quần âu đỉnh cho các nàng để xinh như gái Pháp mix chuẩn tinh tế"
                                        >
                                            <img
                                                className="img_blog lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/451/884/articles/meo-mac-quan-tay-dinh-cho-cac-nang.jpg?v=1649173643080"
                                                data-src="https://bizweb.dktcdn.net/100/451/884/articles/meo-mac-quan-tay-dinh-cho-cac-nang.jpg?v=1649173643080"
                                                alt="Mẹo mặc quần âu đỉnh cho các nàng để xinh như gái Pháp mix chuẩn tinh tế"
                                                data-was-processed="true"
                                            />
                                        </a>
                                    </div>
                                    <div className="contentright">
                                        <h3>
                                            <a
                                                title="Mẹo mặc quần âu đỉnh cho các nàng để xinh như gái Pháp mix chuẩn tinh tế"
                                                href="/meo-mac-quan-au-dinh-cho-cac-nang-de-xinh-nhu-gai-phap-mix-chuan-tinh-te"
                                            >
                                                Mẹo mặc quần âu đỉnh cho các nàng để xinh như gái Pháp mix
                                                chuẩn tinh tế
                                            </a>
                                        </h3>
                                        <p className="time-post">
                                            <span>05/04/2022</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="item clearfix">
                                    <div className="post-thumb">
                                        <a
                                            className="image-blog scale_hover"
                                            href="/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022"
                                            title="Nhà thiết kế vĩ đại đầu tiên của năm 2022"
                                        >
                                            <img
                                                className="img_blog lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953"
                                                data-src="https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953"
                                                alt="Nhà thiết kế vĩ đại đầu tiên của năm 2022"
                                                data-was-processed="true"
                                            />
                                        </a>
                                    </div>
                                    <div className="contentright">
                                        <h3>
                                            <a
                                                title="Nhà thiết kế vĩ đại đầu tiên của năm 2022"
                                                href="/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022"
                                            >
                                                Nhà thiết kế vĩ đại đầu tiên của năm 2022
                                            </a>
                                        </h3>
                                        <p className="time-post">
                                            <span>05/04/2022</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="item clearfix">
                                    <div className="post-thumb">
                                        <a
                                            className="image-blog scale_hover"
                                            href="/anna-zhou-mang-phong-cach-cua-minh-voi-tu-cach-la-mot-thi-sinh-tren-project-runway"
                                            title="Anna Zhou mang phong cách của mình với tư cách là một thí sinh trên Project Runway"
                                        >
                                            <img
                                                className="img_blog lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/451/884/articles/phong-cach-thoi-trang-bi-an-title.jpg?v=1649173363687"
                                                data-src="https://bizweb.dktcdn.net/100/451/884/articles/phong-cach-thoi-trang-bi-an-title.jpg?v=1649173363687"
                                                alt="Anna Zhou mang phong cách của mình với tư cách là một thí sinh trên Project Runway"
                                                data-was-processed="true"
                                            />
                                        </a>
                                    </div>
                                    <div className="contentright">
                                        <h3>
                                            <a
                                                title="Anna Zhou mang phong cách của mình với tư cách là một thí sinh trên Project Runway"
                                                href="/anna-zhou-mang-phong-cach-cua-minh-voi-tu-cach-la-mot-thi-sinh-tren-project-runway"
                                            >
                                                Anna Zhou mang phong cách của mình với tư cách là một thí
                                                sinh trên Project Runway
                                            </a>
                                        </h3>
                                        <p className="time-post">
                                            <span>05/04/2022</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="item clearfix">
                                    <div className="post-thumb">
                                        <a
                                            className="image-blog scale_hover"
                                            href="/nhung-phong-cach-duong-pho-dep-nhat-tu-tuan-le-thoi-trang-mua-thu-2022"
                                            title="Những phong cách đường phố đẹp nhất từ ​​tuần lễ thời trang mùa thu 2022"
                                        >
                                            <img
                                                className="img_blog lazyload loaded"
                                                src="https://bizweb.dktcdn.net/100/451/884/articles/taipei-fall-2022-rtw-street-styl-min.jpg?v=1649173314867"
                                                data-src="https://bizweb.dktcdn.net/100/451/884/articles/taipei-fall-2022-rtw-street-styl-min.jpg?v=1649173314867"
                                                alt="Những phong cách đường phố đẹp nhất từ ​​tuần lễ thời trang mùa thu 2022"
                                                data-was-processed="true"
                                            />
                                        </a>
                                    </div>
                                    <div className="contentright">
                                        <h3>
                                            <a
                                                title="Những phong cách đường phố đẹp nhất từ ​​tuần lễ thời trang mùa thu 2022"
                                                href="/nhung-phong-cach-duong-pho-dep-nhat-tu-tuan-le-thoi-trang-mua-thu-2022"
                                            >
                                                Những phong cách đường phố đẹp nhất từ ​​tuần lễ thời trang
                                                mùa thu 2022
                                            </a>
                                        </h3>
                                        <p className="time-post">
                                            <span>05/04/2022</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <Category />
                        <Tags />
                        <HotNews />
                    </div>
                </div>
            </div>
        </article>

    )
}