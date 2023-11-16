"use client";
import classNames from "classnames";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FaBug} from "react-icons/fa";
import {ConstantRoute} from "@/app/constants/ConstantRoute";
import {NameNavBar} from "@/app/constants/Constant";

interface Ilink {
  label: string;
  href: string;
}

function NavBar() {
  const currentPathname = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-2 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {link.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={classNames({
              "text-zinc-900": currentPathname === item.href,
              "text-zinc-500": true,
              "font-medium hover:text-zinc-800 transition-colors": true,
            })}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
const link: Ilink[] = [
  {
    label: NameNavBar.Dashboard,
    href: ConstantRoute.Home,
  },
  {
    label: NameNavBar.ISSUE,
    href: ConstantRoute.ISSUE.get,
  },
];

export default NavBar;
