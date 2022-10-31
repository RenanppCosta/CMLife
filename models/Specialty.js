const fs = require("fs");

function Specialty(id, urlImage, specialty){
    this.id = id;
    this.urlImage = urlImage;
    this.specialty = specialty;
}

function getAll(){
    const specialtyList = JSON.parse(
        fs.readFileSync("database/specialty.json", "utf-8")
    )

        return specialtyList.map((specialty)=>{
            return new Specialty(
                specialty.id,
                specialty.urlImage,
                specialty.specialty
            )
        })
    
}

module.exports = {
    getAll
}