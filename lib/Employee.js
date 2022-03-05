class Employee {
    constructor(email, id, name) {
        this.email = email;
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;