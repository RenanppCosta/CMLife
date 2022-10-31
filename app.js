const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/routes")

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.use("/", router)


app.listen(3000, ()=>{
    console.log("Servidor Rodando!");
})