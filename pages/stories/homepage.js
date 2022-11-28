import Stories from "../../src/components/stories";
import Homepage from "../../src/components/homepage";

const homepage = {
  arg: "HomePage",
};

const HomepageStory = () => (
  <Stories argList={[homepage]} template={(args) => <Homepage {...args} />} />
);

export default HomepageStory;
