import Logo from "./compound/Logo";
import Navigation from "./compound/Navigation";
import Header from "./compound/Header";
import "./_style/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "../app/compound/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "the wild oasis beautiful restart luxary",
};
function layout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} bg-primary-950 min-h-screen text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid  h-full">
          <main className="mx-auto w-full max-w-7xl ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default layout;
