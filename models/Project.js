const fs = require('fs');
const path = require('path');

const projectFile = path.join(path.dirname(process.mainModule.filename), 'data', 'projects.json');

module.exports = class Project {

    static getAllProjects = (cb) => {
        let projects = new Array();
        fs.readFile(projectFile, (err, fileContent) => {
            if(err){
                return [];
            }
            projects = JSON.parse(fileContent);
            cb(projects)
        })
    }

    static findProjectByTitle = (title, projects) => {
        const project = projects.find(p => p.title === title);
        return project;
    }
}