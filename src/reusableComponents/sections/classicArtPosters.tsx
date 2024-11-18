// A section which contain all kinds of category availabe store 



import { useSelector } from "react-redux"
import { RootState } from "../../Statemanagement/store"
export default function categoriesSection() {
  const state = useSelector((state: RootState) => state.postSliceState.classicArt);
  console.log(state)
  return (
    <>
      classicArt
    </>
  )
}
