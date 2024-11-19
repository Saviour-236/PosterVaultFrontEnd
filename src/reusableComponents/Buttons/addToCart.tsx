import { useDispatch, useSelector, } from "react-redux";
import { Poster } from "../../Statemanagement/interfaces";
import { addTocart } from "../../Statemanagement/Slices/cartSlice";
import { useEffect, useState } from "react";
import { setToastValue } from "../../Statemanagement/Slices/globelVariables";
import { RootState } from "../../Statemanagement/store";
interface Props {
    post: Poster
}
function AddToCart({ post }: Props) {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.userSliceState);
    const [isRendered, setIsRendered] = useState(false)
    const handleAddToCart = (post: Poster) => {
        if(!state.token){
            dispatch(setToastValue({ type: "error", message: " Please sign In First " }))
            return;
        }
        dispatch(addTocart(post))
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
                className={`rounded-lg border   ${isRendered ? "opacity-[1] scale-100 " : "opacity-20 scale-95 "}  transition-all duration-[0.9s] ease-linear bg-[#ffffff75] px-4 py-1 text-sm font-medium text-white
                            dark:bg-[#5262839c] dark:border-[#526283] dark:text-[#f7fcff] `}
                onClick={() => handleAddToCart(post)}
            >
                Add to cart
            </button>
        </>
    )
}

export default AddToCart