import { useEffect, useState } from "react";

function WelcomePlate({ closeTimer }: any) {
    const [TimerValue, setTimerValue] = useState(10);
    const [opacity, setOpacity] = useState(1);
    const [bg, setBg] = useState({ x: 0, y: 0 });
    const [stopTimeOut, setStopTimeOut] = useState(false);
    const handleTimerClick = () => {
        setStopTimeOut(!stopTimeOut);
    }
    const handleMouseDown = () => {
        setStopTimeOut(true);
    }
    const handleMouseUp = () => {
        setStopTimeOut(false);
    }
    useEffect(() => {
        if (TimerValue === 0) {
            setTimerValue(0);
            closeTimer();
            return;
        }
        if (stopTimeOut) {
            return;
        }
        if (TimerValue === 1) {
            setOpacity(0);
        };
        setTimeout(() => setTimerValue(TimerValue - 1), 1000);
    });
    return (
        <section className={` ${opacity ? "opacity-[1]" : "opacity-[0]"} transition-opacity duration-[1s] ease-in  fixed z-[63] min-h-[100vh]  bg-[length:120vw_120vh] max-h-[130vh] min-w-[100vw] overflow-auto bg-[url('/bg.webp')] space-y-3`
        }
            style={{ backgroundPositionX: `${-100+bg.x}px`,backgroundPositionY: `${-100+bg.y}px` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onMouseMove={(e) => {
                setBg({ x: e.clientX / 10, y: e.clientY / 10 });
            }}
        >

            <div className="border sm:absolute top-[5rem] left-[10rem] p-5 rounded-lg border-[#3bffad75] shadow-black bg-[#27ec9a15] max-sm:mt-[6rem] shadow-sm max-md:top-[5rem] max-md:left-[2rem] max-md:right-[2rem] max-sm:p-2 select-none space-y-3">
                <div className=" text-white font-[500] text-[2rem] max-sm:text-[1.5rem]">
                    Welcome
                </div>
                <div className="text-white max-sm:text-[0.8rem]">
                    <p className="before:content-['*']">This is my Full Stack MERN project</p>
                    <p className="before:content-['*']"> Which is a poster buying site where anyone can buy Poster of their choice</p>
                </div>
            </div>
            {/* timer  */}
            <span className="border-none max-sm:top-[2rem] bg-[#2e2d2db4] p-3 absolute sm:bottom-[5rem] sm:right-[3rem] max-sm:right-[1rem] rounded-lg text-white "
                onClick={handleTimerClick}
            >
                Moving to Home Page in 00 : 0{TimerValue}
            </span>

            {/* Front End Tech stack container */}
            <div className="border p-3 border-[#00f7ff50] bg-[#0da2ac27] sm:absolute top-[18rem] rounded-xl  left-[28rem] text-white w-fit max-sm:w-full">
                <p className="text-[1.5rem] max-sm:text-[1rem]  sm:text-center font-[500]">FrontEnd TechStack</p>
                <span className="flex max-sm:text-[0.8rem] space-x-3">
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">Html</p>
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">Tailwind Css</p>
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">React Js</p>
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">Redux ToolKit</p>
                </span>
            </div>
            {/* BackEnd Tech stack container */}
            <div className="border select-none p-3 border-[#00f7ff50] max-sm:w-full  bg-[#0da2ac27]  sm:absolute top-[8rem] rounded-xl  left-[51rem] text-white w-fit ">
                <p className="sm:text-[1.5rem]  sm:text-center  font-[500]">BackEnd TechStack</p>
                <span className="flex max-sm:text-[0.8rem] space-x-3">
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">Express Js</p>
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">Jwt Token</p>
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">bcrypt Js</p>
                    <p className=" shadow-sm border-none p-1 rounded-lg bg-[#16161649] shadow-black ">Mongodb </p>
                </span>
            </div>
            {/* logo */}
            <img src="fav.png " className="top-4 left-12 absolute max-sm:top-[2.5rem] h-[3rem] w-[3rem] max-sm:left-[1.5rem] max-sm:h-[2rem] max-sm:w-[2rem]"></img>
        </section>
    );
}

export default WelcomePlate;
