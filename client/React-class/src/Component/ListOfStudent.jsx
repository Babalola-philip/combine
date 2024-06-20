import axios from "axios"


const ListOfStudent = () => {
    let url = "http://localhost:4000/"
    const getData =()=>{
        axios.get(url).then((res)=>{
            console.log(res.data);
        })
        
    }
  return (
    <div>


        <button 
        className="bg-green-500 rounded-2xl px-4 py-2 mt-10"
        onClick={getData}>Get Data</button>
    </div>
  )
}

export default ListOfStudent