// this is a button which will be used to add a new post
import { useState } from "react"
import NewPostForm from './newPostForm'
import add from '../../../assets/add.png'

function addNewPost() {
  const [showFrom, setShowForm] = useState<boolean>(false)
  const handleAddButton = () => {
    setShowForm(true)
  }
 
  return (
    <>
      {showFrom && <NewPostForm />}
      <button onClick={handleAddButton} className="fixed  bottom-8 right-10">
        <img src={add} alt="" className="h-[4rem]"/>
      </button>
    </>
  )
}

export default addNewPost
