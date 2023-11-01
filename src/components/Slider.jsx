import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import WomenShoes from './WomenShoes';
import WomenApparels from './WomenApparels';
import Accessories from './Accessories';
import Beauty from './Beauty';

function Slider() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-4 mt-5 text-center justify-content-center fs-2">
        <Link class="blink" to="/sale">
          <b >Sale</b></Link>
        </div>
        <div className="col-8 mt-5">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div>
              <SwiperSlide>
                <Link class="" to="/sale">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2" to="/sale">
                    <h6>View All</h6>
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/Blog_IMG_3_160x.jpg?v=1673865148"
                    style={{ width: "5rem" }}
                  />

                  <Link class="nav-link mt-2" to="/womenshoes">
                    WomenShoes
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenapparels">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/pw218913_160x.jpg?v=1673867219"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2" to="/womenapparels">
                    Women Apperarls
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/kids">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/Kids_160x.jpg?v=1673867202"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2 pl-4" to="/kids">
                    Kids
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/bags">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/Bag_blog_post_img_1_160x.jpg?v=1673865206"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2 pl-4" to="/bags">
                    Bags
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/accessories">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/04_160x.png?v=1673865581"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2  pl-4" to="/accessories">
                    Jewlery
                  </Link>
                </Link>
              </SwiperSlide>

              <SwiperSlide className="rounded-circle">
                <Link class="" to="/beauty">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKekB2r06ZIlGPc0Jmo8zEtdjVfR-qIUWSkA&usqp=CAU"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2  pl-3" to="/beauty">
                    Fragrance
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuowRzzNHw2dpotZ7Jj6jcQZScJiR6E0ISBQ&usqp=CAU"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2  pl-3" to="/womenshoes">
                    Cushion
                  </Link>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div class="dropdown">
  <button class="btn btn-gray dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter/Features
  </button>
  <div class="dropdown-menu">
  <Link class="nav-link mt-2  pl-3" to="/womenshoes">WomenShoes</Link>
  <Link class="nav-link mt-2  pl-3" to="/womenapparels">WomenApparels</Link>
  <Link class="nav-link mt-2  pl-3" to="/bags">Bags</Link>
  <Link class="nav-link mt-2  pl-3" to="/kids">Kids</Link>
  <Link class="nav-link mt-2  pl-3" to="/Accessories">Accessories</Link>
  <Link class="nav-link mt-2  pl-3" to="/beauty">Beauty</Link>
  </div>
</div>
        <p className="pl-0 mt-5 text-center " style={{ color: "gray" }}>
          Stylo Pakistan brings to you Women Shoes that are not only top-quality
          in terms of design, but also fit comfort standards. Explore our wide
          range of summer and winter women shoes today to take your style up a
          notch. Finding women shoes that strike the right balance between
          comfort and style is not an easy task. Most of the ladies shoes we
          look at are either good at design or comfort.{" "}
        </p>
      </div>

    </div>
  );
}

export default Slider;
