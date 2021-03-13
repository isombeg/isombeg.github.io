const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const portfolioController = require('./controllers/portfolio')

// Templating configuration
app.set('view engine', 'pug');
app.set('views', 'views');

// Applying middleware
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', portfolioController.getIndex);
app.get('/projects/:projectTitle', portfolioController.getProject);
app.get('/work-experiences/:experienceTitle', portfolioController.getWorkExperience);
// app.use(portfolioController.pageNotFound);

// Adding 404 page
// app.use(errors.get404)

app.listen(3000);