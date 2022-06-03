// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Samira', 90, 'mhsamira.21@gmail.com', 'samira0101');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

    });
});