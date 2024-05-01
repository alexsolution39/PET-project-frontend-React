import { memo } from "react";
import { useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import CartContext from "../AppContext";
import "./Header.css";

function Header() {
  const showCart = useContext(CartContext);
  let quantityOfProducts = 0;
  if (localStorage.cart) {
    quantityOfProducts = JSON.parse(localStorage.cart).length;
  }
  return (
    <header>
      <section className="menu">
        <div className="logo">
          <a href="/PET-project-frontend-React">
            <img src="../pics/logo.png" alt="" />
          </a>
        </div>
        <div className="menu-list">
          <HeaderMenu />
        </div>
        <div className="language">
          <ul>
            <li>
              <a href="">EN</a>
            </li>
            <li>
              <div className="cart-icon" onClick={showCart.toggleShow}>
                <div>CART {quantityOfProducts}</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default memo(Header);
