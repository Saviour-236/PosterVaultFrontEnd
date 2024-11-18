import { useSelector } from "react-redux";
import { RootState } from "../Statemanagement/store";
import CartPostCard from "./cards/cartPostCard";
import { MouseEvent, useState } from "react";
function ShowCartItems() {
    const items = useSelector((state: RootState) => state.cartSliceState);
    const [position, setPosition] = useState({ x: 1100, y: 70 });
    const [mouseDown, setMouseDown] = useState(false);
    const handleMouseMove = (e: MouseEvent) => {
        if (mouseDown) { setPosition({ x: e.clientX - 60, y: e.clientY - 60 }) }
    }
    const handleMouseMouseDown = () => {
        setMouseDown(true)
    }
    const handleMouseLeave = () => {
        setMouseDown(false);
    }
    const handleMouseUp = () => {
        setMouseDown(false);
    }
    return (
        <>

            <section className="border  border-[#9f9fa7] m-[2rem] p-4 rounded-lg flex justify-around
            max-sm:block 
            dark:border-[#1f3a6b]
            "
            >


                {/* total prices and products  only visible for mobiles*/}
                <div className="m-[1rem] border relative h-fit rounded-lg p-3
                sm:hidden 
                max-sm:border max-sm:p-3 
                ">
                   <p>Total items in cart: {items.length} </p> 
                    <hr />
                    <p>Toatal price: {items.reduce((acc, item) => acc + item.price, 0)}</p>
                    {/* order button  */}
                    <button className="text-[0.8rem] px-2 border  p-1  rounded border-[#9b9797] flex items-center space-x-1 
                    hover:border-[#09ac2f] hover:scale-105 transition-transform duration-300 ease-in
                    ">
                        <p>Make Order</p>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                        </svg>
                    </button>
                </div>
                {/* Products lists */}
                {
                    items.length > 0
                        ? <ul className="type-none  space-x-2 flex  justify-center flex-wrap 
                " >
                            {
                                items.map((item, index) => {
                                    return (
                                        <li key={index} className="relative w-fit  py-[1rem] border-[#a59e9e]" >
                                            <CartPostCard post={item} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        : <div className="w-[60vw] justify-center items-center flex">
                            Cart Is Empty
                        </div>

                }

                { /*  for shifting the  total prices and products to the right and not visible for mobiles and visible for all other devices  */}
                <div
                    className={`border z-[52]  shadow-md p-2 h-fit fixed bg-[#f5fafd] space-y-3  rounded-md 
                    max-sm:hidden

                    dark:bg-transparent dark:border-[#1f3a6b] 
                ` } style={{ top: position.y, left: position.x }}

                    onMouseDown={handleMouseMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="p-3 h-fit rounded-lg border border-[#b4b1b1]
                
                max-sm:border max-sm:p-3 
                dark:shadow-md dark:shadow-[#56c440] dark:border-[#03a103]
                ">
                        Total items in cart: {items.length}
                        <hr className="border-[#030303] dark:border-[#138125]  " />
                        Toatal price: {items.reduce((acc, item) => acc + item.price, 0)}
                    </div>
                    {/* order button  */}
                    <button className="text-[0.8rem] px-2 border p-1 float-right rounded border-[#9b9797] flex items-center space-x-1 
                    hover:border-[#09ac2f] hover:scale-105 transition-transform duration-300 ease-in
                    ">
                        <p>Order</p>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default ShowCartItems