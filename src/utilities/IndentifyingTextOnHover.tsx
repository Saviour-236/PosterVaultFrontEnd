import { ReactNode, useState } from "react"

function IndentifyingTextOnHover({ children, text }: { children: ReactNode, text: string }) {
  const [show, setShow] = useState(false);
  let timeOutId: number = 0;
  const eventHandler = (e: React.MouseEvent) => {
    const mouseEnterHandler = () => {
      timeOutId = setTimeout(() => setShow(true), 1000);
    }
    const mouseLeaveHandler = () => {
      clearTimeout(timeOutId);
      setShow(false);
    }
    if (e.type === "mouseenter") {
      mouseEnterHandler();
    }
    if (e.type === "mouseleave") {
      mouseLeaveHandler();
    }
  }

  return (
    <>
      <div
        onMouseEnter={eventHandler}
        onMouseLeave={eventHandler}
        className="relative"
      >
        {children}
        {show &&
          <div className={`p-[0.4rem]  z-1000 w-fit text-center bg-black text-white bg-opacity-80 rounded-md absolute top-[-1rem] right-[-1rem] transition-opacity ease-in duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
            {text}
          </div>}

      </div>

    </>

  )
}

export default IndentifyingTextOnHover