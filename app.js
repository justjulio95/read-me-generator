const inquirer = require('inquirer');
const fs = require('fs')
const generateReadMe = require('./readme-template.js')

const promptUser = () => {
    return inquirer.prompt([
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
                    console.log('\nYou need to provide a description of your project.')
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
                    console.log('You need to give installation instructions.')
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
                    console.log('\nYou need to provide usage instructions.')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'license',
            message:'Which license should your project have?'
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