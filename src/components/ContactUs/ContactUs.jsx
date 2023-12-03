import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import Form from "./Form/Form";

import { ReactComponent as Facebook } from "../../images/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../images/icons/instagram.svg";
import { ReactComponent as Call } from "../../images/icons/call.svg";
import { ReactComponent as Sms } from "../../images/icons/sms.svg";
import { ReactComponent as Map } from "../../images/icons/map.svg";

import css from "./contactUs.module.css";

const ContactUs = () => {
  return (
    <Container id="contacts">
      <div className={css.container}>
        <div className={css.title}>
          <Title text="Contact us" />
        </div>

        <div className={css.contacts__container}>
          <div className={css.contacts}>
            <div className={css.phone}>
              <p className={css.contacts__title}>Phone:</p>
              <a href="tel:+380981234567" className={css.phone__link}>
                <Call />
                <span className={css.span}>+38 (098) 12 34 567</span>
              </a>
              <a href="tel:+380981234567" className={css.phone__link}>
                <Call />
                <span className={css.span}>+38 (093) 12 34 567</span>
              </a>
            </div>
            <div className={css.mail}>
              <p className={css.contacts__title}>E-mail:</p>
              <a
                href="mailto:office@ecosolution.com"
                className={css.mail__link}
              >
                <Sms />
                <span className={css.span}>office@ecosolution.com</span>
              </a>
            </div>
            <div className={css.adress}>
              <p className={css.contacts__title}>Address:</p>
              <a
                href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
                className={css.adress__link}
              >
                <Map />
                <span className={css.span}>
                  79005, Ukraine, Lviv, street. Shota Rustaveli, 7
                </span>
              </a>
            </div>
            <div className={css.social}>
              <p className={css.contacts__title}>Social Networks:</p>
              <a href="./" className={css.social__link}>
                <Facebook />
              </a>
              <a href="./" className={css.social__link}>
                <Instagram />
              </a>
            </div>
          </div>
          <div className={css.form}>
            <Form />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
