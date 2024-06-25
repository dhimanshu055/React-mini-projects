import React, { Children, useState } from 'react'
import MyContext from './MyContext'

const MyProvider = () => {
// global states 

const[name, setname] = useState ("Himanshu")



  return (
    <MyContext.Provider value={{name,setname}}>

        {Children}

    </MyContext.Provider>
  )
}

export default MyProvider