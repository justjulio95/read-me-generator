const inquirer = require('inquirer');
const fs = require('fs')
const generateReadMe = require('./generateMarkdown.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'What is your Github username? (Required)',
            validate: reqUser => {
                if(reqUser) {
                    return true;
                } else {
                    console.log('\nPlease provide your Github username')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?',
            validate: reqEmail => {
                if (reqEmail) {
                    return true;
                } else {
                    console.log('\nPlease provide your email address!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'title',
            message:'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log("\nPlease enter the name of your project!")
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message:"Please enter a description of your project (Required):",
            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('\nPlease provide a description of your project!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'install',
            message:'Please provide installation instructions (Required):',
            validate: installInstr => {
                if(installInstr){
                    return true
                } else {
                    console.log('Please provide installation instructions!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'How is your project intended to be used? (Required)',
            validate: usageInstr => {
                if(usageInstr) {
                    return true;
                } else {
                    console.log('\nPlease provide usage instructions!')
                    return false;
                }
            }
        },
        {
            type:'list',
            name:'license',
            message:'Which license should your project have?',
            choices:['Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'ISC', 'MIT', 'Mozilla', 'None']
        },
        {
            type:'input',
            name:'contribute',
            message:'Would you like others to contribute to this project?',
            validate: contInstr => {
                if(contInstr) {
                    return true;
                } else {
                    console.log("\nPlease provide instructions on how to contribute to this project!")
                }
            },
        },
        {
            type:'input',
            name:'test',
            message:'How could a user test your application? (Required)',
            validate: testInstr => {
                if (testInstr) {
                    return true;
                } else {
                    console.log('Please provide test instructions!')
                    return false;
                }
            }
        }
        // add questions for contribution guidelines 
        // and test instructions
    ])
}

promptUser()
.then(readmeData => {
    return generateReadMe(readmeData);
})
.then(data => {
    fs.writeFile('./README.md', data, err => {
        if (err) throw Error(err)
    })
})