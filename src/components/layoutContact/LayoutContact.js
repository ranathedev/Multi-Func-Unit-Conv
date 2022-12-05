import Navbar from "../navbar";
import Contact from "../contact";

const LayoutContact = () => {
  return (
    <div className={stl.container}>
      <Navbar customClass="navbar" />
      <Contact />
    </div>
  );
};

export default LayoutContact;
