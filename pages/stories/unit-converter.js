import Stories from "../../src/components/stories";
import UnitConverter from "../../src/components/unit-converter";
import unitConvData from "../../src/components/data";

export const acceleration = {
  arg: unitConvData[0].type,
  type: unitConvData[0].type,
  data: unitConvData[0].data,
};
export const angle = {
  arg: unitConvData[1].type,
  type: unitConvData[1].type,
  data: unitConvData[1].data,
};
export const apparentPower = {
  arg: unitConvData[2].type,
  type: unitConvData[2].type,
  data: unitConvData[2].data,
};
export const area = {
  arg: unitConvData[3].type,
  type: unitConvData[3].type,
  data: unitConvData[3].data,
};
export const charge = {
  arg: unitConvData[4].type,
  type: unitConvData[4].type,
  data: unitConvData[4].data,
};
export const current = {
  arg: unitConvData[5].type,
  type: unitConvData[5].type,
  data: unitConvData[5].data,
};
export const digital = {
  arg: unitConvData[6].type,
  type: unitConvData[6].type,
  data: unitConvData[6].data,
};
export const each = {
  arg: unitConvData[7].type,
  type: unitConvData[7].type,
  data: unitConvData[7].data,
};
export const energy = {
  arg: unitConvData[8].type,
  type: unitConvData[8].type,
  data: unitConvData[8].data,
};
export const force = {
  arg: unitConvData[9].type,
  type: unitConvData[9].type,
  data: unitConvData[9].data,
};
export const frequency = {
  arg: unitConvData[10].type,
  type: unitConvData[10].type,
  data: unitConvData[10].data,
};
export const illuminance = {
  arg: unitConvData[11].type,
  type: unitConvData[11].type,
  data: unitConvData[11].data,
};
export const length = {
  arg: unitConvData[12].type,
  type: unitConvData[12].type,
  data: unitConvData[12].data,
};
export const mass = {
  arg: unitConvData[13].type,
  type: unitConvData[13].type,
  data: unitConvData[13].data,
};
export const pace = {
  arg: unitConvData[14].type,
  type: unitConvData[14].type,
  data: unitConvData[14].data,
};
export const partsPer = {
  arg: unitConvData[15].type,
  type: unitConvData[15].type,
  data: unitConvData[15].data,
};
export const pieces = {
  arg: unitConvData[16].type,
  type: unitConvData[16].type,
  data: unitConvData[16].data,
};
export const power = {
  arg: unitConvData[17].type,
  type: unitConvData[17].type,
  data: unitConvData[17].data,
};
export const pressure = {
  arg: unitConvData[18].type,
  type: unitConvData[18].type,
  data: unitConvData[18].data,
};
export const reactiveEnergy = {
  arg: unitConvData[19].type,
  type: unitConvData[19].type,
  data: unitConvData[19].data,
};
export const reactivePower = {
  arg: unitConvData[20].type,
  type: unitConvData[20].type,
  data: unitConvData[20].data,
};

export const speed = {
  arg: unitConvData[21].type,
  type: unitConvData[21].type,
  data: unitConvData[21].data,
};

export const temperature = {
  arg: unitConvData[22].type,
  type: unitConvData[22].type,
  data: unitConvData[22].data,
};

export const time = {
  arg: unitConvData[23].type,
  type: unitConvData[23].type,
  data: unitConvData[23].data,
};

export const voltage = {
  arg: unitConvData[24].type,
  type: unitConvData[24].type,
  data: unitConvData[24].data,
};

export const volume = {
  arg: unitConvData[25].type,
  type: unitConvData[25].type,
  data: unitConvData[25].data,
};
export const volumeFlowRate = {
  arg: unitConvData[26].type,
  type: unitConvData[26].type,
  data: unitConvData[26].data,
};

const UnitConverterStory = () => {
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
