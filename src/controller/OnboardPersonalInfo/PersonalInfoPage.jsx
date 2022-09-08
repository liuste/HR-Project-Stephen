import axios from "axios";
import React, { Component } from "react";
//import { useNavigate } from "react-router-dom";

class PersonalInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

        //infoSubmitted: false,
        fname: 'steve',
        lname: 'liu',
        address: '1 valley rd, princeton, nj 08540',
        phoneNumber: 6091112222,
        ssn: 333445555,
        dob: '2000-01-01',
        contactFName: 'yu',
        contactLName: 'liu',
        contactNumber: 6092223333,
        contactEmail: 'wan@gmail.com',
        contactRelation: 'mom', 
        licenseNum: 123456789,
        expiration: '2023-01-01',
        //keyClicked: '', 
        isUSA: true,  
        usaType: 'citizen',
        visaTitle: '',
        startEndDate:0,
        isInEditMode: false,   
        notClicked: true

    };  
  }

// componentDidMount(){
//   axios.get("http://localhost:3000")
//     .then(res=>{
//       console.log(res);
//     })
// }

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
  console.log("submitted");
  //this.setState({infoSubmitted: true});
  //axios.post('http://localhost:4000/users', this.state);
}

 changeEditMode = () => {
      this.setState({
          isInEditMode: !this.state.isInEditMode
      })
    //this.setState({notClicked: false});
   }

// handleClick = () => {
//     this.setState({
//         isInEditMode: !this.state.isInEditMode
//     })
//     '(function(){!this.state.isInEditMode})();'
// }

handleFile = (event) => {
  this.setState({file: event.target.files[0]})  
}

renderDefaultView = () => {
    return( 
    <>
    <ul>
        <li key='fname'>First Name: {this.state.fname}</li>
        <li key='lname'>Last Name: {this.state.lname}</li>
        <li key='address'>Address: {this.state.address}</li>
        <li key='phoneNumber'>Phone Number: {this.state.phoneNumber}</li>
        <li key='ssn'>SSN: {this.state.ssn}</li>
        <li key='dob'>DOB: {this.state.dob}</li>
        <li key='licenseNum'>Driver's license number: {this.state.licenseNum}</li>
        <li key='expiration'>Expiration date: {this.state.expiration}</li>
        <li key='isUSA'>Are you a citizen or permanent resident of the U.S.?: {this.state.isUSA}</li>
        <li key='usaType'>Green Card or Citizen: {this.state.usaType}</li>
        <li key='visaTitle'>What is your work authorization?: {this.state.visaTitle}</li>
        <li key='startEndDate'>Start and end date: {this.state.startEndDate}</li>
        Emergency Contact:
        <li key='contactFName'>First name: {this.state.contactFName}</li>
        <li key='contactLName'>Last name: {this.state.contactLName}</li>
        <li key='contactNumber'>Phone: {this.state.contactNumber}</li>
        <li key='contactEmail'>Email: {this.state.contactEmail}</li>
        <li key='contactRelation'>Relationship: {this.state.contactRelation}</li>
    </ul>    
    <button onClick={this.changeEditMode}>Edit</button>
        {/* <span>
        {this.state.notClicked ? (<button onClick={this.changeEditMode}>Edit</button>) :
        (
            <span>
            <input type="text" name="myJob" value="value"/>
            <button type="submit" >Save</button>
            <button type="submit" >Cancel</button>
            </span>
        )}
        </span> */}
        </>
    )     
      
}

render() { 
   if(this.state.isInEditMode === false){
     return this.renderDefaultView()
   }
   else{
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
        <button type="submit" >Save</button>
        <button id="cancel" type="button" onClick={this.changeEditMode} >Cancel</button>
      </form>  
    );
  }
}
}
export default PersonalInfoPage;