import className from "classnames/bind";
import style from "./Contact.module.scss";
import { IoIosArrowForward } from "react-icons/io";
const cx = className.bind(style);

function Contact() {
    return (
        <div className={cx("bodyWrap")}>
            <div className={cx("Breadcrumb")}>
                <div className={cx("container")}>
                    <ul className={cx("breadcrumb")}>
                        <li className={cx("home")}>
                            <a className={cx("textTrangChu")} href="/" title="Trang chủ">
                                <span>Trang chủ</span>
                            </a>
                            <div className={cx("rightArrow")}>
                                <IoIosArrowForward />
                            </div>
                        </li>
                        <li>
                            <div className={cx("textLienHe")}>
                                Liên hệ
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx("layoutContact")}>
                <div className={cx("textFormMap")}>
                    <div className={cx("textAndForm")}>
                        <div className={cx("contactInfo")}>
                            <div className={cx("infoTitle")}>
                                <b>NƠI GIẢI ĐÁP TOÀN BỘ MỌI THẮC MẮC CỦA BẠN?</b>
                            </div>
                            <div className={cx("infoQuote")}>
                                Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng
                                tôi luôn mang lại giá trị tốt nhất
                            </div>
                            <div className={cx("info")}>
                                <div className={cx("address")}>
                                    <b>Địa chỉ: </b>70 Lữ Gia, Phường 15, Quận 11,
                                    Thành phố Hồ Chí Minh
                                </div>
                                <div className={cx("hotline")}>
                                    <div><b>Hotline:</b></div>
                                    <div className={cx("phoneNumber")}>1900 6750</div>
                                </div>
                                <div className={cx("emailInfo")}>
                                    <div><b>Email: </b></div>
                                    <div className={cx("email")}>support@sapo.vn</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("formContact")}>
                            <div className={cx("formTitle")}>
                                <b>LIÊN HỆ VỚI CHÚNG TÔI</b>
                            </div>
                            <div className={cx("nameEmail")}>
                                <div className={cx("inputNameEmail")}>
                                    <input type="text" placeholder="Họ và tên" />
                                </div>
                                <div className={cx("inputNameEmail")}>
                                    <input type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div className={cx("inputPhone")}>
                                <input type="text" placeholder="Điện thoại" />
                            </div>
                            <div className={cx("inputContent")}>
                                <input type="text" placeholder="Nội dung" />
                            </div>
                            <div className={cx("submitInfo")}>
                                <button className={cx("buttonSubmit")} type="submit">Gửi thông tin</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("map")}>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416692!2d106.80047917465674!3d10.870008889284488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1711589812685!5m2!1svi!2s" width={650} height={450} allowfullscreen={""} loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;