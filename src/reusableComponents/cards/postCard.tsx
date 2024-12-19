// a react component that displays a  post card which have a img title and discrition 
import {  useState } from "react";
import { Poster } from "../../Statemanagement/interfaces";
import AddToCart from "../Buttons/addToCart";
import BuyButton from "../Buttons/buy";
interface Props {
    post: Poster;
}
const PostCards: React.FC<Props> = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isRendered, setIsRendered] = useState(false);



    const handleOnLoad = () => {
        setIsLoaded(true)
    }

    const handleLikeClick = () => {
        setLiked(!liked)
    }
    const handleCardMouseEnter = () => {
        //for rendring the animatin for price tag   
        setTimeout(() => {
            setIsRendered(true)
            // console.log("rendered")
        }, 100)

        setIsHovered(true)
        // console.log("mouse Enter")

    }
    const handleCardMouseLeave = () => {
        setIsRendered(false)
        setIsHovered(false)
    }
  
    return (
        <>

            <div className="h-fit w-fit   relative"
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
            >
                <h1 className="opacity-0 absolute">{post.title}</h1>
                <h3 className="opacity-0 absolute">{post.description}</h3>
                {/* loading skeleton */}
                {!isLoaded && <div role="status" className="rounded-lg  min-h-[10rem] min-w-[10rem]   flex items-center justify-center ">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>}
                {/* actual image */}
                <img src={post.imageUrl} alt={post.alt} className={`${!isLoaded 
                ? "opacity-0 h-0" 
                : " opacity-100  "} 
                hover:cursor-pointer w-[24vw] rounded-md
                 transition-opacity duration-1000 ease-linear 
                 max-sm:w-[47vw]
                 max-md:w-[32vw]
                 `}

                onLoad={handleOnLoad}
                />
                {/* like button */}
                {
                    isLoaded &&
                    <div className="absolute top-0 right-3">
                        <abbr title="Like">
                            <p className="text-[1.5rem] hover:cursor-pointer"
                                onClick={handleLikeClick}
                            >{liked ? "❤️" : "🤍"} </p>
                        </abbr>
                    </div>
                }

                {/* Price */}
                {isHovered && isLoaded &&
                    <div className={`flex rounded-r-md   
                        ${isRendered ? "opacity-[1] scale-100 m-0" : "opacity-20  ml-[-2rem] "}  transition-all duration-[0.9s] ease-linear text-[#010201] bg-[#ffffffa9] justify-between absolute top-2 px-2 left-0
                  dark:bg-[#1c2258cc] dark:text-[#ffffff]
                  `}
                    >
                        💸 &#8377;{post.price}
                    </div>
                }
                {isHovered && isLoaded &&
                    <div className="flex  absolute bottom-1  w-full  justify-around  
                    max-md:space-x-5
                    ">
                        {/* Add to cart button  */}
                        <AddToCart post={post} />
                        {/* Buy button */}
                        <BuyButton />
                    </div>
                }
                    {/* image view box after image click */}
            </div>
        </>
    );
};

export default PostCards;
