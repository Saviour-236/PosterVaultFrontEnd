import { useEffect, useState } from "react";
import { Post, updatePostReducer } from "../../../Statemanagement/Slices/postSlice";
import { useDispatch } from "react-redux";
import { updatePostRequest } from "../../../utilities/updateRequests";
import toast from "react-hot-toast";
import edit from '../../../assets/edit.png';
import deleteIcon from '../../../assets/delete.png';
import tik from '../../../assets/tik.png';


interface Props {
    post: Post;
}
const PostCard: React.FC<Props> = ({ post }) => {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const handleEnableClick = () => {
        const updatedPost = { ...post, enable: !post.enable };
        dispatch(updatePostReducer(updatedPost))
        console.log('goind for update'
        )
        updatePostRequest(updatedPost)
            .then(async response => {
                if (!response.ok) {
                    const err = await response.json()
                    throw new Error(err.message)
                }
                toast.success('Post Updated')
                return response.json()
            })
            .catch(err => {
                toast.error(err.message)
                return err
            })
    }
    useEffect(() => {
        setIsVisible(true);
    })

    return (
        <>{/* Card */}
            <div className={`transition-opacity transition-shadow transition-[margin]   duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} w-fit bg-[#f7fcff]  rounded-lg p-4 shadow-sm shadow-[#b0d8f5] hover:my-[-1rem] hover:shadow-lg hover:shadow-[#3fd4f2] relative`}>
                <div className="">
                    <img
                        alt={post.alt}
                        src={post.imageUrl}
                        className="h-[10rem] w-[90] rounded-md object-cover"
                    />
                </div>
                <div className="mt-1">
                    <p className=" text-[1.5rem]"> {post.title}</p>
                    <p className="text-lg text-gray-1000  break-word">{post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-8 text-xs ">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <button className="inline-flex items-center justify-center rounded-md border bg-white px-2 py-1 text-center text-base font-medium text-dark shadow-1 hover:border-[#09a5e3] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3">
                                <img src={edit} alt="" />
                            </button>
                            <button className="inline-flex items-center justify-center rounded-lg border bg-white px-2 py-1 text-center text-base font-medium text-dark shadow-sm  ">
                                <img src={deleteIcon} className="h-[3rem]" alt="delete.png" />
                            </button>
                            {/*  for enable or disable*/}
                            <div>
                                <div onClick={handleEnableClick} className="absolute top-[0.5rem] border border-[#09a5e3] bg-white rounded-full right-[0.5rem] ">
                                    {post.enable
                                        ? <img src={tik} alt="" className="h-[1.5rem]  " />
                                        : <div className="   rounded-full h-[1.5rem] w-[1.5rem] ">
                                        </div>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default PostCard;