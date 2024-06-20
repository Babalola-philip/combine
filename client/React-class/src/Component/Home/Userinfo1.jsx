import React from 'react'

const Userinfo1 = ({list}) => {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {list.map((data,index)=>(
            <figure key={index} className='shadow-2xl shadow-neutral-400 rounded-2xl overflow-hidden border pb-4 transform hover:scale-95 duration-500 ease-linear hover:border-green-500 '>
                <div>
                <img src={data.owner.avatar_url} alt={data.avatar_url} 
                className='w-full h-full rounded-md'/>
                </div>
               
                <figcaption className='p-3 flex flex-col gap-3 mt-6'>
                    <h1><b>ID:</b> {data.owner.id}</h1>
                    <h1 className='text-nowrap'><b>Name:</b> {data.name}</h1>
                    <h1><b>Login:</b> {data.owner.login}</h1>
                    <h1><b>Language:</b> {data.language}</h1>
                </figcaption>
                <div className='text-end px-3'>
                    <button className='shadow border bg-slate-600 text-white px-4 py-1 rounded-2xl'>follow</button>
                </div>
                
            </figure>
               
           
        ))}
    </div>
  )
}

export default Userinfo1