import { Link, Outlet } from "react-router-dom"

const Nav = () => {
    const navLink = [
        {
            name:'Home',
            path:'/Home'
        },
        {
            name: 'Sign Up',
            path: "/Signup"
            
        },
        {
            name: 'Login',
            path: "/Login"
        }
    ]
    
  return (
    <div>
        <ul className="flex bg-slate-600 text-white text-lg font-semibold justify-center items-center gap-16">
            {navLink.map((link, index)=>(
                <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
        </ul>

        <Outlet/>
    </div>
    
  )
}

export default Nav