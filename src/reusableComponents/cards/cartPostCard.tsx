
import { Post } from '../../Statemanagement/interfaces';
import RemoveFromCartButton from '../Buttons/removeFromCart';
function cartPostCard({ post }: { post: Post }) {
    return (
        <div className='border flex p-3 space-x-2 rounded-md  border-[#c9c6c6] bg-[#f6feff]'>
            <div className='  flex items-center' >
                <img src={post.imageUrl} alt={post.alt} className='rounded-md h-[5rem] object-cover border border-none' />
            </div>
            <div className='space-y-1'>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>price: {post.price}</p>
                <p>quantity:</p>
                <RemoveFromCartButton id={post._id} />
            </div>
        </div>
    )
}

export default cartPostCard