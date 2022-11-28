import Stories from "../../src/components/stories";
import UnitConverter from "../../src/components/unit-converter/Unit-Converter";

const unitconverter = {
  arg: "Unit-Converter",
};

const UnitConverterStory = () => (
  <Stories
    argList={[unitconverter]}
    template={(args) => <UnitConverter {...args} />}
  />
);

export default UnitConverterStory;
