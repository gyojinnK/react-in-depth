import { ComBasicProps } from "../../types/componentBasicProps";
import { cm } from "../../util/cm";

const SubTitle = ({ children, className }: ComBasicProps) => {
  return <div className={cm("text-body1 font-pre", className)}>{children}</div>;
};

export default SubTitle;
