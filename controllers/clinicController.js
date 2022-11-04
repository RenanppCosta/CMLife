const specialtyModel = require("../models/Specialty");
const hoursModel = require("../models/Hours");


const renderHome = (req, res)=>{
    const specialtyList = specialtyModel.getAll();
    res.render("home", {specialtyList})
}

const renderSpecialtiesPage = (req,res)=>{
    const hoursList = hoursModel.getAll();
    res.render("especialidades", {hoursList})
}


module.exports = {
    renderHome,
    renderSpecialtiesPage
}