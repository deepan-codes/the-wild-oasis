import SideNavigation from "../compound/SideNavigation";
import "../_style/globals.css";
function layout({ children }) {
  return (
    <div className="grid grid-cols-[18rem_1fr] gap-9 h-full">
      <SideNavigation />
      <main>{children}</main>
    </div>
  );
}

export default layout;
