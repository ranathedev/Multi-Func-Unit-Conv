import { useState } from "react";
import Head from "next/head";

import Navbar from "../src/components/navbar";
import Homepage from "../src/components/layoutHome";
import UnitConverter from "../src/components/layoutUnitConv";
import About from "../src/components/layoutAbout";
import Contact from "../src/components/layoutContact";

const Home = () => {
  const [comp, setComp] = useState(0);

  const getComp = () => {
    switch (comp) {
      case 0:
        return (
          <>
            <Navbar home="active" changeComp={setComp} />
            <Homepage />
          </>
        );

      case 1:
        return (
          <>
            <Navbar unitConv="active" changeComp={setComp} />
            <UnitConverter />
          </>
        );
      case 2:
        return (
          <>
            <Navbar about="active" changeComp={setComp} />{" "}
            <About changeComp={setComp} />
          </>
        );
      case 3:
        return (
          <>
            <Navbar contact="active" changeComp={setComp} /> <Contact />
          </>
        );
    }
  };

  return (
    <>
      <Head>
        <title>Unit Converter | Multi Functional | Convert Units Easily</title>
        <meta
          name="description"
          content="Unit Converter | Multi Functional. Simple and Free. Convert Units Easily."
        />
        <meta
          name="keywords"
          content=", Unit Converter, Convert Unit, Multi Functional Unit Converter, Multi Func Unit Conv, Unit Conv, Unit Conversion"
        />
        <meta name="author" content="Rana Intizar" />
        <meta
          name="google-site-verification"
          content="5Fs8lSYBSQvC-anQEhvg9XrB5OLrKgO2HpvI6CoByrQ"
        />
      </Head>
      {getComp()}
    </>
  );
};

export default Home;
