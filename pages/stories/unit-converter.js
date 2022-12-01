import Stories from "../../src/components/stories";
import UnitConverter from "../../src/components/unit-converter/Unit-Converter";
import unitConvData from "../../src/components/data";

const UnitConverterStory = () => {
  const acceleration = {
    arg: unitConvData[0].type,
    type: unitConvData[0].type,
    data: unitConvData[0].data,
  };
  const angle = {
    arg: unitConvData[1].type,
    type: unitConvData[1].type,
    data: unitConvData[1].data,
  };
  const apparentPower = {
    arg: unitConvData[2].type,
    type: unitConvData[2].type,
    data: unitConvData[2].data,
  };
  const area = {
    arg: unitConvData[3].type,
    type: unitConvData[3].type,
    data: unitConvData[3].data,
  };
  const charge = {
    arg: unitConvData[4].type,
    type: unitConvData[4].type,
    data: unitConvData[4].data,
  };
  const current = {
    arg: unitConvData[5].type,
    type: unitConvData[5].type,
    data: unitConvData[5].data,
  };
  const digital = {
    arg: unitConvData[6].type,
    type: unitConvData[6].type,
    data: unitConvData[6].data,
  };
  const each = {
    arg: unitConvData[7].type,
    type: unitConvData[7].type,
    data: unitConvData[7].data,
  };
  const energy = {
    arg: unitConvData[8].type,
    type: unitConvData[8].type,
    data: unitConvData[8].data,
  };
  const force = {
    arg: unitConvData[9].type,
    type: unitConvData[9].type,
    data: unitConvData[9].data,
  };
  const frequency = {
    arg: unitConvData[10].type,
    type: unitConvData[10].type,
    data: unitConvData[10].data,
  };
  const illuminance = {
    arg: unitConvData[11].type,
    type: unitConvData[11].type,
    data: unitConvData[11].data,
  };
  const length = {
    arg: unitConvData[12].type,
    type: unitConvData[12].type,
    data: unitConvData[12].data,
  };
  const mass = {
    arg: unitConvData[13].type,
    type: unitConvData[13].type,
    data: unitConvData[13].data,
  };
  const pace = {
    arg: unitConvData[14].type,
    type: unitConvData[14].type,
    data: unitConvData[14].data,
  };
  const partsPer = {
    arg: unitConvData[15].type,
    type: unitConvData[15].type,
    data: unitConvData[15].data,
  };
  const pieces = {
    arg: unitConvData[16].type,
    type: unitConvData[16].type,
    data: unitConvData[16].data,
  };
  const power = {
    arg: unitConvData[17].type,
    type: unitConvData[17].type,
    data: unitConvData[17].data,
  };
  const pressure = {
    arg: unitConvData[18].type,
    type: unitConvData[18].type,
    data: unitConvData[18].data,
  };
  const reactiveEnergy = {
    arg: unitConvData[19].type,
    type: unitConvData[19].type,
    data: unitConvData[19].data,
  };
  const reactivePower = {
    arg: unitConvData[20].type,
    type: unitConvData[20].type,
    data: unitConvData[20].data,
  };

  const speed = {
    arg: unitConvData[21].type,
    type: unitConvData[21].type,
    data: unitConvData[21].data,
  };

  const temperature = {
    arg: unitConvData[22].type,
    type: unitConvData[22].type,
    data: unitConvData[22].data,
  };

  const time = {
    arg: unitConvData[23].type,
    type: unitConvData[23].type,
    data: unitConvData[23].data,
  };

  const voltage = {
    arg: unitConvData[24].type,
    type: unitConvData[24].type,
    data: unitConvData[24].data,
  };

  const volume = {
    arg: unitConvData[25].type,
    type: unitConvData[25].type,
    data: unitConvData[25].data,
  };
  const volumeFlowRate = {
    arg: unitConvData[26].type,
    type: unitConvData[26].type,
    data: unitConvData[26].data,
  };

  return (
    <Stories
      argList={[
        acceleration,
        angle,
        apparentPower,
        area,
        charge,
        current,
        digital,
        each,
        energy,
        force,
        frequency,
        illuminance,
        length,
        mass,
        pace,
        partsPer,
        pieces,
        power,
        pressure,
        reactiveEnergy,
        reactivePower,
        speed,
        temperature,
        time,
        voltage,
        volume,
        volumeFlowRate,
      ]}
      template={(args) => <UnitConverter {...args} />}
    />
  );
};

export default UnitConverterStory;
