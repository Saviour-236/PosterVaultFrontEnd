import { useEffect, useState } from "react";
import {
    deletePostReducer,
    updatePostReducer
} from "../../../Statemanagement/Slices/postSlice";
import { Post } from "../../../Statemanagement/interfaces";
import { useDispatch } from "react-redux";
import { updatePostRequest } from "../../../apiRequests/updateRequests";
import toast from "react-hot-toast";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import tik from "../../../assets/tik.png";
import cross from "../../../assets/cross.png";
import IndentifyingTextOnHover from "../../../utilities/IndentifyingTextOnHover";
import save from "../../../assets/save.png";
import deletePostRequest from "../../../apiRequests/deleteRequests";
interface Props {
    post: Post;
}



const PostCard: React.FC<Props> = ({ post }) => {
    const [isVisible, setIsVisible] = useState(false);
    // const dispatch = useDispatch();
    const [inEditMode, setInEditMode] = useState(false);
    const [postData, setPostData] = useState(post);
    const [isDelete, setIsDelete] = useState(false); // for delete popup
    const [image, setImage] = useState<File>();
    const dispatch = useDispatch();
    let formData = new FormData();


    // for handling the enable disable of image
    // const handleEnableClick = () => {
    //     const updatedPost = { ...post, enable: !post.enable };
    //     dispatch(updatePostReducer(updatedPost));
    //     console.log("goind for update");
    //     updatePostRequest(updatedPost)
    //         .then(async (response) => {
    //             if (!response.ok) {
    //                 const err = await response.json();
    //                 throw new Error(err.message);
    //             }
    //             toast.success("Post Updated");
    //             return response.json();
    //         })
    //         .catch((err) => {
    //             toast.error(err.message);
    //             return err;
    //         });
    // };

    //handle the edit event
    const handleEditClick = (e: any) => {
        if (e.target.id == "cross") {
            setPostData(post);
        }
        setInEditMode(!inEditMode);

    };
    // ------------------------Handling save event---------------------
    const handleSaveEvent = () => {

        formData.append("image", image || postData.imageUrl);
        formData.append("Data", JSON.stringify(postData));
        //for toast controll
        let toastId = toast.loading("Updating Post");
        updatePostRequest(formData)
            .then(async (response) => {
                formData = new FormData();
                toast.dismiss(toastId);
                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.message);
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                dispatch(updatePostReducer(data));
                toast.success("Post Updated");
                setInEditMode(false);
                //   dispatch(updatePostReducer(postData));
            })
            .catch((err) => {
                toast.dismiss(toastId);
                toast.error(err.message);
                return err;
            });

    }

    //handling the change event for data handling

    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(postData)
        //console.log(e.target.id);
        switch (e.target.id) {
            case "file":
                //   console.log("file");
                //  console.log(e.target.files && e.target.files[0]);
                if (e.target.files && e.target.files[0]) {
                    setImage(e.target.files[0]);
                    setPostData({ ...postData, imageUrl: URL.createObjectURL(e.target.files[0]) });
                }
                break;
            case "title":
                setPostData({ ...postData, title: e.target.value });
                break;
            case "discription":
                console.log("description");
                setPostData({ ...postData, description: e.target.value });
                break;
            case "price":
                if (e.target.value.length > 4) {
                    toast.error("Price should be less than 9000");
                    break;
                }
                setPostData({ ...postData, price: parseInt(e.target.value) });
                break;
            default:
                break;
        }
    };

    // handling the close event of edit mode

    // handling Delete event
    const handleDeleteEvent = (id: string) => {
        //console.log(id)
        deletePostRequest(id)
            .then(async res => {
                //console.log(res)
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                let a = await res.json();
                toast.success(a.message);
                dispatch(deletePostReducer(id))
            })
            .catch(err => {
                toast.error(err.toString())
            })
    }
    useEffect(() => {
        setIsVisible(true);
    });

    return (
        <>
            {/* Card */}
            <div
                className={` border   transition-[height,transform]  duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}  bg-[#f7fcff]  rounded-lg p-4 shadow-sm shadow-[#b0d8f5] hover:translate-y-[-1rem] hover:shadow-lg hover:shadow-[#3fd4f2]  relative dark:bg-opacity-10 block  h-[20rem] ${inEditMode && 'h-full overflow-hidden'} }`}
            >
                <div className="">
                    <img
                        alt={postData.alt}
                        src={postData.imageUrl}
                        className={`h-[10rem]  w-full rounded-md object-cover ${inEditMode ? "border rounded border-[#237392] " : "border-none"
                            }`}
                    />
                    {inEditMode && (
                        <input
                            id="file"
                            onChange={handleChangeEvent}
                            type="file"
                            className="block w-full text-sm mt-2 p-1 text-slate-500  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:hover:cursor-pointer border rounded-md file:text-violet-700 hover:file:bg-violet-100"
                        />
                    )}
                </div>
                <div className="mt-1 space-y-1">
                    {/* Title */}
                    <span>
                        {inEditMode && (
                            <label htmlFor="title" className="text-xs cursor-pointer ">
                                Title
                            </label>
                        )}
                        <input
                            id="title"
                            onChange={handleChangeEvent}
                            value={postData.title}
                            className={`text-[1rem] block w-full outline-none ${inEditMode
                                ? "border rounded-md p-2  "
                                : "border-none"
                                }`}
                            disabled={!inEditMode}
                            placeholder="Title"
                        />
                    </span>
                    {/* Description */}
                    <span>
                        {inEditMode && (
                            <label
                                htmlFor="discription"
                                className="text-xs m-0 cursor-pointer"
                            >
                                Description
                            </label>
                        )}
                        <input
                            onChange={handleChangeEvent}
                            id="discription"
                            value={postData.description}
                            className={`ext-[0.7rem] w-full block italic break-word ${inEditMode
                                ? "border outline-none rounded-md p-2"
                                : "border-none"
                                }`}
                            disabled={!inEditMode}
                            placeholder="Description"
                        />
                    </span>
                    <pre className=" t"></pre>
                    <div className="mt-4  flex items-center gap-8 text-xs ">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 ">
                            {/* Edit  button */}
                            <IndentifyingTextOnHover text="Edit">
                                <div
                                    className="inline-flex items-center justify-center rounded-md border bg-white px-[0.5rem] py-[0.25rem] text-center cursor-pointer text-base font-medium text-dark shadow-1 hover:border-[#09a5e3] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3"

                                >
                                    {inEditMode ? (
                                        <img id="cross" onClick={handleEditClick} src={cross} alt="" className="h-[2rem] " />
                                    ) : (
                                        <img id="edit" onClick={handleEditClick} src={edit} alt="" className="h-[2rem] " />
                                    )}
                                </div>
                            </IndentifyingTextOnHover>
                            <IndentifyingTextOnHover text="Delete">
                                <button
                                    className="inline-flex items-center justify-center rounded-md border bg-white px-[0.5rem] py-[0.25rem] text-center text-base font-medium text-dark shadow-1 hover:border-[#09a5e3] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3"
                                    onClick={() => setIsDelete(true)}
                                >
                                    <img src={deleteIcon} className="h-[2rem]" alt="delete.png" />
                                </button>
                            </IndentifyingTextOnHover>





                            {/*  save button*/}
                            {inEditMode &&
                                <IndentifyingTextOnHover text="Save">
                                    <button
                                        onClick={handleSaveEvent}
                                        className="inline-flex items-center justify-center rounded-md border bg-white px-[0.5rem] py-[0.25rem] text-center text-base font-medium text-dark shadow-1 hover:border-[#09a5e3] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3">
                                        <img
                                            src={save}
                                            className="h-[2rem]"
                                            alt="save" />
                                    </button>
                                </IndentifyingTextOnHover>}


                            {/*  for enable or disable*/}
                            <IndentifyingTextOnHover text="Enable">
                                <div
                                    // onClick={handleEnableClick}
                                    className=" top-[0.5rem] border border-[#09a5e3] bg-white rounded-full right-[0.5rem] "
                                >
                                    {post.enable ? (
                                        <img src={tik} alt="" className="h-[1.5rem]  " />
                                    ) : (
                                        <div className="   rounded-full h-[1.5rem] w-[1.5rem] "></div>
                                    )}
                                </div>
                            </IndentifyingTextOnHover>
                            <div className={`w-fit transition-bg duration-500 ease-in flex border font-bold m-3 text-[0.9rem] p-[0.5rem] rounded-md bottom-0 right-0 hover:bg-[#5fe4e4] bg-[#b6ecec] bg-opacity-90  ${inEditMode && "border border-black "
                                }`}>
                                ₹
                                <input
                                    id="price"
                                    type="number"
                                    onChange={handleChangeEvent}
                                    value={postData.price}
                                    disabled={!inEditMode}
                                    className="bg-transparent appearance-none mx-1 min-w-[2rem] outline-none w-[3rem]"
                                    maxLength={4}
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*----popup model for sureing the delete operation--- */}
            {isDelete
                && <div className={`dark:bg-neutral-300 rounded-lg bg-white p-8 transition-opacity	${isDelete ? "opacity-100" : "opacity-0"} duration-700
                 fixed z-10 top-[50%] left-[50%] translate-x-[-50%]	translate-y-[-50%]	shadow-2xl`}>
                    <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

                    <p className="mt-2 text-sm text-gray-500 ">
                        Deleting 
                        <span
                            className="rounded mx-2 bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
                            >
                            {post.title}
                        </span>
 post will delete it permanently from database are you sure to delete it?
                    </p>

                    <div className="mt-4 flex gap-2">
                        <button
                            type="button"
                            className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                            onClick={() => (handleDeleteEvent(post._id))}>
                            Yes, I'm sure
                        </button>

                        <button
                            type="button"
                            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                            onClick={() => setIsDelete(false)}>
                            No, go back
                        </button>
                    </div>
                </div>}
        </>
    );
};

export default PostCard;
