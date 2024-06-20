import axios from "axios"
import { useEffect, useState } from "react"
import loading from "./image/loading.svg"

import Userinfo1 from "./Userinfo1"

const Home = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let url ="https://api.github.com/search/repositories?q=XXX"
    
    useEffect(() => {
      axios.get(url).then((res)=>{
        console.log(res.data.items)
        setList(res.data.items)
        setIsLoading(false)
      }).catch((error)=>{
        console.log(error)
      })
    }, [])
    
  return (
    <div>
      
        {isLoading? 
        <div className="flex justify-center items-center h-96 mt-28"><img src={loading} alt="" className="w-16" /></div>         
         : 
         <section className="p-8" >
         <Userinfo1 list={list}/>
         </section>}
        
       
    </div>
  )
}

export default Home