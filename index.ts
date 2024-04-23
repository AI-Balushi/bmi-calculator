#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

const questions = [
    {
        type: 'number',
        name: 'weightInKg',
        message: 'Enter your weight in kilograms:'
    },
    {
        type: 'number',
        name: 'heightInMeters',
        message: 'Enter your height in meters:'
    }
];

console.log(chalk.blue.bold('BMI Calculator'));

inquirer.prompt(questions).then(answers => {
    if (answers.weightInKg <= 0 || answers.heightInMeters <= 0) {
        console.log(chalk.red('Please enter valid values for weight and height (greater than zero).'));
        return;
    }

    let bmi = answers.weightInKg / (answers.heightInMeters * answers.heightInMeters);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    console.log(`Your BMI is ${bmi.toFixed(2)} (${category})`);
});
