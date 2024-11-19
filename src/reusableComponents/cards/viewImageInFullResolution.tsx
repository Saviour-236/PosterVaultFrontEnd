
import {Poster} from "../../Statemanagement/interfaces";

function viewImageInFullResolution({image}: {image: Poster}) {
  return (
    <div className="">
        <img src={image.imageUrl} alt={image.alt} className="max-h-[20rem] max-w-[10rem] " />
    </div>
  )
}

export default viewImageInFullResolution