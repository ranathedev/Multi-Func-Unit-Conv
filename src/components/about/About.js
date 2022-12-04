import stl from "./About.module.scss";

const About = ({ customClass }) => {
  return (
    <div className={stl.container}>
      <h1>About</h1>
      <div className={stl.about}>
        <p>
          Unit Converter is a free, multi-functional unit converter webapp. It
          can convert 50+ units of measurement. Unit Converter was created in
          2022 by me, a web developer who was tired of having to use multiple
          converters for different purposes.Unit Converter is designed to be
          simple and easy to use. It has a clean interface with large buttons so
          that you can easily select the units you want to convert. The app is
          also responsive so that it can be used on mobile devices.Unit
          Converter is constantly being updated with new features and
          improvements. If you have any suggestions or feedback, please don't
          hesitate to contact me!
        </p>
      </div>
    </div>
  );
};

export default About;
