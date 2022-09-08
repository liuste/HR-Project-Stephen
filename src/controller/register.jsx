import React from "react";
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
export default function ApplyHousing(){
    const navigate = useNavigate()
    const [user, setUser] = React.useState({
        name: "",
        email:"",
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
        event.preventDefault();
        const response = await axios.post('http://localhost:4000/register',user)
        .catch(e =>{
            alert("Please Check Your Information")
            navigate('/register')
        })
        setUser({ name: "", email: "", password: "" });
        alert('Successfully Registered')
        navigate('/login');
    }
    
    return(
        <div>
            <h1>Please Register Here</h1>
            <form action="">
                <label>Your Name</label>{" "}
                <input type="text" name="name" 
                onChange={handleChange} value={user.name}/>
                <br /><br />

                <label>Your Email</label> {" "}
                <input type="text" name="email" 
                onChange={handleChange} value={user.email}/>
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