import React from 'react';
import style from "./NewsCard.module.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

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
