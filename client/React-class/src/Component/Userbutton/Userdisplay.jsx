
import {Link, useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import loading from "./image/loading.svg"
  

const Userdisplay = () => {
   const {username}= useParams()
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let url = `https://api.github.com/users/${username}`

    useEffect(() => {
      
        axios.get(url).then((res)=>{
          console.log(res.data)
          setUser(res.data)
          setIsLoading(false)
        })
    }, [])
    
  return (
    <>
        <button className="shadow-lg w-24 h-10 text-sm rounded-3xl m-5 border-2 border-red-500 transform hover:scale-95 duration-500 ease-linear hover:border-green-500 cursor-pointer">
            <Link to={"/users"}>USER</Link> 
        </button>


        {isLoading? 
            <div className="flex justify-center items-center h-96 mt-20 md:mt-60 lg:mt-80 xl:mt-20">
                <img src={loading} alt="" className="w-12 md:w-16" />
            </div>
            :
            <section className="p-3">

            <div className=" flex flex-col m-auto gap-3 shadow-lg pb-4 rounded-2xl overflow-hidden border-4 border-green-500  md:w-96">

                <span>
                    <img src={user.avatar_url} alt="" className="w-96 h-80 rounded-b-sm" /> 

                </span>

                <div className="p-3 flex flex-col gap-2">
                    <h1><b>ID:</b> {user.id}</h1>
                    <h1><b>TYPE:</b> {user.type}</h1>
                    <h1><b>LOGIN:</b> {user.login}</h1>
                </div>
       
            </div>
            </section>

        }
       
    </>
  )
}

export default Userdisplay