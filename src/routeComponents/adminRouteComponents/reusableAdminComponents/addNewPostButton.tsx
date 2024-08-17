// this is a button which will be used to add a new post
import { useState } from "react"
import NewPostForm from './newPostForm'
import add from '../../../assets/add.png'
import cross from '../../../assets/cross.png'
function addNewPost() {
  const [showFrom, setShowForm] = useState<boolean>(false)
  const handleAddButton = () => {
    setShowForm(!showFrom)
  }
 
  return (
    <>
      {showFrom && <NewPostForm />}
      <button onClick={handleAddButton} className="fixed  bottom-8 right-10">
      {showFrom
      ? <img src={cross} alt="" className="h-[4rem]"/> 
      : <img src={add} alt="" className="h-[3.5 rem]"/>} 
      </button>
    </>
  )
}

export default addNewPost
