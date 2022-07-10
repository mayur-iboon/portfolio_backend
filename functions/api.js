/** @format */

const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const router = express.Router();
app.use(cors());

router.get("/", cors(), (req, res) => {
  res.download("./Mayur_Resume.pdf");
});

app.use("/", router);

// app.get("/", (req, res) => {

//   });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
module.exports.handler = serverless(app);
