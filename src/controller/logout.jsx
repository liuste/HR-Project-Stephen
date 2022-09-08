import React from "react";
import { useNavigate} from 'react-router-dom';
export default function Logout(){
    const navigate = useNavigate()
    localStorage.clear();
   React.useEffect(() => {
        alert('Logging out...')
        navigate("/login")   
    },[])

}