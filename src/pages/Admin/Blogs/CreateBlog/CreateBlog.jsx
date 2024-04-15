import { CiCircleRemove } from "react-icons/ci";
import style from "./CreateBlog.module.scss";
import className from "classnames/bind";
const cx = className.bind(style);
function CreateBlog() {
  return (
    <div className={cx("container")}>
      <form className={cx("formcontainer")}>
        <h2 className={cx("title")}>Biểu mẫu thêm tin tức</h2>
        <div className={cx("form-group")}>
          <label htmlFor="title" className={cx("form-label")}>
            Tiêu đề bài viết
          </label>
          <br />
          <input
            type="text"
            className={cx("form-control")}
            name="title"
            placeholder="Nhà thiết kế vĩ đại đầu tiên của năm 2022"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Mở bài
          </label>
          <br />
          <textarea
            type="text"
            className={cx("form-control")}
            name="opening"
            placeholder="Mở bài"
            rows={5}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Hình ảnh minh hoạ
          </label>
          <br />
          <input type="file" className={cx("form-control")} name="image" />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Thân Bài
          </label>
          <br />
          <textarea
            className={cx("form-control")}
            name="article-body"
            rows={5}
            placeholder="Thân bài"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Hình ảnh minh hoạ
          </label>
          <br />
          <input type="file" className={cx("form-control")} name="image" />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Kết Bài
          </label>
          <br />
          <textarea
            className={cx("form-control")}
            name="article-body"
            rows={5}
            placeholder="Kết bài"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="productname" className={cx("form-label")}>
            Hình ảnh minh hoạ
          </label>
          <br />
          <input type="file" className={cx("form-control")} name="image" />
        </div>
        <button className={cx("form-submit")}>Thêm bài viết</button>
      </form>
    </div>
  );
}

export default CreateBlog;
