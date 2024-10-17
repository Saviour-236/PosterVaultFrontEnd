import { useDispatch, } from "react-redux";
import { initializeViewImage } from "../Statemanagement/Slices/viewImageSlice";
import { Post } from "../Statemanagement/interfaces";
import AddToCart from "./Buttons/addToCart";
interface Props {
    post: Post,
}
function viewImageBox({ post }: Props) {
    const dispatch = useDispatch();
    const image = post;
    const handleCloseClick = () => {
        dispatch(initializeViewImage(null));
    }
    return (
        <>
            <section className="border flex z-51 ">
                <div>
                    <img 
                    src={post.imageUrl} 
                    alt={post.alt} 
                    className="border"/>
                </div>

                {/* buttons  */}
                <div>
                    <button onClick={() => handleCloseClick()}>
                        close
                    </button>
                    <p>{image.title}</p>
                    <p>{image.price}</p>
                <div>
                <AddToCart post={post} />
                    <button
                        type="button"
                        className="rounded-lg border bg-green-50 px-4 py-1 text-sm font-medium text-green-600 
                            dark:bg-[#58926d] dark:border-[#526283] dark:bg-opacity-50  dark:text-[#9ef1a2]"
                    >
                        buy
                    </button>
                </div>
                </div>
            </section>
        </>
    )

}

export default viewImageBox