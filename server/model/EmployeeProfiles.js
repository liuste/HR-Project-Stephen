const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeProfilesSchema = new Schema({
  firstName: {
    type: String,
    unique:true,
  },
  lastName: {
    type: String,
    unique:true,
  },
  ssn: {
    type: Number,
    unique:true,
  },
  phone: {
    type: Number,
    unique:true,
  },
  email: {
    type: String,
    unique: true,
  },
});

const EmployeeProfiles = mongoose.model("EmployeeProfiles", EmployeeProfilesSchema, "EmployeeProfiles");
module.exports = EmployeeProfiles;