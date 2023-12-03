import { useState, useEffect } from "react";

import Logo from "../../shared/Logo/Logo";
import Button from "../../shared/Buttons/Button";

import { ReactComponent as Facebook } from "../../images/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../images/icons/instagram.svg";
import { ReactComponent as Arrow } from "../../images/icons/arrow-grad.svg";
import { ReactComponent as Close } from "../../images/icons/close.svg";
import { ReactComponent as Burger } from "../../images/icons/burger.svg";

import css from "./header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById("contacts");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickBurger = () => {
    setIsOpen(!isOpen);
  };

  const handleClickMenu = (id) => {
    const contactSection = document.getElementById(id);
    contactSection.scrollIntoView({ behavior: "smooth" });
    handleClickBurger();
  };

  return (
    <div
      className={isScrolled ? `${css.container} ${css.fixed}` : css.container}
    >
      <div className={css.header}>
        <Logo />
        <div className={css.nav}>
          <div className={css.burger} onClick={handleClickBurger}>
            <Burger />
          </div>
          <div className={css.button} onClick={handleClick}>
            <Button text="Get in touch" />
          </div>
        </div>
        <>
          <div
            className={
              isOpen ? `${css.backdrop} ${css.active}` : `${css.backdrop}`
            }
          ></div>
          <div
            className={
              isOpen
                ? `${css.menu__container} ${css.active}`
                : `${css.menu__container}`
            }
          >
            <div className={css.menu}>
              <div className={css.menu__nav}>
                <div className={css.close__button} onClick={handleClickBurger}>
                  <Close />
                  <p>close</p>
                </div>
                <ul className={css.menu__list}>
                  <li
                    className={css.menu__link}
                    onClick={() => handleClickMenu("hero")}
                  >
                    Main
                    <Arrow />
                  </li>
                  <li
                    className={css.menu__link}
                    onClick={() => handleClickMenu("about")}
                  >
                    About
                    <Arrow />
                  </li>
                  <li
                    className={css.menu__link}
                    onClick={() => handleClickMenu("cases")}
                  >
                    Cases
                    <Arrow />
                  </li>
                  <li
                    className={css.menu__link}
                    onClick={() => handleClickMenu("faq")}
                  >
                    FAQ
                    <Arrow />
                  </li>
                  <li
                    className={css.menu__link}
                    onClick={() => handleClickMenu("contacts")}
                  >
                    Contact Us
                    <Arrow />
                  </li>
                </ul>
              </div>
              <ul className={css.menu__social}>
                <li>
                  <a href="./" className={css.social__link}>
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="./" className={css.social__link}>
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;
