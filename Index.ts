#! /usr/bin/env node 



import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 25000;                    //Dollar
let myPin = 1234;                           // Yeh ATM pin ha meri


console.log(chalk.blue("\n \tWelcome to Muhammad Waqas ATM Machine code\n"))


let pinAnswer = await inquirer.prompt(      //Inquirer hamesha question poucvhny k liye use hota ha or await question pouch k user sy input lene k liye wait karta ha let key word ha or lat k bad vaiable ha
  [
    {
      
    name: "pin",                             //jo pin user dega yeh isy print karta ha
    type: "number",                          // Yeh sirf numeric he type kary ga warna string me error dega or dosri datatype me bhi
    message: chalk.yellow("Please enter your pin")         //code me first time pouchy ga message apko kia chayi ha
    
    }
  ]

)
if (pinAnswer.pin === myPin ) {     //pinAnswer.pin ki value agar baraber ha myPin k tu cosole me print kardo correct pin
  console.log (chalk.greenBright("Correct pin code!"));
  
  
  
  let operationAnswer = await inquirer.prompt(   //// Let keyword k ander vaibale bnaya operationsAnswer ka, phir usy wait karne k liye kaha or inquirer. prompt Again question karne k liye please select options
    [
      {
        name: "operation", 
        type: "list",                            // Isme list show hogi
        choices: ["withdraw", "check balance" ]  // List of choices ayegi question me

      }
    ]
  )      
  
  if (operationAnswer.operation === "withdraw") {
    let withdrawAmount = await inquirer.prompt(
      [
        {
          name: "withdrawMethod",
          type: "list",
          message: (chalk.green("Please select withdraw method")),
          choices: ["fast cash", "Enter your amount"]
        }
      ]
    )
    if (withdrawAmount.withdrawMethod === "fast cash") {
      let fastcashAns = await inquirer.prompt (
        [
          {
            name: "fastcash",
            type: "list",
            message: (chalk.green("Please select amount below:")),
            choices: [1000, 3000, 5000, 10000, 20000, 25000]
          }
        ]
      )
      if (fastcashAns.fastcash > myBalance) {
        console.log (chalk.red("Your current balance in insufficient"));
      } else {
        myBalance -= fastcashAns.fastcash;
        console.log("Withdraw Successfully!");
        console.log (chalk.green("Your remaining balance is:" + myBalance));
      }
    }

    else if (withdrawAmount.withdrawMethod === "Enter your amount") {
      let enterAmountAns = await inquirer.prompt (
        [
          {
            name: "enteramount",
            type: "number",
            message: (chalk.green("Please enter you specific amount"))


          }
        ]
      )
      if (enterAmountAns.enteramount > myBalance ) {
        console.log (chalk.red("Your current balance is insufficient!" + myBalance));
      } else {
        myBalance -= enterAmountAns.enteramount;
        console.log("Withdraw Successfully!")
        
        console.log (chalk.green(" Your current balance is:" + myBalance));
      }
      }
    }
    else if (operationAnswer.operation === "check balance") {
      console.log (chalk.green("Your current balance is : " + myBalance))
    }
  }  else (    
                                          // agar pinAnswer.pin ki value myPin k equal nahi ha tu wrong pin code print kardo.  
  console.log("wrong pin code! Try again")

)
 