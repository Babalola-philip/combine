import { useEffect, useState } from "react"
import UserApi from "./UserApi"
import axios from "axios"
import {Link} from "react-router-dom"
import loading from "./image/loading.svg"

const User = () => {
    const [list, setlist] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let url = "https://api.github.com/users"

    useEffect(() => {
      
        axios.get(url).then((res)=>{
          console.log(res.data)
          setlist(res.data)
          setIsLoading(false)
        })
    }, [])
    
  return (
    <div>

      <button className="shadow-lg w-24 h-10 text-sm rounded-3xl m-5 border-2 border-red-500 transform hover:scale-95 duration-500 ease-linear  hover:border-green-500">
        <Link to={"/home"}>HOME</Link> 
      </button>
    
    {isLoading? 
      <div className="flex justify-center items-center h-96 mt-20 md:mt-60 lg:mt-80 xl:mt-20">
        <img src={loading} alt="" className="w-12 md:w-16" />
      </div>
      :
      <section className="p-8">
        <UserApi list={list}/>
      </section>
      
    }
      
    </div>
  )
}

export default User