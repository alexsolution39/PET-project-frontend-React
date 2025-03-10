import { useRef } from "react";
import { Anchor } from "react-bootstrap";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
} from "../constants";
import "./ShopSlider.css";

const ShopSlider = ({ list, sliderParams, title }) => {
  let shopPath = null;
  const swiperElRef = useRef(null);
  const id = title.toLowerCase().replace(/ /g, "-");
  return (
    <div className="swiper" id={id}>
      <div className="swiper-wrapper">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={sliderParams.slidesPerView}
          navigation={sliderParams.navigation}
          pagination={sliderParams.pagination}
          direction={sliderParams.direction}
          loop={sliderParams.loop}
          space-between={sliderParams.spaceBetween}
        >
          <div class="shop-category-with-title">
            <h2>{title}</h2>
            <div class="shop-category">
              {list.map((element) => {
                if (list === SHOP_MAIN_BEERS_LIST) {
                  shopPath = "PET-project-frontend-React/shop-beers/";
                } else if (list === SHOP_MAIN_BEER_PACKS_LIST) {
                  shopPath = "PET-project-frontend-React/shop-beer-packs/";
                } else if (list === SHOP_MAIN_MERCH_LIST) {
                  shopPath = "PET-project-frontend-React/shop-merch/";
                } else {
                  shopPath = "PET-project-frontend-React/shop-pivolada/";
                }
                let myLink =
                  shopPath +
                  element.name
                    .toLowerCase()
                    .replace(/[^\w ]/g, "")
                    .replace(/\s+/g, " ")
                    .replace(/\s/g, "-");
                return (
                  <Anchor href={`/${myLink}`}>
                    <swiper-slide>
                      <div class="shop-item">
                        <div class="shop-item-img">
                          <img src={element.img} alt="" />
                        </div>
                        <div class="shop-item-title">
                          <h4>{element.name}</h4>
                          <h4>
                            {element.price} {element.currency}
                          </h4>
                        </div>
                        {element.style &&
                        element.alcohol &&
                        element.color &&
                        element.volume ? (
                          <p>{`${element.style} / abv ${element.alcohol}% / ibu ${element.color} / ${element.volume}l`}</p>
                        ) : (
                          <p>{element.description}</p>
                        )}
                      </div>
                    </swiper-slide>
                  </Anchor>
                );
              })}
            </div>
          </div>
        </swiper-container>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default ShopSlider;
