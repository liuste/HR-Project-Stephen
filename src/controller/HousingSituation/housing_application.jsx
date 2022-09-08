import React from "react";
import { useNavigate} from 'react-router-dom';

export default function ApplyHousing(){
    const navigate = useNavigate()
    const [state, setState] = React.useState({
        name: "",
        location: "",
        housingPref: "",
      })
    const handleChange = (event) =>{
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }
    const housingApp = () =>{
        // For data here, we will need database
        navigate('/housing_portal',{state:state});
    }
    
    return(
        <div>
            <h1>Please Complete Your Housing Application Here</h1>
            <form action="">
                <label>Your Name</label>
                <input type="text" name="name" 
                onChange={handleChange} value={state.name}/>
                <br /><br />

                <label>Your Preferred Location</label>
                <input type="text" name="location" 
                onChange={handleChange} value={state.location}/>
                <br /><br />

                <label> Your Preferred Roommate</label>
                <input type="text" name="housingPref" 
                onChange={handleChange} value={state.housingPref}/>
                <br /><br />

                <button type="Button" onClick={housingApp}>
                    Submit
                </button>
                <br /><br />
            </form>
        </div>
    )
}