import { useState,useEffect } from "react";

const useFetchUrl=(url)=>{

    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{

        const fetchData=async()=>{
            try{

                const result=await fetch(url)

                if(!result.ok){
                    throw new Error("Network response was not ok!")
                }

                const res=await result.json()

                setData(res)

            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false);   
            }
        }

        fetchData();
    },[url])

    return {data,loading,error}

}

export default useFetchUrl;