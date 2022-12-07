import Navbar from "../navbar";
import Contact from "../contact";

const LayoutContact = () => {
  return (
    <>
      <Navbar
        homeLink="/"
        aboutLink="/About"
        unitConvLink="/UnitConverter"
        contact="active"
      />
      <Contact />
    </>
  );
};

export default LayoutContact;
