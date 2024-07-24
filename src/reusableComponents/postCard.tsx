// a react component that displays a  post card which have a img title and discrition 
import { Post } from "../Statemanagement/Slices/postSlice";
interface Props {
    post: Post
}
const PostCards: React.FC<Props> = ({ post }) => {
    return (
        <>
            {
                <div className="rounded  shadow-lg  ">
                    <img className="h-[20rem] w-[20rem] m-[1rem] rounded-lg border  " src={post.imageUrl} alt={post.alt} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <p className="">{post.description}</p>
                    </div>
                </div>
            }
        </>

    );
};

export default PostCards;
