import Stories from "../../src/components/stories";
import LayoutHome from "../../src/components/layoutHome";

const layout = {
  arg: "Layout",
};

const LayoutStory = () => (
  <Stories argList={[layout]} template={(args) => <LayoutHome {...args} />} />
);

export default LayoutStory;
