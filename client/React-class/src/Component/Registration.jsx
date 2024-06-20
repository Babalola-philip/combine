
import { useState } from "react"
import ladyonpc from "../assets/image/ladyonpc.png"
import { useNavigate } from "react-router-dom"
import axios from "axios";



export default function Signup () {
    const navigate = useNavigate()
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let url = "http://localhost:4000/signup"

    function createAccount(e) {
        e.preventDefault()
        axios.post(url, {firstName,lastName,email,password}).then((res)=>{
            console.log(res.data)
            console.log("Registered succesfully")
            navigate("/signin")
        }).catch((err)=>{
            console.log(err)
        })
       
      
    }


  return (
    
    <section className="p-3 font-sans md:py-4 xl:px-48">  
        <main 
        className="flex flex-col p-6 gap-6 shadow-2xl shadow-gray-300 rounded-lg w-full  md:flex-row lg:justify-between lg:items-center">

            <form className="font-medium text-sm md:w-96 xl:w-full xl:px-16">

                <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold ">Create an account</h1>

                    <p className="font-normal text-base">let's get started your 30 days free trial</p>
                </div>
               
                <div className="flex flex-col gap-2 mt-8 ">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required onChange={(e)=>setFirstName(e.target.value)} 
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2"/>


                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required onChange={(e)=>setLastName(e.target.value)} 
                    className="border-2 shadow-sm  bg-gray-50  rounded-md p-2"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required onChange={(e)=>setEmail(e.target.value)} 
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required onChange={(e)=>setPassword(e.target.value)} autoComplete="none" 
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2"/>
                </div>
             
                <div className="flex flex-col mt-6 gap-2">
                    <button className="bg-green-800 p-2 text-lg  rounded-lg text-white tranform hover:scale-105 ease-linear duration-300" onClick={createAccount}>Create Account</button>
                </div>

            </form>

            <div className="flex justify-center items-center xl:w-full">
                <img src={ladyonpc} alt="" className="md:h-full tranform hover:scale-95 ease-linear duration-500 rounded-3xl overflow-hidden"/>
            </div>
        </main>
       
    </section>
  )
}