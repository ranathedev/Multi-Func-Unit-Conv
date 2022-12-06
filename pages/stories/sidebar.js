import Stories from "../../src/components/stories";
import Sidebar from "../../src/components/sidebar";

const sidebar = {
  arg: "Sidebar",
  list: [
    "Area",
    "Electrical",
    "Power",
    "Quantity",
    "Speed",
    "Volume",
    "Others",
  ],
};

const SidebarStory = () => (
  <Stories argList={[sidebar]} template={(args) => <Sidebar {...args} />} />
);

export default SidebarStory;
