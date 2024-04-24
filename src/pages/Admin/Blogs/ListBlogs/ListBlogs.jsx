import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci";
import axiosClient from "../../../../config/axios";
import style from "./ListBlogs.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/admin/blogs")
      .then(({ data }) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  const deleteProduct = (slug) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.slug !== slug));
    axiosClient
      .delete(`/admin/blog/delete/${slug}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={cx("listblogs__container")}>
      <h1 className={cx("title")}>Danh sách bài viết</h1>
      <table className={cx("table-product")}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Short Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 &&
            blogs.map((blog, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className={cx("product-name")}>{blog.title}</td>
                <td className={cx("product-desc")}>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  ></div>
                </td>
                <td className={cx("product-price")}>{blog.shortdesc}</td>
                <td>
                  <Link
                    className={cx("btn")}
                    to={`/admin/blog/edit/${blog.slug}`}
                  >
                    <TbEdit className={cx("icon", "icon-edit")} />
                  </Link>
                </td>
                <td>
                  <button className={cx("btn")}>
                    <CiSquareRemove
                      className={cx("icon", "icon-remove")}
                      onClick={() => deleteProduct(blog.slug)}
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListBlogs;
