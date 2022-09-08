import React from "react";
import { useLocation,useNavigate} from 'react-router-dom';
export default function UserHousing(){
    const navigate = useNavigate()
    const state= useLocation().state
    const loggedInUser = localStorage.getItem("token");
    React.useEffect(() => {
        if (!(loggedInUser)){
            alert('Please log in')
            navigate("/login")   
        }
    },[])
    // Will need to fetch from database
    if(loggedInUser){
        if (state)
            return (
                <div>
                    <h1>Housing Page</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Applicant Name</th>
                                <th>Prefered Location</th>
                                <th>Prefered Roommate</th>
                                <th>Application Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.name}</td>
                                <td>{state.location}</td>
                                <td>{state.housingPref}</td>
                                <td>Pending</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            )
            else
                return(
                    <div>
                        <h1> No Application Avaliable</h1>
                    </div>
                )
        }
    
}