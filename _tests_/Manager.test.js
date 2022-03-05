const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Creates an object with a name and an id.', () => {
            const manager = new Manager(123, 'Dave')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Dave');
        });
    });
});