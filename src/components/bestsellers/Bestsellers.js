import { BESTSELLERS_LIST } from "../constants.js";
import NormalWhiteButton from "../buttons/NormalWhiteButton.js";
import { BsArrowUpRight } from "react-icons/bs";
import ProductsSlider from "../slider/ProductsSlider.js";

const sliderParams = {
  slidesPerView: "4",
  navigation: "true",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const Bestsellers = () => {
  const bestsellers = BESTSELLERS_LIST;

  return (
    <section className="bestsellers">
      <div className="section-title">
        <h2>BESTSELLERS</h2>
        {NormalWhiteButton("SEE ALL", <BsArrowUpRight />)}
      </div>
      <div className="bestsellers-products">
        <div className="swiper swiper-bestsellers">
          <div className="swiper-wrapper">
            {ProductsSlider(bestsellers, sliderParams)}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
