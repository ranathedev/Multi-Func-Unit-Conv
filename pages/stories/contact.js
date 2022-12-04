import Stories from "../../src/components/stories";
import Contact from "../../src/components/contact";

const contact = {
  arg: "Contact",
};

const ContactStory = () => (
  <Stories argList={[contact]} template={(args) => <Contact {...args} />} />
);

export default ContactStory;
