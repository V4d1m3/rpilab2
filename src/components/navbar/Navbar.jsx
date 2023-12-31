import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangDropdown from "../../LangDropdown.jsx";
import languages from "../../languages";

import s from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to="/info"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          {t("home_page")}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/list"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          {t("list_page")}
        </NavLink>
      </div>
      <LangDropdown languages={languages} />
    </nav>
  );
};

export default Navbar;