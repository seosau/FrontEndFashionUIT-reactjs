import { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { TbEdit } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import axiosClient from "../../../config/axios";
import { useDebounce } from "../../../hooks";
import { Dropdown } from "primereact/dropdown";
import style from "./ListOrders.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function ListOrders() {
  const navigate = useNavigate();
  // orders
  const [orders, setOrders] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  // loading
  const [loading, setLoading] = useState(false);
  // search
  const [searchValue, setSearchValue] = useState("");
  const [userId, setUserId] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const debounced = useDebounce(searchValue, 500);
  const debouncedUserId = useDebounce(userId, 500);

  const inputRef = useRef();
  const handleClear = () => {
    setSearchValue("");
    setUserId("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  const handleChangeUser = (e) => {
    const userId = e.target.value;
    if (!userId.startsWith(" ")) {
      setUserId(userId);
    }
  };
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1);
  };
  const fetchData = async () => {
    await axiosClient
      .get(`/admin/orders?page=${currentPage}&limit=${currentLimit}`)
      .then(({ data }) => {
        setOrders(data.data);
        setTotalPages(data.pagination.totalPages);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  useEffect(() => {
    if (!debounced.trim()) {
      fetchData();
    } else {
      const fetchApi = async () => {
        setLoading(true);
        await axiosClient
          .get(`/order/get/?orderId=${debounced}`)
          .then(({ data }) => {
            setOrders([data.order]);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchApi();
    }
  }, [debounced]);
  useEffect(() => {
    if (!debouncedUserId.trim()) {
      fetchData();
    } else {
      const fetchApi = async () => {
        setLoading(true);
        console.log(debouncedUserId);
        await axiosClient
          .get(`/admin/orders/search-by-user?page=${currentPage}&limit=${currentLimit}&userId=${debouncedUserId}`)
          .then(({ data }) => {
            console.log(data);
            setOrders(data.data);
            setTotalPages(data.pagination.totalPages);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchApi();
    }
  }, [debouncedUserId]);
  // utils
  const convertStringDate = (stringTime) => {
    var date = new Date(stringTime);
    var nam = date.getFullYear();
    var thang = date.getMonth() + 1;
    var ngay = date.getDate();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();
    const chuoiNgayThangNam = (ngay < 10 ? "0" : "") + ngay + "/" + (thang < 10 ? "0" : "") + thang + "/" + nam;
    return {
      date: chuoiNgayThangNam,
      time: gio + "h" + phut + "m" + giay + "s",
    };
  };
  const deleteOrder = (order) => {
    setLoading(true);
    axiosClient
      .delete(`/admin/orders/delete?orderId=${order._id}`)
      .then(({ data }) => {
        fetchData();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [selectedState, setSelectedState] = useState(null);
  const [selectedIndex, setSeletedIndex] = useState(null);
  const handleChangeState = (value, order, index) => {
    setSeletedIndex(index);
    setSelectedState(value);
    console.log(value);
    console.log(order._id);
    setLoading(true);
    axiosClient
      .post(`/admin/orders/change-status`, { status: value, orderId: order._id })
      .then(({ data }) => {
        fetchData();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const states = ["Chờ xác nhận", "Đã xác nhận", "Đang vận chuyển", "Đã giao", "Đã hủy"];
  return (
    <div className={cx("addproduct__container")}>
      <div className={cx("addproduct__header")}>
        <h1 className={cx("addproduct__header-title")}>Danh sách đơn hàng</h1>
      </div>
      <div className={cx("addproduct__body")}>
        <div className={cx("addproduct__action")}>
          <div className={cx("action-search")}>
            <GoSearch className={cx("action-search-icon")} />
            <input type="text" className={cx("action-search-input")} placeholder="Mã đơn hàng..." onChange={handleChange} />
          </div>
          <div className={cx("action-search")}>
            <GoSearch className={cx("action-search-icon")} />
            <input type="text" className={cx("action-search-input")} placeholder="Mã khách hàng..." onChange={handleChangeUser} />
          </div>
        </div>
        <table className={cx("addproduct__table")}>
          <thead className={cx("table-head-list")}>
            <tr>
              <th className={cx("table-head-item")}>Mã đơn hàng</th>
              <th className={cx("table-head-item")}>Mã khách hàng</th>
              <th className={cx("table-head-item")}>Thời gian tạo</th>
              <th className={cx("table-head-item")}>Tổng tiền</th>
              <th className={cx("table-head-item")}>Tình trạng thanh toán</th>
              <th className={cx("table-head-item")}>Tình trạng đơn hàng</th>
              <th className={cx("table-head-item")}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx("table-body")}>
            {orders?.length > 0 ? (
              orders?.map((order, index) => {
                const statusValue = order?.status ? order?.status : "Chờ xác nhận";
                return (
                  <tr className={cx("order-item")} key={index}>
                    <td>
                      <div className={cx("order-info")}>
                        <div className={cx("order-info-detail")}>
                          <p className={cx("order-name")}>
                            <strong>{order?._id}</strong>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={cx("")}>
                      <strong>{order?.userId}</strong>
                    </td>
                    <td className={cx("order-time")}>
                      <p className={cx("order-date")}>
                        <strong>{convertStringDate(order?.updatedAt).date}</strong>
                      </p>
                      <span className={cx("order-time-detail")}>{convertStringDate(order?.updatedAt).time}</span>
                    </td>
                    <td className={cx("order-price")}>
                      {order?.totalPrice > 1000
                        ? Math.floor(order?.totalPrice / 1000) + "." + (order?.totalPrice % 1000 > 100 ? order?.totalPrice % 1000 : "0" + (order?.totalPrice % 1000))
                        : order?.totalPrice}
                      .000đ
                    </td>
                    <td className={cx("order-stock")}>
                      <p className={cx("order-stock-detail")} key={index}>
                        {order?.paid == true ? "Đã thanh toán" : "Chưa thanh toán"}
                      </p>
                    </td>

                    <td className={cx("order-status")}>
                      <div className={cx("order-status-container", order?.status === "Đã giao" ? "order-status-container-green" : order?.status === "Đã hủy" ? "order-status-container-red" : "")}>
                        <Dropdown
                          defaultValue={order?.status}
                          value={index == selectedIndex ? selectedState : order?.status}
                          onChange={(e) => handleChangeState(e.value, order, index)}
                          options={states}
                          placeholder="Tình trạng đơn hàng"
                          checkmark={true}
                          className="w-full md:w-14rem"
                        />
                      </div>
                    </td>
                    <td className={cx("order-action")}>
                      <ul className={cx("order-action-list")}>
                        <li onClick={() => deleteOrder(order)} className={cx("order-action-item")}>
                          <CiSquareRemove className={cx("icon", "icon-remove")} />
                          Remove
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Chưa có sản phẩm nào</div>
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 0 && (
        <div className={cx("paginations-container")}>
          <ReactPaginate
            nextLabel={<GrNext />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={totalPages}
            previousLabel={<GrPrevious />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
}

export default ListOrders;
