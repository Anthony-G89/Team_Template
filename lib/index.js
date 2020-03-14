const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");


const teamMembers = [];

​
function buildTeamPage() {
  // Make this function and use fs to write file to output folder.
  console.log(render(teamMembers));
​
  // Output file.
  fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
}
​
function addTeamMember() {
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What type of team member would you ike to add:",
      choices: [
        "Engineer",
        "Intern",
        "Done"
      ]
    }
  ]).then(answers => {
​
    // console.log({ teamMembers });
​
    switch (answers.role) {
      case 'Engineer':
        promptEngineer();
        break;
​
      case 'Intern':
        promptIntern();
        break;
​
      case 'Done':
      default:
        buildTeamPage();
    }
  })
}
​
function promptManager() {
  return inquirer.prompt([
    {
        type:"input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type:"input",
        message: "What is your manager's id?",
        name: "managerId"
    },
    {
        type:"input",
        message: "What is manager's email?",
        name: "managerEmail"
    },
    {
        type:"input",
        message: "What is your manager's office number?",
        name: "managerOffice"
    },
  ]).then(answers => {
    // console.log({ answers });
​
    const { name, id, email, officeNumber } = answers;
​
    const newManager = new Manager(name, id, email, officeNumber);
​
    teamMembers.push(newManager)
​
    addTeamMember();
  })
}
​
function promptEngineer() {
  inquirer.prompt([
    {
        type:"input",
        message: "What is your engineer name?",
        name: "engineerName"
    },
    {
        type:"input",
        message: "What is your engineer id?",
        name: "engineerId"
    },
    {
        type:"input",
        message: "What is your engineer email?",
        name: "engineerEmail"
    },
    {
        type:"input",
        message: "What is your engineer GitHub username",
        name: "engineerGitHub"
    },
  ])
    .then(answers => {
    //   console.log({ answers });
​
      const { name, id, email, github } = answers;
​
      const newEngineer = new Engineer(name, id, email, github);
​
      teamMembers.push(newEngineer)
​
      addTeamMember();
    });
}
​
function promptIntern() {
  inquirer.prompt([
    {
        type: "input",
        message:"What is your intern name?",
        name: "internName"
    },
    {
        type: "input",
        message:"What is your intern id?",
        name: "internId"
    },
    {
        type: "input",
        message:"What is your intern email?",
        name: "internEmail"
    },
    {
        type: "input",
        message:"What is your intern school?",
        name: "internSchool"
    },
  ])
  .then(answers => {
    // console.log({ answers });
​
    const { name, id, email, school } = answers;
​
    const newIntern = new Intern (name, id, email, school);
​
    teamMembers.push(newIntern)
​
    addTeamMember();
  });
  
  
}
​
promptManager();












