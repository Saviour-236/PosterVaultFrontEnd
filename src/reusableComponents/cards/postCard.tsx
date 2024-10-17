// a react component that displays a  post card which have a img title and discrition 
import { useEffect, useState } from "react";
import { Post } from "../../Statemanagement/interfaces";
import { useDispatch } from "react-redux";
import { initializeViewImage } from "../../Statemanagement/Slices/viewImageSlice";
import AddToCart from "../Buttons/addToCart";
import BuyButton from "../Buttons/buy";
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
                        className={` h-[6rem]  rounded-md object-cover hover:cursor-pointer  `}
                        onClick={() => handleImageClick()}
                    />
                </div>
                <div className="mt-1 w-full  ">

                    {/* Price */}
                    <div className="flex justify-between">
                        <span className="
                        text-[0.9rem]
                        max-sm:text-[0.8rem]">
                            Price
                        </span>
                        <p className="text-right text-[#9ca0a0] text-[0.8rem] ">
                            &#8377; {post.price}
                        </p>
                    </div>

                    {/* title */}
                    <p className=" text-[1.3rem]  text-[#505152] w-full inline-block 

                    dark:text-[#b2c0c9]
                    max-sm:text-[1rem]
                    ">
                        {post.title}
                    </p>
                    <div className="flex gap-x-2">

                        {/* Add to cart button  */}
                        <AddToCart post={post} />

                        {/* Buy button */}
                        <BuyButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCards;
