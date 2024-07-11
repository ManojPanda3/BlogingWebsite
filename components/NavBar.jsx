import { navBarConst } from "@/constants";
import { searchIcon } from "@/utils";
// import Image from "next/image";
import { Login, SingUp } from "./Buttons";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-20 max-md:px-1 min-w-[350px]">
      <i
        className="h-[auto] w-[12rem] p-2 items-center"
        alt="BlogLove"
      >{navBarConst.logo}</i>
       <div className=" w-[25rem] min-w-[0rem] max-md:opacity-0  max-md:scale-0 max-md:absolute">
        <ul className="flex items-center justify-around h-full w-full">

        {Object.keys(navBarConst.tabs).map((tab, index) => (
          <li key={tab + "-" + index} className="list-none max-md:scale-0 font-medium hover:text-gray-600 transition-colors duration-200">
            <a href={navBarConst.tabs[tab]} className="no-underline">
              {tab}
            </a>
          </li>
        ))}
        </ul>
      </div>
      <div className="flex justify-between max-w-[18rem] items-center gap-2">
        <div className="min-w-8 max-w-10 aspect-square  cursor-pointer">{searchIcon}</div>
        <Login className="m-2 max-sm:scale-0 max-sm:absolute">Login</Login>
        <SingUp className="m-2">Get Started</SingUp>
      </div>
    </nav>
  );
};

export default NavBar;
