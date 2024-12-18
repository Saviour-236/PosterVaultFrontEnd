import ShowCartItems from "../reusableComponents/showCartItems"
import Posts from "../reusableComponents/posts"
function cartPage() {
    return (
        <>
            <ShowCartItems />
            <Posts category={"allPosts"}/>
        </>
    )
}

export default cartPage