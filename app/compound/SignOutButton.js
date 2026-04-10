"use client";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signout } from "../_lib/action";

function SignOutButton() {
  return (
    <form action={signout}>
      <button className="py-2 px-3 md:py-3 md:px-5 flex items-center gap-2 md:gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors w-auto md:w-full whitespace-nowrap">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />

        <span className="hidden  md:inline">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
