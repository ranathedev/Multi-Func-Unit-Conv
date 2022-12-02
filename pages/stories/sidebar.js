import Stories from "../../src/components/stories";
import Sidebar from "../../src/components/sidebar/Sidebar";

const sidebar = {
  arg: "Sidebar",
  list: [
    {
      name: "option1",
      list: [
        { name: "opt1", class: "li1", id: "li1" },
        { name: "opt2", class: "li1", id: "li1" },
        { name: "opt3", class: "li1", id: "li1" },
        { name: "opt4", class: "li1", id: "li1" },
        { name: "opt5", class: "li1", id: "li1" },
        { name: "opt6", class: "li1", id: "li1" },
      ],
    },
    {
      name: "option2",
      list: [
        { name: "opt1", class: "li2", id: "li2" },
        { name: "opt2", class: "li2", id: "li2" },
        { name: "opt3", class: "li2", id: "li2" },
        { name: "opt4", class: "li2", id: "li2" },
        { name: "opt5", class: "li2", id: "li2" },
        { name: "opt6", class: "li2", id: "li2" },
      ],
    },
    {
      name: "option3",
      list: [
        { name: "opt1", class: "li3", id: "li3" },
        { name: "opt2", class: "li3", id: "li3" },
        { name: "opt3", class: "li3", id: "li3" },
        { name: "opt4", class: "li3", id: "li3" },
        { name: "opt5", class: "li3", id: "li3" },
        { name: "opt6", class: "li3", id: "li3" },
      ],
    },
    {
      name: "option4",
      list: [
        { name: "opt1", class: "li4", id: "li4" },
        { name: "opt2", class: "li4", id: "li4" },
        { name: "opt3", class: "li4", id: "li4" },
        { name: "opt4", class: "li4", id: "li4" },
        { name: "opt5", class: "li4", id: "li4" },
        { name: "opt6", class: "li4", id: "li4" },
      ],
    },
    {
      name: "option5",
      list: [
        { name: "opt1", class: "li5", id: "li5" },
        { name: "opt2", class: "li5", id: "li5" },
        { name: "opt3", class: "li5", id: "li5" },
        { name: "opt4", class: "li5", id: "li5" },
        { name: "opt5", class: "li5", id: "li5" },
        { name: "opt6", class: "li5", id: "li5" },
      ],
    },
  ],
};

const SidebarStory = () => (
  <Stories argList={[sidebar]} template={(args) => <Sidebar {...args} />} />
);

export default SidebarStory;
