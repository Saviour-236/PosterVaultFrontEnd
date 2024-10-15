import { useDispatch, useSelector } from "react-redux";
import { initializeViewImage } from "../Statemanagement/Slices/viewImageSlice";
import { RootState } from "../Statemanagement/store";
import { useEffect } from "react";
import { Post } from "../Statemanagement/interfaces";
function viewImageBox() {
    const dispatch = useDispatch();
    const post: Post = useSelector((state: RootState) => state.viewImageSliceState);
    useEffect(() => {
        return () => {
            dispatch(initializeViewImage(null));
        }
    }, [])
    return (
        <>
            <section className="border flex  ">
                <div><img src={post.imageUrl} alt={post.alt} />
                </div>
                <div>
                    <p>{post.title}</p>
                    <p>{post.price}</p>
                    <button>Add to cart</button>
                    <button>Buy</button>
                </div>
            </section>
        </>
    )

}

export default viewImageBox