import { PropsWithChildren } from "react";
import SideBar from "./sidebar";

interface Props extends PropsWithChildren {
  className?: string;
}

const DashBoardSideBar = ({ children }: Props) => {
  return (
    <div className="flex h-full pt-14">
      <aside className="bg-lightbg-300/50 w-1/5 xl:w-1/6 border-r border-black px-5 pt-10 fixed h-full flex flex-col">
        <SideBar />
      </aside>
      <div className="w-1/5 xl:w-1/6"></div>
      <div className="w-4/5 xl:w-5/6 pt-10 px-32">{children}</div>
    </div>
  );
};

export default DashBoardSideBar;
