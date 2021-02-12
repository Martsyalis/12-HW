const db = require('../model/db');
const displayInfo = require('../view');

const controller = {
  async viewDepartments() {
    const departments = await db.getAllEntriesInTable('department');
    displayInfo(departments);
  },

  async viewEmployees() {
    const employees = await db.getAllEntriesInTable('employee');
    displayInfo(employees);
  },

  async viewRoles() {
    const roles = await db.getAllEntriesInTable('role');
    displayInfo(roles);
  },

  async addRole() {
    const departments = await db.getAllEntriesInTable('department');
    const roleDetailQs = [
      {
        type: "input",
        name: "title",
        message: "Whats the title of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "Whats the salary of the role?",
      },
      {
        type: "list",
        name: "department_id",
        message: "What Department does the role belong to?",
        choices: departments.map(dep => ({name: dep.name, value: dep.id}))
      }
    ]
    const answers = await inquirer.prompt(roleDetailQs);
    await db.addToTable('role', answers);
    console.log(`${answers.title} role was succesfully added`)
  }
}

module.exports = controller;