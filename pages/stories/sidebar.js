import Stories from "../../src/components/stories";
import Sidebar from "../../src/components/sidebar";

const sidebar = {
  arg: "Sidebar",
  list: [
    {
      name: "Area",
      list: [
        { name: "Angle", class: "li1", id: "li1" },
        { name: "Area", class: "li1", id: "li1" },
        { name: "Length", class: "li1", id: "li1" },
      ],
    },
    {
      name: "Electrical",
      list: [
        { name: "Charge", class: "li2", id: "li2" },
        { name: "Current", class: "li2", id: "li2" },
        { name: "Illuminance", class: "li2", id: "li2" },
        { name: "Voltage", class: "li2", id: "li2" },
      ],
    },
    {
      name: "Power",
      list: [
        { name: "Apparent Power", class: "li3", id: "li3" },
        { name: "Energy", class: "li3", id: "li3" },
        { name: "Power", class: "li3", id: "li3" },
        { name: "Reactive Energy", class: "li3", id: "li3" },
        { name: "Reactive Power", class: "li3", id: "li3" },
      ],
    },
    {
      name: "Quantity",
      list: [
        { name: "Digital", class: "li4", id: "li4" },
        { name: "Each", class: "li4", id: "li4" },
        { name: "Mass", class: "li4", id: "li4" },
        { name: "PartsPer", class: "li4", id: "li4" },
        { name: "Pieces", class: "li4", id: "li4" },
      ],
    },
    {
      name: "Speed",
      list: [
        { name: "Acceleration", class: "li5", id: "li5" },
        { name: "Pace", class: "li5", id: "li5" },
        { name: "Speed", class: "li5", id: "li5" },
      ],
    },
    {
      name: "Volume",
      list: [
        { name: "Volume", class: "li5", id: "li5" },
        { name: "Volume Flow Rate", class: "li5", id: "li5" },
      ],
    },
    {
      name: "Others",
      list: [
        { name: "Force", class: "li5", id: "li5" },
        { name: "Frequency", class: "li5", id: "li5" },
        { name: "Pressure", class: "li5", id: "li5" },
        { name: "Temperature", class: "li5", id: "li5" },
        { name: "Time", class: "li5", id: "li5" },
      ],
    },
  ],
};

const SidebarStory = () => (
  <Stories argList={[sidebar]} template={(args) => <Sidebar {...args} />} />
);

export default SidebarStory;
