//require inquirer, mysql
const mysql = require('mysql');
const inquirer = require("inquirer");



// Create connection
  var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "akiko5454",
    database: "employeesDB"
  });


  con.connect(function(err) {
    if (err) throw err;
    firstPrompt();
    });


//inquirer function
function firstPrompt() {

  inquirer
  .prompt({
   type: "list",
   name: "task",
   message: "Please choose what you need to see.",
   choices: [
     "View Employees",
     "View Department",
     "Update Roles"
   ]
  })
  .then(function ({ task }){
    switch (task) {
      case "View Employees":
    viewEmployee();
    break;

    case "View Department":
    viewDepartment();
    break;

    case "Update Roles":
    updateRole();
    break;

    case "End":
      console.end();
      break;
    } 

 
  }
  );


// viewTable(table)
//   con.query(`SELECT * FROM${table}`, function (err,res){
//     if (err) throw err;
    
//     console.table(res);
//     console.log("Employees viewed.")
    
//     firstPrompt();
//   });
// }

function viewEmployee() {
  console.log("Viewing employees\n");

  var query = 'SELECT * FROM employee'

  con.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Employees viewed!\n");

    firstPrompt();
  });

}}

function viewDepartment() {
  console.log("Viewing department\n");

  var query = 'SELECT * FROM  department'

  con.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("department viewed!\n");

    firstPrompt();
  });

}

function updateRole() {

  inquirer
  .prompt({
   type: "list",
   name: "task",
   message: "What's the new role you wat to have it?",
   choices: [
    "Sales Lead",
    "Lead Engineer",
    "Software Engineer",
    "Accountant",
    "Legal Team Lead",
   ]
  })
  .then(function ({ result }){
   

  console.log("Viewing roles\n");

  var query = 'UPDATE role SET ?? WHERE title'

  con.query(query, [result.task],function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("department viewed!\n");

    firstPrompt();
  });

})}




// Add departments, roles, employees
// view departments, roles, employees
//Update employee roles

// function Add

// function view

// function update
//
