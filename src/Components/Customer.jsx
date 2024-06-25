import React, { useContext } from 'react'

const Customer = () => {
    const {name, setname} = useContext(MyContext)

  return (
    <div>Customer
        <input
        type='text'
        value={name}
        onChange={(e)=>setname(e.target.value)}/>
       

       <button onClick={()=>navigate("/")}>nav</button>


    </div>
  )
}

export default Customer