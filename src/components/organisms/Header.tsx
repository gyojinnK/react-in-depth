import { cm } from "../../util/cm";
import GyojinAvatar from "../molecules/gyojinAvatar";
import NavBar from "../molecules/NavBar";

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={cm("relative text-white ", className)}>
      <div className="absolute top-0 right-0 w-full py-inner flex justify-between items-center">
        <GyojinAvatar />
        <NavBar className="">
          <NavBar.Item routePath="/js">Javascript</NavBar.Item>
          <NavBar.Item routePath="/react">React.js</NavBar.Item>
          <NavBar.Item routePath="/next">Next.js</NavBar.Item>
          <NavBar.Item routePath="/etc">Etc</NavBar.Item>
        </NavBar>
      </div>
    </header>
  );
};

export default Header;
