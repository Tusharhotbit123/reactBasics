import React from 'react'
import Data from "../files/Data"
import useFetchUrl from '../files/useFetchUrl'

const UserCard = () => {

  const url="https://jsonplaceholder.typicode.com/posts"
  const {data,loading,error}=useFetchUrl(url)

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error:{error}</div>
  }

  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center",alignItems:"center",margin:"10px"}}>
        {
            data.map((user)=>{
                return(
                    <div key={user.userId} style={{border:"2px solid black",margin:"5px",width:"200px",height:"200px",padding:"2px",overflow:"hidden",textOverflow:"ellipsis"}}>
                         <h3>{user.id}</h3>
                         <h6>{user.title}</h6>
                         <p>{user.body}</p>
                    </div>
                )
            })
        }
             
    </div>
  )
}

export default UserCard
