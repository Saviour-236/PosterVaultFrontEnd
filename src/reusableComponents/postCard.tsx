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
            <div className={`transition-opacity  duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} h-[10rem] w-[10rem] bg-[#f7fcff] transition-margin duration-900 ease-in rounded-lg p-2   shadow-sm shadow-[#b0d8f5] hover:my-[-0.5rem] hover:shadow-lg hover: hover:shadow-[#3fd4f2] relative dark:bg-[#6a6d6e] group `}
                style={{ transition: 'margin 0.9s' }}>
                <div className="justify-center flex">
                    <div className="border m-3 text-[0.9rem] px-[0.5rem] rounded absolute bottom-0 right-0  bg-green-300 bg-opacity-90">
                    &#8377; {post.price}
                    </div>
                    <img
                        src={post.imageUrl} alt={post.alt}
                        className="h-[8rem] w-[9rem] rounded-md object-cover hover:cursor-pointer group-hover:scale-30 group-hover:my-[-1rem]  group-hover:absolute"
                        onClick={() => console.log('clicked')}
                    />
                </div>
                {/* <div className="mt-1 w-fit  ">
                    <p className=" text-[1.5rem]"> {post.title}</p>
                    <p className="text-lg text-gray-1000 ">{post.description}
                    </p>
                </div> */}
            </div>
        </>
    );
};

export default PostCards;
