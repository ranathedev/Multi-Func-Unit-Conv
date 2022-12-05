import Navbar from "../navbar";
import Home from "../homepage";

const LayoutHome = () => {
  return (
    <div className={stl.container}>
      <Navbar />
      <Home />
    </div>
  );
};

export default LayoutHome;
