const connection = require('./model/connection');
const inquirer = require('inquirer');


async function getAllEntriesInTable(table) {
    try{
        return await connection.promisifiedQuery(`SELECT * FROM ${table}`)

    } catch{
        console.log('error for table: ', table);
        return 'no data :(';
    }
}

// const answer = inquirer.prompt([{type: 'input', name: 'a', message:'do you want to see all employees?' }])
//   .then(function(answer) {
//     if (answer.a === 'yes'){
//         const startDate = new Date();
//         const employeePromise =  getAllEntriesInTable('employee')
//         const rolePromise = getAllEntriesInTable('role')
//         const departmentPromise = getAllEntriesInTable('department')
//         // Promise.all([employeePromise, rolePromise, departmentPromise]).then(function(resultsArr){
//         //     console.log('results array is: ', resultsArr);
//         //     console.log('this took:', new Date() - startDate);
//         // })
//     }
// })

async function runApp() {
    try{
        const role = await getAllEntriesInTable('role');
        const data = await getAllEntriesInTable('this');
        const dep = await getAllEntriesInTable('department');
        console.log('we got the role succesfully!: ', data[0], role[0]);
    } catch(err){
        console.log('error in runApp catch: ', err);
    }
  
}

runApp();
