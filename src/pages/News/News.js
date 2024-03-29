import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import style from "./News.module.scss";
import classNames from "classnames/bind";
import HotNews from "../../components/HotNews/HotNews";
import Category from "../../components/Category/Category";
import Tags from "../../components/Tags/Tags";

const cx = classNames.bind(style);

const data = [
    {
        title: 'Nhà thiết kế vĩ đại đầu tiên của năm 2022',
        href: "/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022",
        postTime: "05/04/2022",
        description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động, nơi được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần...",
        imgSrc: "https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953",
    },
    {
        title: 'Nhà thiết kế vĩ đại đầu tiên của năm 2022',
        href: "/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022",
        postTime: "05/04/2022",
        description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động, nơi được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần...",
        imgSrc: "https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953",
    },
    {
        title: 'Nhà thiết kế vĩ đại đầu tiên của năm 2022',
        href: "/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022",
        postTime: "05/04/2022",
        description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động, nơi được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần...",
        imgSrc: "https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953",
    },
    {
        title: 'Nhà thiết kế vĩ đại đầu tiên của năm 2022',
        href: "/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022",
        postTime: "05/04/2022",
        description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động, nơi được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần...",
        imgSrc: "https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953",
    },
    {
        title: 'Nhà thiết kế vĩ đại đầu tiên của năm 2022',
        href: "/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022",
        postTime: "05/04/2022",
        description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động, nơi được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần...",
        imgSrc: "https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953",
    },
    {
        title: 'Nhà thiết kế vĩ đại đầu tiên của năm 2022',
        href: "/nha-thiet-ke-vi-dai-dau-tien-cua-nam-2022",
        postTime: "05/04/2022",
        description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động, nơi được&nbsp;trang trí bằng những chiếc vỏ bom bằng vải denim bơm hơi khổng lồ và những con khỉ mỡ&nbsp;, đều đã đầy ắp.&nbsp;Một số người tham dự dường như đã đến thẳng từ sân bay.&nbsp;Tim Blanks, nhà phê bình của Business of Fashion, đã có mặt tại buổi trình diễn “lần...",
        imgSrc: "https://bizweb.dktcdn.net/100/451/884/articles/nha-thiet-ke-vi-dai-nam-2022.jpg?v=1649173565953",
    },
]

export default function NewsPage() {
    return (
        <div className={cx("container")}>
            <div className={cx("small-container")}>
                <div className={cx("news-side")}>
                    <h1 className={cx("title-page")}>Tin tức</h1>
                    <div className={cx("row")}>
                        {data.map((news) => (
                            <NewsCard props={news} />
                        ))}
                    </div>
                </div>
                <div className={cx("nav-side")}>
                    <Category />
                    <Tags />
                    <HotNews />
                </div>
            </div>
        </div>
    )
}