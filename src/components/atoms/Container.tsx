import { cm } from "../../util/cm";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cm("px-16", className)}>{children}</div>;
};

export default Container;
