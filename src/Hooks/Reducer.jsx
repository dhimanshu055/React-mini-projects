import React, { useReducer } from 'react'

const Reducer = () => {

    const reducer = (state,action)=>{
        switch (action.type) {
            case "update_name":
                return{...state, "name"}
                
                break;
        
            default:
                break;
        }
    }

    const initialValue = {
        "name": "",
        "email": "",
        "password": "",
    }
       

    const [registerForm , dispatcher] = useReducer(Reducer,initialValue )

  return (
    <div>Reducer

        <input
    value = {registerForm.name}
    onChange={(e)=>{
        dispatcher(
            {
            type : "update_name",
            value : e.target.value
            }
        
        )
    }}
    />

<input
    value = {registerForm.email}
    onChange={(e)=>{
        dispatcher(
            {
            type : "update_email",
            value : e.target.value
            }
        
        )
    }}
    />



    </div>
  )
}

export default Reducer