import './ProductPics.css'

const ProductPics = ({ current, type, mainImage }) => {
  let picFirst = null;
  let picSecond = null;
  let styleIfNone = null;
  if (type === "BOTTLE") {
    picFirst = current.img;
    picSecond = current.canImg;
  } else {
    if (current.canImg !== "") {
      picFirst = current.canImg;
      picSecond = current.img;
    } else {
      picFirst = "pics/CanBackground.png";
      picSecond = current.img;
      styleIfNone = { display: "none" };
    }
  }
  return (
    <div className="product-imgs">
      <img ref={mainImage} src={picFirst} alt="" style={styleIfNone} />
      <img src={picSecond} alt="" />
    </div>
  );
};
export default ProductPics;
