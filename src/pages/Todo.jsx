import React ,{useState,useEffect} from 'react'
import img from "../assets/bin.png"
import edit from "../assets/edit.png"
import editbtn from "../assets/editbtn.png"

const Todo = () => {

    const [data,setData]=useState("")
    const [arr,setArr]=useState(JSON.parse(localStorage.getItem("arr")))
    const [flag,setFlag]=useState(false)
    const [id,setId]=useState(null)

    
    useEffect(()=>{
        localStorage.setItem("arr", JSON.stringify(arr));
    },[arr])

    const handleChange=(e)=>{

        setData(e.target.value)
        
    }
    
    const handleClick=()=>{
         

         const newObj={
            id:arr.length+1,
            text:data
         }

          setArr([...arr,newObj])
          setData("")
    }

     const handleEdit=(id)=>{

        setData(arr[id-1].text)        
        setFlag(true)
        setId(id)

     }

     const handleReEdit = () => {
        const updatedArr = arr.map((obj) =>{ 
           return obj.id === id ? { ...obj, text: data } : obj
         } // Update the matching item
        );
        setArr(updatedArr);
        setData(""); // Clear the input field
        setFlag(false); // Reset the flag
    };
    
    const handleDelete=(id)=>{
        const newArr=arr.filter(obj=>obj.id!==id)
        setArr(newArr)
    }

  return (
    <div className='h-[500px] w-[500px] bg-white border rounded-xl flex flex-col items-center'>

        <div className='flex items-center'>
        <input name="task" className=' border-black border-2 p-2 h-10 w-96 mt-8 rounded-xl mr-4 pl-8 ' placeholder="enter your task here"  value={data} onChange={handleChange}/>
        {
            !flag ?(
                
                <button onClick={handleClick} className="bg-blue-400 h-12 w-12 rounded-full font-bold text-white text-2xl text-center pb-1 mt-8 border-2 border-blue-700 hover:scale-110 hover:transition-all">+</button>
            ):(
                <button onClick={handleReEdit} className="bg-green-300 h-12 w-12 mt-8 rounded-full hover:scale-105 hover:transition-all"><img className='h-8 w-8 ml-2' src={editbtn}/></button>

            )
        }  
        </div>
        <div className='mt-16'>
            <ul className=''>
                {
                    arr.map((obj)=>{
                        return(
                            <div key={obj.id} className='flex '>
                                <li className='h-14 w-96  pl-2  m-2 bg-blue-400  text-white font-bold rounded-lg pt-4 hover:scale-105 hover:transition-all' >{obj.text}</li>
                                <button onClick={()=>handleEdit(obj.id)}><img className='h-14 w-12 hover:scale-110 ml-2 hover:transition-all' src={edit}/></button>
                                <button onClick={()=>handleDelete(obj.id)}><img className='h-8 w-8 hover:scale-110  hover:transition-all' src={img}/></button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>

    </div>
  )
}

export default Todo
