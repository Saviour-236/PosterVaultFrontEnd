import { useDispatch, } from "react-redux";
import { initializeViewImage } from "../Statemanagement/Slices/viewImageSlice";
import { Poster } from "../Statemanagement/interfaces";
interface Props {
    post: Poster,
}
function viewImageBox({ post }: Props) {
    const dispatch = useDispatch();
    const handleCloseClick = () => {
        dispatch(initializeViewImage(null));
    }
    return (
        <>
            <section className="border relative z-51 p-5 border-[#fff] shadow-md  rounded-lg ">
                <div>
                    <img 
                    src={post.imageUrl} 
                    alt={post.alt} 
                    className="border"/>
                </div>
                <button className="border px-3 text-white border-[#c40606] fixed top-3 right-3 rounded-xl bg-[#e41212b9]   "
                 onClick={() => handleCloseClick()}>
                        close
                    </button>
            </section>
        </>
    )

}

export default viewImageBox