import clsx from "clsx";

import stl from "./Loading.module.scss";

const LoadingScreen = ({ customClass }) => {
  return (
    <div className={clsx(stl.screen, customClass)}>
      <div className={stl.balls}>
        <div className={clsx(stl.ball, stl.one)}></div>
        <div className={clsx(stl.ball, stl.two)}></div>
        <div className={clsx(stl.ball, stl.three)}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
