import Navbar from "../navbar";
import Home from "../homepage";

const LayoutHome = () => {
  return (
    <>
      <Navbar
        homeLink="/"
        aboutLink="/About"
        contactLink="/Contact"
        unitConvLink="/UnitConverter"
        home="active"
      />
      <Home />
    </>
  );
};

export default LayoutHome;
