import Stories from "../../src/components/stories";
import LayoutAbout from "../../src/components/layoutAbout";

const layoutAbout = {
  arg: "Layout About",
};

const LayoutAboutStory = () => (
  <Stories
    argList={[layoutAbout]}
    template={(args) => <LayoutAbout {...args} />}
  />
);

export default LayoutAboutStory;
