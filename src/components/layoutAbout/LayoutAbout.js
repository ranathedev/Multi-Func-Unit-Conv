import Navbar from "../navbar";
import About from "../about";
import Footer from "../footer";

const LayoutAbout = () => {
  return (
    <>
      <About />
      <Navbar
        homeLink="/"
        contactLink="/Contact"
        unitConvLink="/UnitConverter"
      />
      <Footer
        homeLink="/"
        contactLink="/Contact"
        unitConvLink="/UnitConverter"
      />
    </>
  );
};

export default LayoutAbout;
