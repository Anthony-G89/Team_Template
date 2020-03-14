var questions = require("inquirer");

questions
.prompt([

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
    {
        type: "list",
        message:"What type of team member would you ike to add?",
        choices:["Engineer", "Intern", " I dont want to add any more team members"],
        name: "addingMember"
    },
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
    {
        type: "list",
        message:"What type of team member would you ike to add?",
        choices:["Engineer", "Intern", " I dont want to add any more team members"],
        name: "adding"
    },
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
    {
        type: "list",
        message:"What type of team member would you ike to add?",
        choices:["Engineer", "Intern", " I dont want to add any more team members"],
        name: "final"
    },
   
]);
