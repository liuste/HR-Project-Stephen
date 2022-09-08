import React from "react";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function ApplyHousing(){
    const navigate = useNavigate()
    const [user, setUser] = React.useState({
        name: "",
        password: "",
      })
    const handleChange = (event) =>{
        const value = event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        });
    }
    const housingApp = async (event) =>{
        // configure user here, need use Redux reducer
        const response = await axios.post('http://localhost:4000/login',user)
        const token = response.data.token
        localStorage.setItem("token", token);
        setUser({ name: "", email: "", password: "" });
        if(response.status === 200){
            alert('Successfully LoggedIn')
            navigate('/housing_home');;
        }else{
            alert("Please Check Your Information")
            navigate('/login')
        }
        
    }
    
    return(
        <div>
            <h1>Please Login Here</h1>
            <form action="">
                <label>Your Name</label>{" "}
                <input type="text" name="name" 
                onChange={handleChange} value={user.name}/>
                <br /><br />

                <label>Your Password</label> {" "}
                <input type="password" name="password" 
                onChange={handleChange} value={user.password}/>
                <br /><br />

                <button type="Button" onClick={housingApp}>
                    Submit
                </button>
                <br /><br />
            </form>
        </div>
    )
}