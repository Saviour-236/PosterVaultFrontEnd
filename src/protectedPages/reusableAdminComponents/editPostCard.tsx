
function editPostCard( {id}:{id:string}) {
    console.log('edit post card and id is ', id)
  return (
    <div className="border p-3">{id}</div>
  )
}

export default editPostCard