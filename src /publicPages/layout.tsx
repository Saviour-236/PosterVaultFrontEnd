//create a layout for the app with router
import { Outlet } from "react-router-dom";
import Header from "../reusableComponents/header";
import Footer from "../reusableComponents/footer";
// import WelcomePlate from "../reusableComponents/sections/welcomePlate";
// import { useState } from "react";
export default function Layout() {
  // const [timer, setTimer] = useState(true);
  // const timerFunction = () => {
  //   setTimer(false)
  // }
  return (
    <>

      {/* {timer
        ? <WelcomePlate closeTimer={timerFunction} />
        : <div className="bg-[#f0f5f7] transition-[background-color] duration-900 ease-in-out  font-serif text-[#062338] min-h-[100vh] min-w-[100vw] relative  m-auto 
       dark:bg-[#112031] dark:text-[#c3d3d8] ">
          <header className="sticky top-0 w-[100vw] flex justify-center z-[50]">
            <Header />
          </header>
          <Outlet />
          <Footer />
        </div>
      } */}
      <div className="bg-[#f0f5f7] transition-[background-color] duration-900 ease-in-out  font-serif text-[#062338] min-h-[100vh] min-w-[100vw] relative  m-auto 
      dark:bg-[#112031] dark:text-[#c3d3d8] ">
         <header className="sticky top-0 w-[100vw] flex justify-center z-[50]">
           <Header />
         </header>
         <Outlet />
         <Footer />
       </div>
    </>
  );
}