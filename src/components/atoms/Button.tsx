import { cm } from "../../util/cm";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <div
      className={cm(
        "hover:backdrop-blur hover:bg-[rgba(255,255,255,0.1)] hover:font-extrabold transition-all px-4 py-1 rounded-lg cursor-pointer text-center",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
