import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import Paragraph from "../../shared/Paragraph/Paragraph";

import { ReactComponent as Icon1 } from "../../images/icons/maximize-circle.svg";
import { ReactComponent as Icon2 } from "../../images/icons/global-edit.svg";
import { ReactComponent as Icon3 } from "../../images/icons/cpu-charge.svg";
import { ReactComponent as Icon4 } from "../../images/icons/ranking.svg";

import css from "./about.module.css";

const About = () => {
  return (
    <Container id="about">
      <div>
        <div className={css.container}>
          <div className={css.container__title}>
            <div className={css.size__title}>
              <Title text="Main values of our company" />
            </div>
          </div>
          <div className={css.container__paragraph}>
            <Paragraph text="EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs." />
          </div>
        </div>
        <div className={css.container__card}>
          <div className={css.container__about}>
            <div className={css.card}>
              <div className={css.title}>
                <Icon1 />
                <h4>Openness</h4>
              </div>
              <div className={css.paragraph}>
                <p>to the world, people, new ideas and projects</p>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.title}>
                <Icon2 />
                <h4>Responsibility</h4>
              </div>
              <div className={css.paragraph}>
                <p>
                  we are aware that the results of our work have an impact on
                  our lives and the lives of future generations
                </p>
              </div>
            </div>
            <div className={css.card__img1}></div>
          </div>
          <div className={css.container__about}>
            <div className={css.card__img2}></div>
            <div className={css.card}>
              <div className={css.title}>
                <Icon3 />
                <h4>Innovation</h4>
              </div>
              <div className={css.paragraph}>
                <p>
                  we use the latest technology to implement non-standard
                  solutions
                </p>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.title}>
                <Icon4 />
                <h4>Quality</h4>
              </div>
              <div className={css.paragraph}>
                <p>
                  we do not strive to be the first among others, but we want to
                  be the best in our business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
