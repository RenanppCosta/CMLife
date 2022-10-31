const specialtyModel = require("../models/Specialty")


const renderHome = (req, res)=>{
    const specialtyList = specialtyModel.getAll();
    res.render("home", {specialtyList})
}

const renderSpecialtiesPage = (req,res)=>{
    res.render("especialidades")
}


module.exports = {
    renderHome,
    renderSpecialtiesPage
}