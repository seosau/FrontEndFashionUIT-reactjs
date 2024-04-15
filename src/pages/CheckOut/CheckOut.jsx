import style from "./CheckOut.module.scss";
import className from "classnames/bind";
import { RiLogoutBoxRLine } from "react-icons/ri";
import React, { useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const cx = className.bind(style);

function CheckOut() {
  const data = {
    provinces: [
      { id: 1, name: "Hồ Chí Minh" },
      { id: 2, name: "Hà Nội" },
      { id: 3, name: "Bình Dương" },
      { id: 4, name: "Cần Thơ" },
      { id: 5, name: "Đà Nẵng" },
      // Các tỉnh khác...
    ],
    districts: [
      { id: 1, provinceId: 1, name: "Quận 10" },
      { id: 2, provinceId: 2, name: "Quận Ba Đình" },
      { id: 3, provinceId: 2, name: "Quận Cầu Giấy" },
      { id: 4, provinceId: 2, name: "Quận Hà Đông" },
      { id: 5, provinceId: 3, name: "Quận Thủ Dầu Một" },
      { id: 6, provinceId: 4, name: "Quận Ninh Kiều" },
      { id: 7, provinceId: 5, name: "Quận Hải Châu" },

      // Các quận khác...
    ],
    towns: [
      { id: 1, districtId: 1, name: "Phường 15" },
      { id: 2, districtId: 2, name: "Phường Liễu Giai" },
      { id: 3, districtId: 3, name: "Phường Nghĩa Tân" },
      { id: 4, districtId: 3, name: "Phường Trung Hoà" },
      { id: 5, districtId: 4, name: "Phường Văn Quán" },
      { id: 6, districtId: 5, name: "Phường Phú Thọ" },
      { id: 7, districtId: 6, name: "Phường An Khánh" },
      { id: 8, districtId: 7, name: "Phường Hoà Cường Nam" },
      // Các xã khác...
    ],
  };
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTown, setSelectedTown] = useState("");

  const handleProvinceChange = (event) => {
    const provinceId = event.target.value;
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
    setSelectedTown("");
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setSelectedDistrict(districtId);
    setSelectedTown("");
  };

  const handleTownChange = (event) => {
    const townId = event.target.value;
    setSelectedTown(townId);
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("logo-title")}>
            <button className={cx("logo-button")}>
              <div className={cx("logo")}>
                <img
                  className={cx("header__img")}
                  src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/logo.png?1706504358658"
                  alt="logo"
                />
              </div>
            </button>
          </div>
          <div className={cx("info")}>
            <div className={cx("order-info")}>
              <div className={cx("order-info-title")}>
                <h3>Thông tin nhận hàng</h3>
                <div className={cx("account-status")}>
                  <div className={cx("logout-button")}>
                    <button className={cx("btn-logout")}>
                      <div className={cx("logout-icon")}>
                        <RiLogoutBoxRLine />
                      </div>
                      <div className={cx("logout-text")}>Đăng xuất</div>
                    </button>
                  </div>
                </div>
              </div>

              <div className={cx("select-content")}>
                <div className={cx("address")}>
                  <div className={cx("small-title")}>Sổ địa chỉ</div>
                  <div className={cx("select-address")}>
                    <select value={"Địa chỉ khác"}>
                      <option>Địa chỉ khác...</option>
                    </select>
                  </div>
                </div>

                <div className={cx("email")}>
                  <div className={cx("small-title")}>Email</div>
                  <div className={cx("select-email")}>
                    <input
                      type="email"
                      value={"abc@gmail.com"}
                      disabled
                    ></input>
                  </div>
                </div>

                <div className={cx("name")}>
                  <div className={cx("small-title")}>Họ và tên</div>
                  <div className={cx("select-name")}>
                    <input type="text" value={"Nguyen Van A"}></input>
                  </div>
                </div>

                <div className={cx("phonenumber")}>
                  <div className={cx("small-title")}>Số điện thoại</div>
                  <div className={cx("select-name")}>
                    <input
                      type="text"
                      placeholder={"Số điện thoại (tuỳ chọn)"}
                    ></input>
                  </div>
                </div>

                <div className={cx("detail-address")}>
                  <div className={cx("small-title")}>Địa chỉ</div>
                  <div className={cx("select-detail-address")}>
                    <input
                      type="text"
                      placeholder={"Địa chỉ (tuỳ chọn)"}
                    ></input>
                  </div>
                </div>

                <div className={cx("select-province")}>
                  <div className={cx("small-title")}>Tỉnh thành</div>
                  <div className={cx("province")}>
                    <select
                      value={selectedProvince}
                      onChange={handleProvinceChange}
                    >
                      <option value={""}>Chọn tỉnh thành</option>
                      {data.provinces.map((province) => (
                        <option key={province.id} value={province.id}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={cx("select-district")}>
                  <div className={cx("small-title")}>Quận / Huyện</div>
                  <div className={cx("district")}>
                    <select
                      value={selectedDistrict}
                      onChange={handleDistrictChange}
                    >
                      <option value={""}>Chọn quận/huyện (tuỳ chọn)</option>
                      {data.districts
                        .filter(
                          (district) =>
                            district.provinceId === Number(selectedProvince)
                        )
                        .map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className={cx("select-town")}>
                  <div className={cx("small-title")}>Phường / Xã</div>
                  <div className={cx("town")}>
                    <select value={selectedTown} onChange={handleTownChange}>
                      <option value={""}>Chọn phường xã (tuỳ chọn)</option>
                      {data.towns
                        .filter(
                          (town) => town.districtId === Number(selectedDistrict)
                        )
                        .map((town) => (
                          <option key={town.id} value={town.id}>
                            {town.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className={cx("note")}>
                  <div className={cx("small-title")}>Ghi chú</div>
                  <div className={cx("select-note")}>
                    <textarea name="note"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("transfer-checkout")}>
              <div className={cx("transfer-title")}>
                <h3>Vận chuyển</h3>
              </div>

              <div className={cx("info-status")}>
                <div className={cx("alert")}>
                  Vui lòng nhập thông tin giao hàng
                </div>
              </div>

              <div className={cx("checkout-title")}>
                <h3>Thanh toán</h3>
              </div>

              <div className={cx("checkout-option")}>
                <input type="radio"></input>
                <div className={cx("option-text")}>
                  Thanh toán khi giao hàng (COD)
                </div>
                <div className={cx("option-icon")}>
                  <FaRegMoneyBillAlt size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("checkout-side")}>
          <div className={cx("quantity")}>
            <h3>Đơn hàng (1 sản phẩm)</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
