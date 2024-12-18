
import Posts from "../reusableComponents/posts";
function home() {
  return (
    <>
      <main className=" w-[100vw] overflow-hidden">
        <Posts category="allPosts"/>
      </main>
    
    </>
  )
}

export default home