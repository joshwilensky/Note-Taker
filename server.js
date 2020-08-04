// DEPENDENCIES=========================================
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

// MIDDLEWARE============================================
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/Develop/public")));
app.use(apiroutes);
app.use(htmlroutes);

// CREATES PORT ON SERVER==================================
app.listen(PORT, () => {
  console.log("App is working at port:", PORT);
});