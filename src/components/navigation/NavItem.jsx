import Link from "next/link";

const NavItem = ({ title, pathname, href }) => {
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`w-full text-lg text-center py-2 rounded-md font-semibold ${
        active ? "bg-blue-500" : "click opacity-70 hover:opacity-100"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavItem;
