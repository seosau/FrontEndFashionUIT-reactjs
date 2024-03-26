import React from 'react';
import style from "./NewsCard.module.scss";
import classNames from 'classnames/bind';

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

export default function NewsCard({props}) { 
    return (
        <div className={cx("row")}>
            <div className={cx("item-blog")}>
                <div className={cx("block-thumb")}>
                    <a
                        className={cx("thumb ")}
                        href= {props.href}
                        title= {props.title}
                    >
                        <img
                            // width={320}
                            width={320}
                            height={240}
                            // className={cx("lazyload loaded")}
                            className={cx("lazyload")}
                            src= {props.imgSrc}
                            data-src= {props.imgSrc}
                            alt= {props.title}
                            data-was-processed="true"
                        />
                    </a>
                </div>
                <div className={cx("block-content")}>
                    <h3>
                        <a
                            href= {props.href}
                            title= {props.title}
                        >
                            {props.title}
                        </a>
                    </h3>
                    <p className={cx("time-post")}>
                        <span>{props.postTime}</span>
                    </p>
                    <p className={cx("justify")}>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>

    )
}
