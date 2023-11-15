"use client";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="z-10 fixed bottom-0 left-0 w-full p-4">
      <div className="w-full flex items-center  gap-x-2 rounded-md bg-slate-100 dark:bg-slate-700">
        <NavItem title="Pending" pathname={pathname} href={"/"} />
        <NavItem title="Missed" pathname={pathname} href={"/missed"} />
      </div>
    </div>
  );
};

export default Navbar;
