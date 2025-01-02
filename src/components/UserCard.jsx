import React from 'react'
import Data from "../files/Data"
const UserCard = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center",alignItems:"center",margin:"10px"}}>
        {
            Data.map((user)=>{
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
