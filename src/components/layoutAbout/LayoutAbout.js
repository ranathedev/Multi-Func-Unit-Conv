import Navbar from "../navbar";
import About from "../about";
import Footer from "../footer";

const LayoutAbout = () => {
  return (
    <div className={stl.container}>
      <About />
      <Navbar customClass="navbar" />
      <Footer />
    </div>
  );
};

export default LayoutAbout;
