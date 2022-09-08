const recordRoutes = require("express").Router();
const EmployeeProfiles = require("../model/EmployeeProfiles");

recordRoutes.post("/HrEmployeeProfiles", async (req, resp) => {
    // try {
    //     const test = {
    //         firstName: 'David',
    //         lastName: 'Wu',
    //         ssn: '18123239',
    //         phone: '97087421212',
    //         email: 'test2@gmail.com',
    //     }
    //         // console.log(test);
    //         await EmployeeProfiles.create(test);
    //         resp.status(200).send('resigster successfully');
    // } catch (e) {
    //     resp.status(400).send(e)
    // }
    // resp.status(200).send({token:'resigster successfully'});
    try {
        const collection = await EmployeeProfiles.find();
        console.log(collection);
        resp.status(200).send({Co: collection});
    }catch(e) {
        resp.status(400).send(e)
    }
});

module.exports = recordRoutes;