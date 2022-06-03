// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Samira', 90, 'mhsamira.21@gmail.com', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

    });
});