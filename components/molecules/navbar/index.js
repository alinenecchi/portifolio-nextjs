import React, { useState } from "react";
import Link from "next/link";
import css from "./navbar.module.scss";

function Navbar(props) {
  const { className = "", children, ...other } = props;
  const [isMenuActive, SetIsMenuActive] = useState(false);
  const [isMenuMobileActive, SetIsMenuMobileActive] = useState(false);

  function closeMenu() {
    SetIsMenuActive(false);
  }

  function mobileNavigationToggler() {
    SetIsMenuMobileActive(!isMenuMobileActive);
    if (isMenuMobileActive) {
      closeMenu();
    }
  }
  const pages = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
  ];

  return (
    <nav
      className={`${css["main-navigation"]} ${className}`}
      id="navigation"
      data-is-menu-active={isMenuActive}
      data-is-mobile-menu-active={isMenuMobileActive}
    >
      <button
        className={css["navigation-toogler"]}
        onClick={mobileNavigationToggler}
      >
        <span className={css["navigation-toogler__burguer"]}>
          <span data-visuallyhidden></span>
        </span>
      </button>
      <ul className={css["navigation-list"]}>
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
