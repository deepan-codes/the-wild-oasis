import SideNavigation from "../compound/SideNavigation";
import "../_style/globals.css";

export default function layout({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-[18rem_1fr] min-h-screen">
      <SideNavigation />

      <main className="w-full">{children}</main>
    </div>
  );
}
