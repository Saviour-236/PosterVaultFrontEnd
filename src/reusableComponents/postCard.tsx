// a react component that displays a  post card which have a img title and discrition 
import { useEffect, useState } from "react";
import { Post } from "../Statemanagement/interfaces";
import { useDispatch } from "react-redux";
import { initializeViewImage } from "../Statemanagement/Slices/viewImageSlice";
interface Props {
    post: Post
}
const PostCards: React.FC<Props> = ({ post }) => {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setIsVisible(true);
    })
    const handleImageClick = () => {
        dispatch(initializeViewImage(post))
    }
    return (
        <>
            <div className={`transition-opacity  duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} h-auto w-fit bg-[#f7fcff] transition-shadow duration-900 ease-in rounded-lg p-2   shadow-sm shadow-[#48678b]  
            
            hover:shadow-lg hover: hover:shadow-[#7eb9e4] relative 
            
            dark:bg-[#526283] dark:bg-opacity-50 group`}
                style={{ transition: 'margin 0.9s' }}>
                <div className="justify-center  flex  ">
                    <img
                        src={post.imageUrl} alt={post.alt}
                        className={` h-[6rem]  rounded-md object-cover hover:cursor-pointer group-hover:scale-30  `}
                        onClick={() => handleImageClick()}
                    />
                </div>
                <div className="mt-1 w-full  ">
                   <p className="text-right  text-[1rem] ">
                    &#8377; {post.price}</p> 
                    <p className=" text-[1.5rem] w-full inline-block"> {post.title}</p>
                    <div className="flex gap-x-2">
                        <button
                            type="button"
                            className="rounded-lg border  bg-gray-50 px-4 py-1 text-sm font-medium text-gray-600 
                            dark:bg-[#526283] dark:border-[#526283] dark:text-[#f7fcff]"
                        >
                            Add to cart
                        </button>
                        <button
                            type="button"
                            className="rounded-lg border bg-green-50 px-4 py-1 text-sm font-medium text-green-600 
                            dark:bg-[#58926d] dark:border-[#526283] dark:bg-opacity-50  dark:text-[#9ef1a2]"
                        >
                            buy
                        </button>
                    </div>
                </div>
            </div>
            {/* view image box  */}
        </>
    );
};

export default PostCards;
