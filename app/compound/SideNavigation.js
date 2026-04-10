"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b md:border-b-0 md:border-r border-primary-900 overflow-x-auto">
      {/* MOBILE = row | DESKTOP = column */}
      <ul className="flex flex-row justify-between md:justify-normal  md:flex-col gap-2 text-sm md:text-lg whitespace-nowrap">
        {navLinks.map((link) => (
          <li key={link.name} className="flex-shrink-0">
            <Link
              href={link.href}
              className={`py-2 px-3 md:py-3 md:px-5 flex items-center gap-2 md:gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
            >
              {link.icon}
              <span className="hidden  md:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        {/* SIGN OUT */}
        <li className="flex-shrink-0 md:mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
