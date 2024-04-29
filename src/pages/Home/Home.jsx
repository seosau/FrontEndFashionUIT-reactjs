import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Home.module.scss";
import className from "classnames/bind";
import axiosClient from "../../config/axios";
const cx = className.bind(styles);

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabProductIndex, setProductTabIndex] = useState(0);
  const [products, setProducts] = useState();
  const [bestSellerProducts, setBestSellerProducts] = useState();
  const [maleProducts, setMaleProducts] = useState();
  const [femaleProducts, setFemaleProducts] = useState();
  const [gymProducts, setGymProducts] = useState();
  const currentTime = new Date();

  const [width, setWidth] = useState(window.innerWidth);

  const getProducts = async () => {
    await axiosClient
      .get(`/products?page=${currentPage}&limit=${currentLimit}`)
      .then(({ data }) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(Number.MAX_SAFE_INTEGER);

  const getBestSellerProduct = () => {
    const productsCopy = [...products];
    const sortedProducts = productsCopy.sort((a, b) => b.sold - a.sold);
    setBestSellerProducts(sortedProducts.slice(0, 6));
  }

  const getMaleProducts = () => {
    const productsCopy = [...products];
    const tmpProducts = productsCopy.filter(product => product.category.sex.toLowerCase() === 'nam')
    setMaleProducts(tmpProducts);
  }

  const getFemaleProducts = () => {
    const productsCopy = [...products];
    const tmpProducts = productsCopy.filter(product => product.category.sex.toLowerCase() === 'nữ')
    setFemaleProducts(tmpProducts);
  }

  const getGymProducts = () => {
    const productsCopy = [...products];
    const tmpProducts = productsCopy.filter(product => product.category.categoryDetail.toLowerCase() === 'gym')
    setGymProducts(tmpProducts);
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    autoPlay: true,
    infinite: true,
    swipeable: true,
    draggable: true,
    interval: 3000,
    showArrows: true,
    swipeToSlide: true,
    transitionDuration: 500,
    verticalSwiping: false,
    width: "100%",
    showDots: true,
    renderDotsOutside: "renderButtonGroupOutside",
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 1,
        partialVisibilityGutter: 40,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 20,
      },
    },
  };

  const CustomDot = ({ onClick, active }) => (
    <button
      type="button"
      className={cx("custom-dot", active ? "custom-dot-active" : "")} // Sử dụng class CSS tùy chỉnh
      onClick={() => onClick()}
    />
  );

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (products) {
      getBestSellerProduct()
      getMaleProducts()
      getFemaleProducts()
      getGymProducts()
    }
  }, [products])

  useEffect(() => {
    if (currentTime.getHours() >= 0 && currentTime.getHours() < 6) {
      setTabIndex(0);
    } else if (currentTime.getHours() >= 6 && currentTime.getHours() < 12) {
      setTabIndex(1);
    } else if (currentTime.getHours() >= 12 && currentTime.getHours() < 20) {
      setTabIndex(2);
    } else if (currentTime.getHours() >= 20 && currentTime.getHours() < 24) {
      setTabIndex(3);
    }
  }, []);

  return (
    <main>
      <div className={cx("slider-container")}>
        <div className={cx("slideBox")}>
          <div className={cx("slider")}>
            <Carousel {...settings} customDot={<CustomDot />}>
              <div className={cx("imgBox")}>
                <img src={require("../../assets/image/slider_1.webp")} draggable={false} alt="slider" />
              </div>
              <div className={cx("imgBox")}>
                <img src={require("../../assets/image/banner2.jpg")} draggable={false} alt="slider" />
              </div>
              <div className={cx("imgBox")}>
                <img src={require("../../assets/image/banner3.webp")} draggable={false} alt="slider" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className={cx("service")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("box")}>
              <div className={cx("icon")}>
                <img src={require("../../assets/image/package.png")} alt="delivery" />
              </div>
              <div className={cx("detail")}>
                Vận chuyển <span>Miễn phí</span> <br />
                Trong khu vực <span>TP.HCM</span>
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("icon")}>
                <img src={require("../../assets/image/box.png")} alt="exchange" />
              </div>
              <div className={cx("detail")}>
                Đổi trả <span>Miễn phí</span> <br />
                Trong vòng <span>30 ngày</span>
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("icon")}>
                <img src={require("../../assets/image/credit-card.png")} alt="payment" />
              </div>
              <div className={cx("detail")}>
                Tiến hành <span>Thanh toán</span> <br />
                Với nhiều <span>Phương thức</span>
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("icon")}>
                <img src={require("../../assets/image/refund.png")} alt="refund" />
              </div>
              <div className={cx("detail")}>
                <span>100% hoàn tiền</span> <br />
                Nếu sản phẩm <span>Lỗi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={cx("product-features")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("title")}>
              <h2>
                <Link to="#" className={cx("no-underline")}>
                  Top <span>Bán Chạy</span>
                </Link>
              </h2>
            </div>
            <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} modules={[Navigation]} navigation>
              {products ? bestSellerProducts?.map((product, index) => (
                <SwiperSlide key={index} className={cx("product-container")}>
                  <Product product={product} ranking={index + 1} productCount={true} />
                </SwiperSlide>
              )) : <></>}
            </Swiper>
          </div>
        </div>
      </section>
      <section className={cx("flash-sale")} id="index-flash-sale">
        <div className={cx("container")}>
          <div className={cx("time-flash-sale")}>
            <div className={cx("clearfix")}>
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className={cx("tab-time-container", "box-container")}>
                  <TabList className={cx("timeline", "tab-title")}>
                    {[0, 1, 2, 3].map((index) => (
                      <Tab key={index} className={cx("tab-link", tabIndex === index ? "current" : "")}>
                        <div className={cx("title-time")}>
                          {index === 0 && "00:00 - 06:00"}
                          {index === 1 && "06:00 - 12:00"}
                          {index === 2 && "12:00 - 20:00"}
                          {index === 3 && "20:00 - 24:00"}
                        </div>
                        <div className={cx("text-timing")}>
                          {(index === 0 && currentTime.getHours() >= 0 && currentTime.getHours() < 6) ||
                            (index === 1 && currentTime.getHours() >= 6 && currentTime.getHours() < 12) ||
                            (index === 2 && currentTime.getHours() >= 12 && currentTime.getHours() < 20) ||
                            (index === 3 && currentTime.getHours() >= 20 && currentTime.getHours() < 24)
                            ? "Đang diễn ra"
                            : "Sắp diễn ra"}
                        </div>
                      </Tab>
                    ))}
                    <CountdownTimer />
                  </TabList>
                </div>

                {[0, 1, 2, 3].map((index) => (
                  <TabPanel key={index}>
                    <div className={cx("tab-products")}>
                      <div className={cx("tab-content", "tab-time", tabIndex === index ? "current" : "")}>
                        <div className={cx("box-container")}>
                          <Swiper spaceBetween={10} slidesPerView={width > 768 ? 5 : 2} modules={[Navigation]} navigation>
                            {[...Array(8).keys()].map((productIndex) => (
                              <SwiperSlide key={productIndex} className={cx("product-container")}>
                                <Product productCountSale={5} />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("banner")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("box")}>
              <div className={cx("snip-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_banner_1.webp")} alt="Men" />
                <div className={cx("content-banner")}>
                  <p>Men's</p>
                </div>
                <Link to="" className={cx("link")}></Link>
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("snip-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_banner_2.webp")} alt="Women" />
                <div className={cx("content-banner")}>
                  <p>Women's</p>
                </div>
                <Link to="" className={cx("link")}></Link>
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("snip-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_banner_3.webp")} alt="Kid" />
                <div className={cx("content-banner")}>
                  <p>Kid's</p>
                </div>
                <Link to="" className={cx("link")}></Link>
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("snip-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_banner_4.webp")} alt="Gym" />
                <div className={cx("content-banner")}>
                  <p>Gym's</p>
                </div>
                <Link to="" className={cx("link")}></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("trending")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("title")}>
              <h2>
                <Link to="#" className={cx("no-underline")}>
                  Thời trang <span>Xu Hướng</span>
                </Link>
              </h2>
            </div>
            <div className={cx("banner-tab-container")}>
              <div className={cx("banner-tab")}>
                <a className={cx("linear")}>
                  <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_banner_tab.webp")} alt="banner tab" />
                </a>
              </div>
            </div>
            <div className={cx("tab-products-container")}>
              <Tabs selectedIndex={tabProductIndex} onSelect={(index) => setProductTabIndex(index)}>
                <TabPanel>
                  <div className={cx("tab-products")}>
                    <div className={cx("tab-content", "tab-category", tabProductIndex === 0 ? "current" : "")}>
                      <div className={cx("box-container")}>
                        <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} modules={[Navigation]} navigation>
                          {products ? maleProducts?.map((product, index) => (
                            <SwiperSlide key={index} className={cx("product-container")}>
                              <Product product={product} />
                            </SwiperSlide>
                          )) : <></>}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={cx("tab-products")}>
                    <div className={cx("tab-content", "tab-category", tabProductIndex === 1 ? "current" : "")}>
                      <div className={cx("box-container")}>
                        <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} navigation modules={[Navigation]}>
                          {products ? femaleProducts?.map((product, index) => (
                            <SwiperSlide key={index} className={cx("product-container")}>
                              <Product product={product} />
                            </SwiperSlide>
                          )) : <></>}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={cx("tab-products")}>
                    <div className={cx("tab-content", "tab-category", tabProductIndex === 2 ? "current" : "")}>
                      <div className={cx("box-container")}>
                        <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} navigation modules={[Navigation]}>
                          {products ? gymProducts?.map((product, index) => (
                            <SwiperSlide key={index} className={cx("product-container")}>
                              <Product product={product} />
                            </SwiperSlide>
                          )) : <></>}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabList className={cx("categories", "clearfix")}>
                  <Tab className={cx("tab-link", "item", tabProductIndex === 0 ? "current" : "")}>
                    <div className={cx("img-icon")}>
                      <img className={cx("lazyload", "loaded")} src={require("../../assets/image/tab-nam.webp")} alt="tab nam" />
                    </div>
                    <p>
                      Thời trang Nam
                      <span>{products ? maleProducts?.length : 0} sản phẩm</span>
                    </p>
                  </Tab>
                  <Tab className={cx("tab-link", "item", tabProductIndex === 1 ? "current" : "")}>
                    <div className={cx("img-icon")}>
                      <img className={cx("lazyload", "loaded")} src={require("../../assets/image/tab-nu.webp")} alt="tab nu" />
                    </div>
                    <p>
                      Thời trang Nữ
                      <span>{products ? femaleProducts?.length : 0} sản phẩm</span>
                    </p>
                  </Tab>
                  <Tab className={cx("tab-link", "item", tabProductIndex === 2 ? "current" : "")}>
                    <div className={cx("img-icon")}>
                      <img className={cx("lazyload", "loaded")} src={require("../../assets/image/tab-gym.webp")} alt="tab gym" />
                    </div>
                    <p>
                      Thời trang Gym
                      <span>{products ? gymProducts?.length : 0} sản phẩm</span>
                    </p>
                  </Tab>
                </TabList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("lazyload", "big-sale")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("box")}>
              <Link to="">
                <img src={require("../../assets/image/img_banner_big.webp")} alt="banner big sale" className={cx("lazyload", "loaded", "img-animation")} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("product-features", "fashion-gyms")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("title")}>
              <h2>
                <Link to="#" className={cx("no-underline")}>
                  Thời trang <span>Gyms</span>
                </Link>
              </h2>
            </div>
            <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} navigation>
              {gymProducts?.map((product, index) => (
                <SwiperSlide key={index} className={cx("product-container")}>
                  <Product product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className={cx("three-banner")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("box")}>
              <div className={cx("one-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_3banner_1.webp")} alt="banner 1" />
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("one-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_3banner_2.webp")} alt="banner 2" />
              </div>
            </div>
            <div className={cx("box")}>
              <div className={cx("one-banner")}>
                <img className={cx("lazyload", "loaded")} src={require("../../assets/image/img_3banner_3.webp")} alt="banner 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("blog")}></section>
      <section className={cx("brand")}>
        <div className={cx("container")}>
          <div className={cx("box-container")}>
            <div className={cx("title")}>
              <h2>
                Bean <span>Instagram</span>
              </h2>
            </div>
            <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 3} modules={[Navigation]} navigation>
              {[...Array(6).keys()].map((productIndex) => (
                <SwiperSlide key={productIndex}>
                  <Link to="">
                    <img src={require(`../../assets/image/img_brand_${productIndex + 1}.webp`)} alt={`bean instagram ${productIndex + 1}`} className={cx("lazyload", "loaded")} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
