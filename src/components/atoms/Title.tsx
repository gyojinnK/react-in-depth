import { cm } from "../../util/cm";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return <div className={cm("font-exo text-h1", className)}>{children}</div>;
};

export default Title;
