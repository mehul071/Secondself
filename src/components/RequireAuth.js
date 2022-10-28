import React from 'react'
import { useAuth } from '../auth'
import {Navigate, useNavigate} from "react-router-dom"

function RequireAuth({children}) {
    const auth = useAuth();
    const navigate = useNavigate();
    if(!auth.user){
        return <Navigate to="/login"/>
    }
  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth