const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Createss an object with a name and an id.', () => {
            const employee = new Employee(123, 'Dave')

            expect(employee.id).toEqual(123);
            expect(employee.name).toEqual('Dave');
        });
    });
});