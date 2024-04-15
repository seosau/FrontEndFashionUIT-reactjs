import style from "./ChainStore.module.scss";
import className from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

const cx = className.bind(style);

function ChainStore() {
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
        <div className={cx("container")}>
          <ul className={cx("breadcrumb")}>
            <li className={cx("Home")}>
              <div className={cx("text1")}>
                <a className={cx("text3")} href="/" title="Trang chủ">
                  <span>Trang chủ</span>
                </a>
                <div className={cx("arrow")}>
                  <IoIosArrowForward />
                </div>
              </div>
            </li>
            <li className={cx("text2")}>
              <div>Hệ thống cửa hàng</div>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx("main")}>
        <div className={cx("side-bar")}>
          <div className={cx("province")}>
            <div className={cx("province-sort")}>
              <select value={selectedProvince} onChange={handleProvinceChange}>
                <option value={""}>Chọn tỉnh thành</option>
                {data.provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={cx("district")}>
            <div className={cx("district-sort")}>
              <select value={selectedDistrict} onChange={handleDistrictChange}>
                <option value={""}>Chọn quận/huyện</option>
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
          <div className={cx("town")}>
            <div className={cx("town-sort")}>
              <select value={selectedTown} onChange={handleTownChange}>
                <option value={""}>Chọn phường xã</option>
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
        </div>

        <div className={cx("content")}>
          <div className={cx("map")}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2309821348504!2d106.79999857451831!3d10.870028557461255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e7e8abb0eb%3A0xec43e4b99472c18a!2zVUlUIC0gQ-G7lW5nIEE!5e0!3m2!1svi!2s!4v1711957805181!5m2!1svi!2s"
              width={900}
              height={600}
              allowfullscreen={""}
              loading={"lazy"}
              referrerpolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChainStore;
