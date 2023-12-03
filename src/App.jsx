import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import css from "./app.module.css";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
