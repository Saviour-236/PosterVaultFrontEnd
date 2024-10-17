import { useSelector } from "react-redux";
import { RootState } from "../Statemanagement/store";
import CartPostCard from "./cards/cartPostCard";
function ShowCartItems() {
    const items = useSelector((state: RootState) => state.cartSliceState);
    return (
        <>

            <section className="border   border-[#aaaaac] m-[1rem] p-4 rounded-lg flex justify-around

            max-sm:block 
            dark:border-[#1f3a6b]
            "
            >


                {/* total prices and products  */}
                <div className="m-[1rem] rounded-lg                                                                       
                sm:hidden
                max-sm:border max-sm:p-3 
                ">

                    Total items in cart: {items.length}
                    <hr />
                    Toatal price: {items.reduce((acc, item) => acc + item.price, 0)}
                </div>


                {/* Products lists */}
                {
                    items.length > 0
                        ? <ul className="type-none max-w-[70%] space-x-2 flex  justify-center flex-wrap 
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

                { /*  for shifting the  total prices and products to the right  */}
                <div className={`border border-[#636262] h-fit fixed  top-[5rem] right-[1rem] z-[52] bg-[#d0d2d3] space-y-3
                p-1 rounded-md 
                max-sm:hidden
                `}
                    onClick={() => console.log('clicked')}
                >
                    <div className="p-3 h-fit rounded-lg border border-[#838080]
                
                max-sm:border max-sm:p-3 
                ">

                        Total items in cart: {items.length}
                        <hr className="border-[#030303]  " />
                        Toatal price: {items.reduce((acc, item) => acc + item.price, 0)}
                    </div>
                    <button className="text-[0.8rem] px-2 border p-1 float-right rounded border-[#9b9797] flex items-center space-x-1 
                    hover:border-[#09ac2f]
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