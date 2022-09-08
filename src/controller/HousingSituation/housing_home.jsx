import React, { Component } from "react";
import { useLocation, useNavigate} from 'react-router-dom';

export default function HousingSit(){
    const loggedInUser = localStorage.getItem("token");
    const navigate = useNavigate()
    const myHousing = () =>{
        if(loggedInUser){
            navigate('/housing_application');
        }
        else{
            alert("Please Login to view your housing portal")
            navigate('/login');
        }
      }
        return (
            // need to have before logged in: show this, after logged in, show that 
            <div>
                <div>
                    <h4> Welcome to the Housing</h4>
                    <p> We provide housing in location: Boston, Jersey City, and New York City</p>
                    <p>If you haven't applied yet, please apply here</p>
                    <button type="button" id="apply"  onClick={myHousing}>
                        Apply Here
                    </button>
                </div>
            </div>
            
        );
}


