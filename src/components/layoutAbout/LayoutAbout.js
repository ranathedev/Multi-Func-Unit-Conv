import Navbar from "../navbar";
import About from "../about";
import Footer from "../footer";

const LayoutAbout = () => {
  return (
    <>
      <About />
      <Navbar customClass="navbar" />
      <Footer />
    </>
  );
};

export default LayoutAbout;
