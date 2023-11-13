import { useRef } from "react";
import {
  KABINET_PRODUCTS_BEERS_LIST,
  KABINET_PRODUCTS_MERCH_LIST,
  KABINET_PRODUCTS_PIVOLADA_LIST,
} from "../constants.js";
import "./KabinetProducts.css";

const sliderParams = {
  slidesPerView: "4",
  navigation: "true",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const Product = (element) => {
  return (
    <swiper-slide>
      <div className="swiper-slide-item">
        <img src={element.img} alt="" />
        <div className="swiper-slide-item-title">
          <h4>{element.name}</h4>
          <h4>{element.price}</h4>
        </div>
        <p>{element.description}</p>
      </div>
    </swiper-slide>
  );
};

const ShopNow = (element) => {
  return (
    <swiper-slide>
      <div className="swiper-slide-item-shop-now">
        <div className="swiper-slide-item-shop-now-img">
          <img src={element.img} alt=""></img>
        </div>
        <span className="shop-now">{element.name}</span>
      </div>
    </swiper-slide>
  );
};

const SliderForAll = (list) => {
  const swiperElRef = useRef(null);
  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={sliderParams.slidesPerView}
      navigation={sliderParams.navigation}
      pagination={sliderParams.pagination}
      direction={sliderParams.direction}
      loop={sliderParams.loop}
      space-between={sliderParams.spaceBetween}
    >
      {list.map((element) => {
        return element.price ? Product(element) : ShopNow(element);
      })}
    </swiper-container>
  );
};

const KabinetProducts = () => {
  const beersList = KABINET_PRODUCTS_BEERS_LIST;
  const merchList = KABINET_PRODUCTS_MERCH_LIST;
  const pivoladaList = KABINET_PRODUCTS_PIVOLADA_LIST;

  return (
    <section className="kabinet-products">
      <div className="section-title">
        <h2>KABINET PRODUCTS</h2>
        <div className="tab-buttons">
          <button className="normal-button white-button beers-tab active">
            BEERS
          </button>
          <button className="normal-button white-button merch-tab disabled">
            MERCH
          </button>
          <button className="normal-button white-button pivolada-tab disabled">
            PIVOLADA
          </button>
        </div>
      </div>

      <div className="swiper swiper-kabinet-products-beers visible">
        <div className="swiper-wrapper">{SliderForAll(beersList)}</div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="swiper swiper-kabinet-products-merch hidden">
        <div className="swiper-wrapper">{SliderForAll(merchList)}</div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="swiper swiper-kabinet-products-pivolada hidden">
        <div className="swiper-wrapper">{SliderForAll(pivoladaList)}</div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
};

export default KabinetProducts;
