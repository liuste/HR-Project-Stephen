const express = require("express");
const recordRoutes = require("express").Router();
const bcrypt = require('bcryptjs');
const Employee = require("../model/Employee");
const EmployeeInfo = require("../model/EmployeeInfo");
const jwt = require("jsonwebtoken");


recordRoutes.post("/login", async (req, resp) => {
  try {
      const { name, password } = req.body;
      
      const user = await Employee.findOne({ name });
      if (!(await bcrypt.compare(password, user.password)))
          throw new Error("Email or password is wrong!");
      const signed_jwt = jwt.sign(req.body, process.env.JWT_KEY);
      resp.status(200).send({token:signed_jwt})
      
  } catch (e) {
    // 401: Unauthorized
    console.log(e);
    resp.status(401).send({errorMsg: e.message});
  }
});


recordRoutes.post("/register", async (req, resp) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, Number(process.env.SALT));
      console.log(req.body)
      user = req.body
      let existedName = await Employee.findOne({"name":req.body.name})
      let existedEmail = await Employee.findOne({"email":req.body.email})
      if (!(existedEmail == null) || !(existedName == null)){
          throw new Error("This email or username is already taken")
      }else if((user.email.indexOf('@') == -1) || (user.email.indexOf('.') == -1)){
        throw new Error("Invalid Email Address")
      }
      else{
        await Employee.create(req.body);
        resp.status(200).send('resigster successfully');
      }
    } catch (e) {
      resp.status(400).send(e)
    }
  });

  recordRoutes.post("/users", async (req, resp) => {
    try {
      console.log(req.body);
      resp.status(200).send('onboarding application submitted');
    }catch (e) {
      resp.status(400).send(e)
    }
  });

  

  module.exports = recordRoutes;
