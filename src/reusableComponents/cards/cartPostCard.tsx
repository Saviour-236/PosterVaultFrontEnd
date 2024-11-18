
import { Poster } from '../../Statemanagement/interfaces';
import RemoveFromCartButton from '../Buttons/removeFromCart';
function cartPostCard({ post }: { post: Poster }) {
    return (
        <div className='border flex p-3 space-x-2 rounded-md  border-[#cececf] bg-[#f6feff]
        dark:bg-transparent dark:shadow-lg dark:shadow-[#2d3052] dark:border-[#1f0cca67]
        '>
            <div className='  flex items-center' >
                <img src={post.imageUrl} alt={post.alt} className='rounded-md h-[5rem] object-cover border border-none' />
            </div>
            <div className='space-y-1 
            dark:border-[#180c81]
            '>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className='flex justify-between '>
                    <p>Price : </p>
                    <p className='border border-[#13e47b] rounded-lg px-3  
                    dark:border-[#06ec799f]
                    '>${post.price}</p>
                </div>
                <p>Quantity: {2}</p>
                <RemoveFromCartButton id={post._id} />
            </div>
        </div>
    )
}

export default cartPostCard