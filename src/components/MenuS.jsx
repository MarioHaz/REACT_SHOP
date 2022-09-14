import React from "react";
import "@styles/MenuS.scss";

const MenuS = () => {
  return (
    <div className="MenuS">
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
        <li>
          <a href="/">Log Out</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuS;
