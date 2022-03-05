const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Creates an object with a name and an id.', () => {
            const engineer = new Engineer(123, 'Dave')

            expect(engineer.id).toEqual(123);
            expect(engineer.name).toEqual('Dave');
        });
    });
});