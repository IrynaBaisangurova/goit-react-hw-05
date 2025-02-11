import s from "./Loader.module.css";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.containerLoader}>
      <BarLoader
        color="#231fd7"
        cssOverride={{}}
        height={4}
        speedMultiplier={1}
        width={100}
      />
    </div>
  );
};

export default Loader;
