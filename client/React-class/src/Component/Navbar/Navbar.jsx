import {Link, Outlet} from "react-router-dom"
import comfortbaselogo from "./image/comfortbaselogo.jpg"
import menu from "./image/menu.png"



const Navbar = () => {

    const navlink = [
       
        {
            name: 'Sign Up',
            path: "/Signup"
            
        },

        {
            name: 'Login',
            path: "/Signin"
        }
    ]

    const dropdown = () => {
        if(items.classList.contains("hidden")) {
            items.classList.remove("hidden")
        }else{
            items.classList.add("hidden")
        }
    }


  return (
    <div>
        <section className="hidden md:flex justify-between items-center text-xs p-3 rounded-b-sm md:text-base bg-slate-500 text-white md:px-10 md:py-3">

        <div className="flex gap-2 md:gap-8 items-center">

            <Link to={"/home"}>
                <img src={comfortbaselogo} alt="" className="w-14 rounded-full border-2 border-white transform hover:scale-105 duration-300 ease-linear"/>
            </Link> 

            <h1 className="md:shadow-md md:bg-white md:text-black text-xs md:rounded-3xl md:px-4 md:py-1 font-semibold md:text-sm">
                <Link to={"/users"} >User</Link> 
            </h1>

            <h1 className="md:shadow-md md:bg-white md:text-black text-xs md:rounded-3xl md:px-4 md:py-1 font-semibold md:text-sm">
                <Link to={"/Pricing"}>Contact</Link>
            </h1>

            <h1 className="md:shadow-md md:bg-white md:text-black text-xs md:rounded-3xl md:px-4 md:py-1 font-semibold md:text-sm">
                <Link to={"/Pricing"}>About</Link>
            </h1>
        </div>

        <div className="">
            <ul className="flex gap-4">
                {navlink.map((contact, index)=>(
                    <li key={index} className="border rounded-3xl px-2 py-1 shadow-lg bg-white text-black font-semibold md:px-4 md:py-2 ">
                        <Link to={contact.path}>{contact.name}</Link>
                    </li>
                ))}
            </ul>
           
        </div>
        </section>

        
        <section className=" md:hidden">
            <div>
                <div className="flex justify-between text-xs gap-2 items-centee bg-slate-100  p-2">

                <Link to={"/home"}>
                    <img src={comfortbaselogo} alt="" className="w-14 rounded-full border-2 border-white transform hover:scale-105 duration-300 ease-linear"/>
                </Link> 
                
                <img src={menu} alt="" className="w-10" onClick={dropdown}/>
                </div>
            </div>
        

            <div className="hidden shadow-lg px-2 py-3 gap-3" id="items" >

                <div className="flex flex-col gap-3">
                        <h1 className="text-xs font-semibold">
                            <Link to={"/users"} >User</Link> 
                        </h1>

                        <h1 className="text-xs font-semibold">
                            <Link to={"/Pricing"}>Contact</Link>
                        </h1>
               

                    <ul className="flex flex-col gap-3">
                        {navlink.map(({name,path})=>(
                            <li key={name} className="text-xs font-semibold">
                                <Link to={path}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        <Outlet/>
    </div>
  )
}

export default Navbar