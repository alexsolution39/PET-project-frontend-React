import {
  KABINET_PRODUCTS_BEERS_LIST,
  KABINET_PRODUCTS_MERCH_LIST,
  KABINET_PRODUCTS_PIVOLADA_LIST,
} from "../constants.js";
import ProductsSlider from "../slider/ProductsSlider.js";
import "./KabinetProducts.css";

const sliderParams = {
  slidesPerView: "4",
  navigation: "true",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
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
        <div className="swiper-wrapper">
          {ProductsSlider(beersList, sliderParams)}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="swiper swiper-kabinet-products-merch hidden">
        <div className="swiper-wrapper">
          {ProductsSlider(merchList, sliderParams)}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="swiper swiper-kabinet-products-pivolada hidden">
        <div className="swiper-wrapper">
          {ProductsSlider(pivoladaList, sliderParams)}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
};

export default KabinetProducts;
