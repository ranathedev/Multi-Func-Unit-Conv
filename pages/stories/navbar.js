import Stories from "../..//src/components/stories";
import Navbar from "../../src/components/navbar";

const navbar = {
  arg: "Navbar",
  list1: ["example", "example", "example"],
  list2: ["example", "example", "example"],
};

const NavbarStory = () => (
  <Stories argList={[navbar]} template={(args) => <Navbar {...args} />} />
);

export default NavbarStory;
