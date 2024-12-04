
import { cartPoster } from '../../Statemanagement/interfaces';
import RemoveFromCartButton from '../Buttons/removeFromCart';
function cartPostCard({ item }: { item: cartPoster }) {
    return (
        <div className='border flex p-3 space-x-2 rounded-md  border-[#cececf] bg-[#f6feff]
        dark:bg-transparent dark:shadow-lg dark:shadow-[#413f3f] dark:border-[#1f0cca67]
        '>
            <div className='  flex items-center' >
                <img src={item.poster.imageUrl} alt={item.poster.alt} className='rounded-md h-[5rem] object-cover border border-none' />
            </div>
            <div className='space-y-1 
            dark:border-[#180c81]
            '>
                <h3>{item.poster.title}</h3>
                <p>{item.poster.description}</p>
                <div className='flex justify-between '>
                    <p>Price : </p>
                    <p className='border dark:border-[#ffffff] rounded-lg px-3  
                    dark:border-[#06ec799f]
                    '>${item.poster.price}</p>
                </div>
                <p className='flex justify-between ' > Quantity:   <p className='border dark:border-[#262fa8] px-3 rounded-md'>{item.quantity}</p> </p>
                <RemoveFromCartButton id={item.poster._id} />
            </div>
        </div>
    )
}

export default cartPostCard