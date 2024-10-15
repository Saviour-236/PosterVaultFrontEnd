
import Posts from "../reusableComponents/posts";
import { useSelector } from "react-redux";
import ViewImageBox from "../reusableComponents/viewImageBox";
import { RootState } from "../Statemanagement/store";
function home() {
const post = useSelector((state :RootState) => state.viewImageSliceState);
    return (
        <>
           <main className="border border-black w-full">
             <Posts />
           </main>
         <section className="fixed m-auto rounded-lg z-100 border top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white">{ post && <ViewImageBox />} </section> 
        </>
    )
}

export default home