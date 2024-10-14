import { cm } from "../../util/cm";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={cm("rounded-md p-4 drop-shadow-md", className)}>
      {children}
    </div>
  );
};

export default Card;
