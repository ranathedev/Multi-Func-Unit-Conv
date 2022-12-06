import Navbar from "../navbar";
import Contact from "../contact";

const LayoutContact = () => {
  return (
    <>
      <Navbar homeLink="/" aboutLink="/About" unitConvLink="/UnitConverter" />
      <Contact />
    </>
  );
};

export default LayoutContact;
