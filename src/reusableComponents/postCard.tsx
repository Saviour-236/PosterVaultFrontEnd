// a react component that displays a  post card which have a img title and discrition 
import { useEffect, useState } from "react";
import { Post } from "../Statemanagement/Slices/postSlice";

interface Props {
    post: Post
}
const PostCards: React.FC<Props> = ({ post }) => {
    const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
        setIsVisible(true);
})
    return (
        <>
            <div className={`transition-opacity transition-shadow transition-[margin]   duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} w-fit bg-[#f7fcff]  rounded-lg p-4 shadow-sm shadow-[#b0d8f5] hover:my-[-1rem] hover:shadow-lg hover:shadow-[#3fd4f2] relative dark:bg-[#6a6d6e]` }>
                <div className="">
                    <img
                        src={post.imageUrl} alt={post.alt}
                        className="h-[10rem] w-[90] rounded-md object-cover"
                    />
                </div>
                <div className="mt-1">
                    <p className=" text-[1.5rem]"> {post.title}</p>
                    <p className="text-lg text-gray-1000  break-word">{post.description}
                    </p>
                </div>
            </div>
        </>

    );
};

export default PostCards;
