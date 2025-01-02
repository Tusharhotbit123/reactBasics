import React,{useState} from 'react'

const Form = () => {

    const [data,setData]=useState({
        username:"",
        email:"",
        password:""
    })


    const handleChange=(e)=>{
        
        const {name,value}=e.target

        setData((prev)=>({
            ...prev,
            [name]:value
        }))

    }


    const handleSubmit=(e)=>{
        e.preventDefault()
         const {name,value}=e.target;
         setData((prev)=>({
            ...prev,
            [name]:value
         }))

         console.log(data);
         setData({
            username:"",
            email:"",
            password:""
        })
    }

   
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
       <form onSubmit={handleSubmit} className='form'>
          <label>
            Username:<input type="name" name="username" value={data.username} onChange={handleChange} className='input' placeholder="please enter your username"/>
          </label>
          <label>
            Email:<input type="email"  name="email" value={data.email} onChange={handleChange} style={{marginLeft:"35px"}} className='input' placeholder="please enter your email"/>
          </label>
          <label>
            Password:<input type="password" name="password" value={data.password} onChange={handleChange} className='input' placeholder="please enter your password"/>
          </label>
          <button className='btn'>Submit</button>
       </form>      
    </div>
  )
}

export default Form
