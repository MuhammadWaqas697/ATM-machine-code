#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234; // Yeh ATM pin ha meri
let pinAnswer = await inquirer.prompt(//Inquirer hamesha question poucvhny k liye use hota ha or await question pouch k user sy input lene k liye wait karta ha let key word ha or lat k bad vaiable ha
[
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin" //code me first time pouchy ga message apko kia chayi ha
    }
]);
if (pinAnswer.pin === myPin) { //pinAnswer.pin ki value agar baraber ha myPin k tu cosole me print kardo correct pin
    console.log("Correct pin code!");
    let operationAnswer = await inquirer.prompt(//// Let keyword k ander vaibale bnaya operationsAnswer ka, phir usy wait karne k liye kaha or inquirer. prompt Again question karne k liye please select options
    [
        {
            name: "operation",
            type: "list",
            choices: ["withdraw", "check balance"] // List of choices ayegi question me
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "please enter you amount"
            }
        ]);
        myBalance -= amountAnswer.amount;
        console.log("Your ramaining balance is: " + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("Your balance is : " + myBalance);
    }
}
else
    ( // agar pinAnswer.pin ki value myPin k equal nahi ha tu wrong pin code print kardo.  
    console.log("wrong pin code"));
