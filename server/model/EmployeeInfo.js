const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employInfoSchema = new Schema({
  fname: {
    type: String,    
  },
  lname: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  ssn: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  contactFName: {
    type: String,
  },
  contactLName: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  contactEmail: {
    type: String,
  },
  contactRelation: {
    type: String,
  },
  licenseNum: {
    type: Number,
  },
  expiration: {
    type: Date,
  },
  isUSA:{
    type: Boolean,
  },
  visaTitle:{
    type: String,
  },
  startEndDate: {
    type: Date,
  },
});

const EmployeeInfo = mongoose.model("Employee", employInfoSchema);
module.exports = EmployeeInfo;