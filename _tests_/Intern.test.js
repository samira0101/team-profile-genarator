const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Creates an object with a name and an id.', () => {
            const intern = new Intern(123, 'Dave')

            expect(intern.id).toEqual(123);
            expect(intern.name).toEqual('Dave');
        });
    });
});