import axios from "axios";
import React, { Component } from "react";
//import { useNavigate } from "react-router-dom";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

        //infoSubmitted: false,
        fname: '',
        lname: '',
        address: '',
        phoneNumber: 0,
        ssn: 0,
        dob: 0,
        contactFName: '',
        contactLName: '',
        contactNumber: 0,
        contactEmail: '',
        contactRelation: '', 
        licenseNum: 0,
        expiration: 0,
        //keyClicked: '', 
        isUSA: false,  
        usaType: '',
        visaTitle: '',
        startEndDate:0,
        //isInEditMode: false, 
        file: ''  
    };  
  }

handleInputChange = (event) => {
  
  const target = event.target;
  //const value = target.type === 'checkbox' ? target.checked : target.value;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({infoSubmitted: true});
  axios.post('http://localhost:4000/users', {
    fname: this.state.fname,
    lname: this.state.lname,  
    address: this.state.address,
    phoneNumber: this.state.phoneNumber,
    ssn: this.state.ssn,
    dob: this.state.dob,
    contactFName: this.state.contactFName,
    contactLName: this.state.contactLName,
    contactNumber: this.state.contactNumber,
    contactEmail: this.state.contactEmail,
    contactRelation: this.state.contactRelation,
    licenseNum: this.state.licenseNum,
    expiration: this.state.expiration,
    isUSA: this.state.isUSA,
    visaTitle: this.state.visaTitle,
    startEndDate: this.state.startEndDate,
  })
  .then(response => {
    console.log(response.data)
  })
}

handleFile = (event) => {
  this.setState({file: event.target.files[0]})  
}

//renderDefaultView = () => {
  //const navigate = useNavigate()
  //navigate('/PersonalInfoPage');

  // return Object.keys(this.state).map(i =>
  // <div key={i}>
  // {i}: {this.state[i]}
  // </div>
  // )

//}

render() { 
  // if(this.state.infoSubmitted){
  //   return this.renderDefaultView()
  // }
  // else{
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
            <input
              name='fname'
              type='text'
              value={this.state.fname}
              onChange={this.handleInputChange}
            />  
        </label><br></br>
        <label>
          last name:
            <input
              name='lname'
              type='text'
              value={this.state.lname}
              onChange={this.handleInputChange}
            />  
        </label><br></br>
        <label>
          current address:
            <input
              name='address'
              type='text'
              value={this.state.address}
              onChange={this.handleInputChange}
            />  
        </label><br></br>
        <label>
          cell phone number:
            <input
              name='phoneNumber'
              type='number'
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />  
        </label><br></br>
        <label>
          SSN:
            <input
              name='ssn'
              type='number'
              value={this.state.ssn}
              onChange={this.handleInputChange}
            />  
        </label><br></br>
        <label>
          date of birth:
            <input
              name='dob'
              type='date'
              value={this.state.dob}
              onChange={this.handleInputChange}
            />  
        </label><br></br>
        <br></br>

        <label>
          Are you a citizen or permanent resident of the U.S.?:<br></br>
          yes:
          <input type="radio" value='true' name="isUSA" onChange={this.handleInputChange} />
          <br></br>
          If you selected yes above, please select one of the below:
          <br></br>
          Green Card
          <input type="radio" value='greenCard' name="usaType" onChange={this.handleInputChange} />
          Citizen
          <input type="radio" value='citizen' name="usaType" onChange={this.handleInputChange} />
          <br></br>
          no:
          <input type="radio" value='false' name="isUSA" onChange={this.handleInputChange} />
          <br></br>
          What is your work authorization? (Please upload files)
          <br></br>
          H1-B
          <input type="radio" value='H1-B' name="workAuth" onChange={this.handleInputChange} />
          <br></br>
          L2
          <input type="radio" value='L2' name="workAuth" onChange={this.handleInputChange} />
          <br></br>
          F1 CPT or OPT
          <input type="radio" value='F1' name="workAuth" onChange={this.handleInputChange} />
          <br></br>
          H4
          <input type="radio" value='H4' name="workAuth" onChange={this.handleInputChange} />
          <br></br>
          Other
          <input type="radio" value='Other' name="workAuth" onChange={this.handleInputChange} />
          <br></br>
          If you selected Other, please specify the visa title below:
          <input
              name='visaTitle'
              type='text'
              value={this.state.visaTitle}
              onChange={this.handleInputChange}
          /><br></br>
          start and end date:
          <input
              name='startEndDate'
              type='date'
              value={this.state.startEndDate}
              onChange={this.handleInputChange}
          /><br></br>
          <input type='file' className="form-control"
          onChange={this.handleFile}></input>
          <br></br>
        </label><br></br>

        <label>
          Do you have a driver's license?:<br></br>
          yes:
          <input type="radio" value='true' name="license" onChange={this.handleInputChange} />
          <br></br>
          If you selected yes above, please provide the following:
          <br></br>
          Driver's license number:
          <input
              name='licenseNum'
              type='number'
              value={this.state.licenseNum}
              onChange={this.handleInputChange}
          /><br></br>
          Expiration date:
          <input
              name='expiration'
              type='date'
              value={this.state.expiration}
              onChange={this.handleInputChange}
          /><br></br>
          Please upload a copy of the license
          <br></br>
          <input type='file' className="form-control"
          onChange={this.handleFile}></input>
          <br></br>
          no:
          <input type="radio" value='false' name="license" onChange={this.handleInputChange} />
          <br></br>
        </label><br></br> 


        Emergency contact
        <br></br>
        <label>
          First name:
            <input
              name='contactFName'
              type='text'
              value={this.state.contactFName}
              onChange={this.handleInputChange}
            />
        </label><br></br> 
        <label> 
          last name:
            <input
              name='contactLName'
              type='text'
              value={this.state.contactLName}
              onChange={this.handleInputChange}
            />
        </label><br></br>
        <label>
          phone number:
            <input
              name='contactNumber'
              type='number'
              value={this.state.contactNumber}
              onChange={this.handleInputChange}
            />  
        </label><br></br>  
        <label> 
          email:
            <input
              name='contactEmail'
              type='email'
              value={this.state.contactEmail}
              onChange={this.handleInputChange}
            />
        </label><br></br>
        <label> 
          relationship:
            <input
              name='contactRelation'
              type='text'
              value={this.state.contactRelation}
              onChange={this.handleInputChange}
            />
        </label>   
        <br></br>
        <button>submit</button>
      </form>  
    );
  }
}
//}
export default PersonalInfo;