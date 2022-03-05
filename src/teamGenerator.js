const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

function createCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
      const teamArray = team[i];
      switch(teamArray.getRole()) {
        case 'Manager':
          const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.number);
          cards.push(createManagerCard(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
          cards.push(createEngineerCard(engineer));
          break;
        case 'Intern':
          const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.college);
          cards.push(createInternCard(intern));
          break;
      }
    }
    return cards.join(``)
  }
