const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const comproutes = require("./routes/companies");
const userroute = require("./routes/users");
const authroutes = require("./routes/auth");


const db = require("./db/connection");

app.use(express.json());
//middleware
app.use("/api/comp", comproutes);
app.use("/api", authroutes);
app.use("/api/user", userroute);

db();

app.listen(1000, () => {
  console.log("server connected");
});
