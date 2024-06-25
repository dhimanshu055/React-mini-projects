import React from 'react'
import Customer from './Components/Customer'
import Order from './Components/Order'
import MyProvider from './ContextStore/MyProvider'
import { Route, Routes , BrowserRouter } from 'react-router-dom' 

const App = () => {
  return (
    <div>App
      <BrouseRouter>
      <Routes>

      <Route path = "/" element = {<order/>}/>     // login
      
      <Route path="/" element={<Order />} />
      <Route path="/name" element={<Customer />} />
      
      
      </Routes>
      </BrouseRouter>
    </div>
  )
}

export default App