import{Link} from "react-router-dom"
const Notfound = () => {
  return (
    <div>
        <button className="shadow-lg px-4 py-2 rounded-3xl m-4"><Link to={"/Home"}>Home</Link></button>
        <h1 className="text-center text-6xl text-red-500 font-bold mt-48">Unavailable</h1>
        <p className="text-center text-3xl font-bold mt-10">404</p>
    </div>
  )
}

export default Notfound