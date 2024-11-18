import { ReactNode, useState } from "react"

function IdentifyingTextOnHover({ children, text }: { children: ReactNode, text: string }) {

  const [show, setShow] = useState(false);

  //for tooltip position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  let [timeOutId,setTimeoutId]= useState<NodeJS.Timeout>();// for handling the mouse enter and mouse leave event

  const mouseEnterHandler = () => {
    setTimeoutId(setTimeout(() => {
      setShow(true)
    }, 1000));
  }
  const mouseLeaveHandler = () => {
    setShow(false);
    clearTimeout(timeOutId);
  }
  // handling the mouse enter and mouse leave event
  const eventHandler = (e: React.MouseEvent) => {
    
    if (e.type === "mouseenter") {
      mouseEnterHandler();
    }
    if (e.type === "mouseleave") {
      mouseLeaveHandler();
    }
    if (e.type === "mousemove") {
      if(show){
        setMousePosition(getmousePosition(e));
      }
    }
  }


  // getting the mouse position to postion the tooltip
  const getmousePosition= (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    return {x:clientX, y:clientY}
  }

  return (
    <>
      <div
        onMouseEnter={eventHandler}
        onMouseMove={eventHandler}
        onMouseLeave={eventHandler}
        className="relative"
      >
        {children}
        {show &&
          <div className={`p-[0.4rem]  z-[52] w-fit border border-[#464747] text-center bg-[#3d5050c0] text-[#f5f8f8] bg-opacity-80 rounded-md fixed   transition-opacity ease-in duration-1000 ${show ? 'opacity-100' : 'opacity-0'}
         
          dark:border-[#0b6ecacb]
          `}
            style={
              {
                top: `${mousePosition.y-38}px`,
                left: `${mousePosition.x+2}px`

              }
            } >
            {text}
          </div>}

      </div>

    </>

  )
}

export default IdentifyingTextOnHover