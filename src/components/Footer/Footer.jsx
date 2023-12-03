import { useMediaQuery } from "react-responsive";

import Container from "../../shared/Container/Container";
import Logo from "../../shared/Logo/Logo";

import { ReactComponent as Facebook } from "../../images/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../images/icons/instagram.svg";

import css from "./footer.module.css";

const Footer = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("hero");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      <footer className={css.container}>
        <div className={css.logo__container}>
          <Logo />
          {!isSmallScreen && (
            <div className={css.social}>
              <a href="./" className={css.social__link}>
                <Facebook />
              </a>
              <a href="./" className={css.social__link}>
                <Instagram />
              </a>
            </div>
          )}
          <button className={css.button} onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.95312 6.38L7.99979 2.33334L12.0465 6.38"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13.6666L8 2.44663"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {isSmallScreen && (
          <div className={css.social}>
            <a href="./" className={css.social__link}>
              <Facebook />
            </a>
            <a href="./" className={css.social__link}>
              <Instagram />
            </a>
          </div>
        )}
        <div className={css.contacts__container}>
          <div className={css.adress}>
            <a
              href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
              className={css.adress_text}
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7<br />
            </a>
            <a
              href="mailto:mailto:office@ecosolution.com"
              className={css.maill_text}
            >
              office@ecosolution.com
              <br />
            </a>
            <a href="./" className={css.eco_text}>
              ecosolution © 2023
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
