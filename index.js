var inquirer = require("inquirer")
const { character } = require("./Prompts")

function start(){
    inquirer.prompt(character).then(({character, vehicleType})=>{
        switch (vehicleType){
            case "Car":
        }
    })
}

start()