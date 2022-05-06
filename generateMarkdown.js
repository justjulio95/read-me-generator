const {head} = require('lodash')

const renderLicenseBadge = license => {
    switch(license) {
        case 'Apache':
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case 'Boost':
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case 'BSD':
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            break;
        case 'Eclipse':
            return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
            break;
        case 'GNU':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        case 'ISC':
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
            break;
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case 'Mozilla':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            break;
        case 'None':
            return ``;
            break;
    }
}

const renderLicenseSection = license => {
    if (license !== 'None') {
        return`## License
        
This project is licensed under the ${license} license`
    }
}

const generateReadMe = readmeData => {
    const {username, email, title, description, install, 
        usage, license, contribute, test} = readmeData;

    return `# ${title}
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
To install the necessary dependencies please run the following command:

${install}

## Usage
${usage}

${renderLicenseSection(license)}

## Contributing
${contribute}

## Tests
To run tests, run the following command:

${test}

## Questions
If there are any questions concerning this project, please open an issue or contact me directly at ${email}.
If you would like to see more of my work, please visit my [Github](https://github.com/${username}).
`
};

module.exports = generateReadMe;