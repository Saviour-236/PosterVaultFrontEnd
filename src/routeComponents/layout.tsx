//create a layout for the app with router
import { Outlet } from "react-router-dom";
import Header from "../reusableComponents/header";
import Footer from "../reusableComponents/footer";
export default function Layout() {

  return (
    <>
      <div className="bg-[#f0f5f7] transition-[background-color] duration-900 ease-in-out  dark:bg-[#303536] font-mono text-[#566169] dark:text-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}