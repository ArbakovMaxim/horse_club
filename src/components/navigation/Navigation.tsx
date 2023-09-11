import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [navActive, setNavActive] = useState("home");
  const url = useLocation();
  const pathSegments = url.pathname.split("/");

  useEffect(() => {
    if (pathSegments.length > 1 && pathSegments[1] !== "") {
      const firstSegment = pathSegments[1];
      setNavActive(firstSegment);
    } else {
      setNavActive("home");
    }
  }, [pathSegments]);

  return (
    <div className="nav__wrapper">
      <nav>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className={
                navActive === "About"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/About"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={
                navActive === "Services"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/Services"
            >
              Services
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={
                navActive === "Work"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/Work"
            >
              Work
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={
                navActive === "News"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/News"
            >
              News
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={
                navActive === "Contacts"
                  ? "nav__link--active"
                  : "nav__link--passive"
              }
              to="/Contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
