import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { cm } from "../../util/cm";
import Button from "../atoms/Button";

type NavBarProps = {
  children: ReactNode;
  className?: string;
};

const NavBarContext = createContext<{
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}>({ path: "/", setPath: () => {} });

const NavBar = ({ children, className }: NavBarProps) => {
  const [path, setPath] = useState<string>("/");
  return (
    <NavBarContext.Provider value={{ path, setPath }}>
      <div className={cm("flex items-center gap-4", className)}>{children}</div>
    </NavBarContext.Provider>
  );
};

type ItemProps = {
  routePath: string;
  children: ReactNode;
};

const Item = ({ children, routePath }: ItemProps) => {
  const { path, setPath } = useContext(NavBarContext);
  return (
    <Button
      className={`${
        path === routePath &&
        "backdrop-blur bg-[rgba(255,255,255,0.1)] font-extrabold"
      }`}
      onClick={() => setPath(routePath)}
    >
      <Link to={routePath}>{children}</Link>
    </Button>
  );
};

NavBar.Item = Item;

export default NavBar;
