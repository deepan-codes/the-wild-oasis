import Link from "next/link";
import { auth } from "@/app/_lib/auth";
export default async function Navigation() {
  const session = await auth();
  console.log(session);
  return (
    <nav className="z-10 text-base sm:text-lg md:text-xl">
      <ul className="flex gap-3 sm:gap-5 md:gap-8 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex gap-2 align-middle"
            >
              <img
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
                className="h-7 rounded"
              ></img>
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
