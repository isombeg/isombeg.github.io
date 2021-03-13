const Project = require('../models/Project');
const Experience = require('../models/Experience');

exports.getIndex = (req, res) => {
    Project.getAllProjects(projects => {
        Experience.getAllExperiences(experiences => {
            res.render('pages/index', {
                projects: projects,
                experiences: experiences
            })
        })
    })
}

exports.getProject = (req, res) => {
    const projectTitle = req.params.projectTitle;
    const project = Project.findProjectByTitle(projectTitle, projects)
    res.render('pages/project', {
        project: project
    })
}

exports.getWorkExperience = (req, res) => {
    const xpTitle = req.params.experienceTitle;
    const xp = Experience.findXpByTitle(xpTitle, experiences);
    res.render('pages/experience', {
        experience: experience
    })
}