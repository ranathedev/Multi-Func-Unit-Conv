import Stories from "../..//src/components/stories";
import Navbar from "../../src/components/navbar";

const navbar = {
  arg: "Navbar",
};

const NavbarStory = () => (
  <Stories argList={[navbar]} template={(args) => <Navbar {...args} />} />
);

export default NavbarStory;
