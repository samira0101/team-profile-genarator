const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const fs = require('fs');
const teamGenerator = require('../src/teamGenerator');


team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the team manager id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the team manager email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the team manager office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'which type of team member you would like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('./dist/index.html', createTeam(team))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer GitHub username?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('./dist/index.html', createTeam(team))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('./dist/index.html', createTeam(team))
        }
    })
}

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};