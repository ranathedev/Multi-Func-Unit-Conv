import Stories from "../../src/components/stories";
import About from "../../src/components/about";

const about = {
  arg: "About",
};

const AboutStory = () => (
  <Stories argList={[about]} template={(args) => <About {...args} />} />
);

export default AboutStory;
