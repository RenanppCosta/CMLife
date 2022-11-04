const fs = require("fs");

function Hours(id, specialty, urlImage, description, hours){
    this.id = id;
    this.specialty = specialty;
    this.urlImage = urlImage;
    this.description = description;
    this.hours = hours;
}

function getAll(){
    const hoursLista = JSON.parse(
        fs.readFileSync("database/hours.json", "utf-8"))

    return hoursLista.map((hours)=>{
        return new Hours(
            hours.id,
            hours.specialty,
            hours.urlImage,
            hours.description,
            hours.hours
        )
    })
}

module.exports = {
    getAll
}