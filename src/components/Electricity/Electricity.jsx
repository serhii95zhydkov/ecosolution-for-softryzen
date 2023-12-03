import { useState, useEffect } from "react";

import Container from "../../shared/Container/Container";

import css from "./electricity.module.css";

const Electricity = () => {
  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Container>
      <div className={css.section}>
        <div className={css.container__title}>
          <h2 className={css.title}>Electricity we produced for all time</h2>
        </div>
        <div className={css.container__number}>
          <p className={css.number}>{formatNumberWithDots(counter)}</p>
          <p className={css.text}>kWh</p>
        </div>
      </div>
    </Container>
  );
};

export default Electricity;
