import React from "react";
import { Link } from "react-router-dom";
import { MENU_LIST } from "../constants.js";

class HeaderMenu extends React.Component {
  menu = MENU_LIST;
  render() {
    return (
      <nav>
        <ul>
          {this.menu.map((item) => {
            return (
              item.link !== "/" && (
                <li>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default HeaderMenu;
