const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/HrEmployeeProfiles"));
// get driver connection

require("./db").once('open', () => {
  app.listen(port, () => {
    console.log(`Server is up and running on port ${port}.`);
  });
});