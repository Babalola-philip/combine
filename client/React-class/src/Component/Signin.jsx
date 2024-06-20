import { useState } from "react"
import ladyonpc from "../assets/image/ladyonpc.png"
import {useNavigate} from "react-router-dom"
import axios from "axios"

    export default function Signin () {
        const navigate= useNavigate()

        const [email, setEmail] = useState('')

        const [password, setPassword] = useState('')

        let URL ="http://localhost:4000/signin"

        function signin(e) {
            e.preventDefault()
            axios.post(URL,{email,password}).then((res)=>{
                console.log(res.data)
                navigate("/dashboard")
            }).catch((error)=>{
                console.log(error)
            })
        }
  return (
     <section className="p-3 font-sans md:py-16 xl:px-48 ">  
        <main 
        className="flex flex-col p-6 gap-6 shadow-2xl shadow-gray-300 rounded-lg w-full  md:flex-row lg:justify-between md:items-center">

            <form className="font-medium text-sm md:w-96 lg:w-full lg:px-16">

                <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold ">Welcome On Board</h1>
                </div>
               
                <div className="flex flex-col gap-2 mt-8 ">
                  
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required name="email" onChange={(e)=>setEmail(e.target.value)}
                    className="border-2 shadow-sm  bg-gray-50 font-normal rounded-lg p-2 "/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required name="password" onChange={(e)=>setPassword(e.target.value)}
                    className="border-2 shadow-sm  bg-gray-50 font-normal rounded-lg p-2"/>
                </div>
             
                <div className=" mt-6 gap-2">
                   

                    <button className="bg-lime-700 p-2 text-base text-white  rounded-lg tranform hover:scale-105 ease-linear duration-300 w-full" onClick={signin}>Sign in</button>
                </div>

            </form>

            <div className="flex justify-center items-center lg:w-full">
                <img src={ladyonpc} alt="" className=" md:w-96 tranform hover:scale-95 ease-linear duration-500 rounded-3xl overflow-hidden"/>
            </div>
        </main>
       
    </section>
  )
}

