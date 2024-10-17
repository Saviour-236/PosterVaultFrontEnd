import { useDispatch, } from "react-redux";
import { Post } from "../../Statemanagement/interfaces";
import { addTocart } from "../../Statemanagement/Slices/cartSlice";
interface Props {
    post:Post
}
function AddToCart( {post}:Props) {
    const dispatch = useDispatch();
    const handleAddToCart = (post:Post) => {
        dispatch(addTocart(post))
    }
    return (
        <>
            <button
                type="button"
                className="rounded-lg border  bg-gray-50 px-4 py-1 text-sm font-medium text-gray-600 
                            dark:bg-[#526283] dark:border-[#526283] dark:text-[#f7fcff]"
                onClick={() => handleAddToCart(post)}
            >
                Add to cart
            </button>
        </>
    )
}

export default AddToCart