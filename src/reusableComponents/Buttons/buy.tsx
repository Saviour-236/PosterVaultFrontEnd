import { useEffect, useState } from "react"

function BuyButton() {
    const [isRendered, setIsRendered] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsRendered(true)
        }, 100)
    })
    return (
        <>
            <button
                type="button"
                className={`rounded-lg ${isRendered ? "opacity-[1] scale-100 " : "opacity-20 scale-95 "}  transition-all duration-[0.9s] ease-linear border bg-green-50 px-4 py-1 text-sm font-medium text-green-600 
                            dark:bg-[#0a7933] dark:border-[#526283] dark:bg-opacity-50  dark:text-[#ffffff]`}
            >
                Buy
            </button>
        </>
    )
}

export default BuyButton