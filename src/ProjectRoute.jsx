import React from 'react'
import { Outlet } from 'react-router-dom'

const ProjectRoute = () => {
  return localStorage.getItem("token") ? <Outlet/> : <Navigate to = "/"/>
    
  
}

export default ProjectRoute