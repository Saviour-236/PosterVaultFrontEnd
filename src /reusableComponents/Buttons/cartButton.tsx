import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Statemanagement/store";
import { useNavigate } from "react-router-dom";
import darkThemeCartIcon from "../../assets/darkThemeCartIcon.png";
import IdentifyingTextOnHover from "../../utilities/IdentifyingTextOnHover";

function cart({ loggedIn }: { loggedIn: boolean }) {
    const [totalInCart, setTotalInCart] = useState(0);// total items in cart state
    const cartItems = useSelector((state: RootState) => state.cartSliceState);
    const Navigate = useNavigate();
    const handleClickOnCart = () => {
        if (totalInCart > 0) {
            Navigate('/cart', { replace: false });
        }
    }
    useEffect(() => {
        setTotalInCart(cartItems.length);

    }, [cartItems]);
    return (

        <>
            {loggedIn &&
                <IdentifyingTextOnHover text="cart">
                    <button className=' flex items-center relative p-2  rounded-full  '
                        onClick={() => (handleClickOnCart())}
                    >
                        {document.documentElement.classList.contains('dark')
                            ? <img src={darkThemeCartIcon} className="w-5 h-5" />
                            : <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 ' fill='#050404' id="cart" x="0" y="0" version="1." viewBox="0 0 52 52">
                                <path d="m43.51 32.165 6.44-19.17a1 1 0 0 0-.14-.9.986.986 0 0 0-.81-.41H12.74l-1.29-5.21c-.47-1.66-2-2.82-3.72-2.82H3c-.55 0-1 .44-1 1 0 .55.45 1 1 1h4.73c.83 0 1.57.56 1.78 1.33l7.99 32.18a4.696 4.696 0 0 0-3.32 4.49c0 2.58 2.1 4.69 4.69 4.69 2.58 0 4.68-2.11 4.68-4.69 0-1-.31-1.93-.84-2.69h15.88c-.54.76-.85 1.69-.85 2.69 0 2.58 2.1 4.69 4.68 4.69 2.59 0 4.69-2.11 4.69-4.69 0-2.59-2.1-4.69-4.69-4.69-.04 0-.09 0-.13.01-.02-.01-.04-.01-.06-.01H19.51l-1.52-6.11h24.57c.43 0 .81-.28.95-.69z"></path>
                            </svg>
                        }
                        {totalInCart > 0 &&
                            <span className="inline-flex items-center justify-center w-4 h-4 p-[0.6rem] ms-2 text-[0.8rem] font-semibold text-[#f8f8f8] bg-[#0a5bf0d7] rounded-full absolute top-0 right-[-0.4rem] 
                    
                    dark:bg-[#4ff35749] dark:text-[#f5fff7]
                   "
                            >
                                {totalInCart}
                            </span>
                        }
                    </button >
                </IdentifyingTextOnHover>
            }
        </>
    )
}

export default cart