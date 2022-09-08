const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employSchema = new Schema({
  name: {
    type: String,
    unique:true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", employSchema);
module.exports = Employee;
