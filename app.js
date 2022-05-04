const inquirer = require('inquirer');
const fs = require('fs')

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput){
                    console.log('\nThank you. Next Question.')
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
                    return false;
                }
            }
        },
        // add questions for contribution guidelines 
        // and test instructions
    ])
}

promptUser()
.then(readmeData =>{
    fs.writeFile("./example.txt", JSON.stringify(readmeData), err => {
        if (err) throw new Error
    })
})