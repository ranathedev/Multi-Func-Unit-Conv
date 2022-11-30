import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { collectionRef } from "../api/firebase-config";

import Stories from "../../src/components/stories";
import UnitConverter from "../../src/components/unit-converter/Unit-Converter";

const UnitConverterStory = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getDocs(collectionRef);
  //     console.log(data.docs);
  //   };

  //   getData();
  // }, []);

  const lengthConverter = {
    arg: "Unit-Converter-Length",
    type: "Length",
    units: [
      {
        name: "Mile",
        symbol: "mi",
      },
      {
        name: "Kilometer",
        symbol: "km",
      },
      {
        name: "Meter",
        symbol: "m",
      },
      {
        name: "Foot",
        symbol: "ft",
      },
      {
        name: "Yard",
        symbol: "yd",
      },
      {
        name: "Inch",
        symbol: "in",
      },
      {
        name: "Hectometer",
        symbol: "hm",
      },
      {
        name: "Decameter",
        symbol: "dam",
      },
      {
        name: "Decimeter",
        symbol: "dm",
      },
      {
        name: "Milimeter",
        symbol: "mm",
      },
      {
        name: "Centimeter",
        symbol: "dm",
      },
    ],
  };

  const timeConverter = {
    arg: "Unit-Converter-Time",
    type: "Time",
    units: [
      { name: "Milisecond", symbol: "ms" },
      { name: "Second", symbol: "s" },
      { name: "Minute", symbol: "min" },
      { name: "Hour", symbol: "h" },
      { name: "Day", symbol: "d" },
      { name: "Week", symbol: "w" },
      { name: "Month", symbol: "m" },
      { name: "Year", symbol: "yr" },
    ],
  };

  const AoSConverter = {
    arg: "Unit-Converter-AmountofSubstance",
    type: "AmountofSubstance",
    units: [{ name: "mole", symbol: "mol" }],
  };

  const e_CurrentConverter = {
    arg: "Unit-Converter-ElectricCurrent",
    type: "ElectricCurrent",
    units: [
      { name: "", symbol: "" },
      { name: "", symbol: "" },
      { name: "", symbol: "" },
    ],
  };

  const tempratureConverter = {
    arg: "Unit-Converter-Temprature",
    type: "Temprature",
  };
  const l_IntensityConverter = {
    arg: "Unit-Converter-LuminousIntensity",
    type: "LuminousIntensity",
  };

  const massConverter = {
    arg: "Unit-Converter-Mass",
    type: "Mass",
  };

  return (
    <Stories
      argList={[
        lengthConverter,
        timeConverter,
        AoSConverter,
        e_CurrentConverter,
        tempratureConverter,
        l_IntensityConverter,
        massConverter,
      ]}
      template={(args) => <UnitConverter {...args} />}
    />
  );
};

export default UnitConverterStory;
