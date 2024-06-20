    import {useNavigate} from "react-router-dom"

const UserApi = ({list}) => {
 
    const navigate = useNavigate()

   
  return (
    <div className="grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-14 ">
        {list.map(({avatar_url,id,type,login})=>(
            <div key={id} className="shadow-sm rounded-3xl overflow-hidden pb-3 border border-green-500 ">

                <img src={avatar_url} alt="" className="w-full h-80 rounded-b-sm"/>

                <div className="mt-4 flex flex-col p-2 gap-3 ">
                  <h1><b>ID:</b> {id}</h1>  
                  <h1><b>TYPE:</b> {type}</h1>  
                  <h1><b>LOGIN</b> {login}</h1>   
                  <button  onClick={()=>navigate(`/users/user/${login}`)} className="bg-green-500 px-2 py-2 rounded-2xl transform hover:scale-95 duration-500 ease-linear hover:border-green-500 font-semibold">View profile</button>              
                </div>

                
            </div>
        ))}
    </div>
  )
}

export default UserApi