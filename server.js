const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb+srv://admin:MongoDBis110@cluster0.spdho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

app.use(routes);  

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});