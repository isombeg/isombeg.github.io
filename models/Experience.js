const fs = require('fs');
const path = require('path');

const experienceFile = path.join(path.dirname(process.mainModule.filename), 'data', 'experiences.json');

module.exports = class Experience {

    static getAllExperiences = (cb) => {
        let experiences = new Array();
        fs.readFile(experienceFile, (err, fileContent) => {
            if(err){
                return [];
            }
            experiences = JSON.parse(fileContent);
            cb(experiences)
        })
    }

    static findExperienceByTitle = (title, experiences) => {
        const experience = experiences.find(p => p.title === title);
        return experience;
    }
}