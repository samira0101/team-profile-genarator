const Employee = require('./Engineer.js')

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber
    }

    getNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;