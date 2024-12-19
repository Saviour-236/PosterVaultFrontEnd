import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Statemanagement/Slices/cartSlice";
import IdentifyingTextOnHover from "../../utilities/IdentifyingTextOnHover";
function removeFromCartButton({ id }: { id: string }) {
    const dispatch = useDispatch();
    const handleRemoveFromCartClick = (id: string) => {
        dispatch(removeFromCart(id))
    }
    return (
        <>
            <IdentifyingTextOnHover text="remove from cart">
                <button onClick={() => handleRemoveFromCartClick(id)} className="  hover:cursor-pointer z-[49]
                
                border p-1 rounded-lg text-[0.8rem] border-[#c9c7c7] bg-[#e3e7e7]
               dark:bg-[#f70f0f6c] dark:border-[#f70f0f6c] 
               ">
                   Remove From Cart
                </button>
            </IdentifyingTextOnHover >

        </>
    )
}

export default removeFromCartButton

