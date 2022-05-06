const { read } = require('fs');
const {head} = require('lodash')

const generateReadMe = readmeData => {
    const {title, description} = readmeData;

    return `# ${title}
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

## Usage

##Contributing

## Tests

## Questions
`
};

module.exports = generateReadMe;