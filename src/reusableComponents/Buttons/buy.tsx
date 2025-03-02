import { useEffect, useState } from "react"
import WorkingOnThisCard from "../cards/workingOnThisCard"
function BuyButton() {
    const [isRendered, setIsRendered] = useState(false)
    const [click, setClick] = useState(false)
    const handleClick = () => {
     setClick(!click)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsRendered(true)
        }, 100)
    })
    return (
        <>
            <button
                type="button"
                className={`rounded-lg ${isRendered ? "opacity-[1] scale-100 " : "opacity-20 scale-95 "}  transition-all duration-[0.9s] ease-linear border bg-green-50 px-4 py-1 text-sm font-medium text-green-600  h-fit 
                dark:bg-[#0a7933] dark:border-[#526283] dark:bg-opacity-50  dark:text-[#ffffff]`}
            onClick={ handleClick }
            >
                Buy
            </button>
          
            {click&& <WorkingOnThisCard />} 
        </>
    )
}

export default BuyButton