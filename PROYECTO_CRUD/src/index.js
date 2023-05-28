const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
require("dotenv").config();
const userRoute = require("./routes/user");
//SETTINGS
const app = express();
const port = process.env.PORT || 9000;
//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRoute);
app.set("view engine", "ejs");
//ROUTES
// Establecer el directorio de vistas
app.set('views', path.join(__dirname,'Vistas'));

// Configurar el motor de plantillas
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
  res.render("view");
});

//MONGODB CONNECTION 
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));
