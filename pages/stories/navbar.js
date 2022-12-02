import Stories from "../..//src/components/stories";
import Navbar from "../../src/components/navbar";

const navbar = {
  arg: "Navbar",
  baseList: ["Length", "Mass", "Temperature", "Time"],
  mostUsedList: ["Area", "Force", "Energy", "Power", "Speed", "Volume"],
};

const NavbarStory = () => (
  <Stories argList={[navbar]} template={(args) => <Navbar {...args} />} />
);

export default NavbarStory;
