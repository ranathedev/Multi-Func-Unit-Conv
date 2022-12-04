import Stories from "../../src/components/stories";
import Footer from "../../src/components/footer";

const footer = {
  arg: "Footer",
};

const FooterStory = () => (
  <Stories argList={[footer]} template={(args) => <Footer {...args} />} />
);

export default FooterStory;
