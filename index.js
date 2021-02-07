var inquirer = require("inquirer");
const { init, car } = require("./Prompts");
const { Car, Motorcycle } = require("./DataSet");

function start() {
  var attributes = new Object();
  inquirer.prompt(init).then(({ character, vehicleType }) => {
    attributes["character"] = character;
    attributes["vehicleType"] = vehicleType;
    console.log(attributes);
    var points = 100;
    switch (vehicleType) {
      case "Car":
        inquirer.prompt(car).then(({ carType }) => {
          attributes["carType"] = carType;
          // Speed
          inquirer
            .prompt({
              type: "input",
              message: `Speed (1/3): How Many Points Would You Like To Allocate To Speed: \n${carType} Only Allows For ${Car[carType].Speed} Points Max:   \n You Have ${points} Points Remaining?\n`,
              name: "speed",
              validate: async (input) => {
                if (+input >= Car[carType].Speed || +input >= points) {
                  return `Invalid Selection. Must Be Within ${Car[carType].Speed} Total. You Have ${points} Points Remaining.`;
                }
                return true;
              },
            })
            .then(({ speed }) => {
              attributes["speed"] = speed;
              points = points - +speed;
              // Acceleration
              inquirer
                .prompt({
                  type: "input",
                  message: `Acceleration (2/3): How Many Points Would You Like To Allocate To Acceleration: \n${carType} Only Allows For ${Car[carType].Acceleration} Points Max:   \n You Have ${points} Points Remaining?\n`,
                  name: "acceleration",
                  validate: async (input) => {
                    if (
                      +input >= Car[carType].Acceleration ||
                      +input >= points
                    ) {
                      return `Invalid Selection. Must Be Within ${Car[carType].Acceleration} Total. You Have ${points} Points Remaining.`;
                    }
                    return true;
                  },
                })
                .then(({ acceleration }) => {
                  attributes["acceleration"] = acceleration;
                  points = points - +acceleration;
                  //   Traction
                  inquirer
                    .prompt({
                      type: "input",
                      message: `Traction (3/3): How Many Points Would You Like To Allocate To Traction: \n${carType} Only Allows For ${Car[carType].Traction} Points Max:   \n You Have ${points} Points Remaining?\n`,
                      name: "traction",
                      validate: async (input) => {
                        if (
                          +input >= Car[carType].Traction ||
                          +input >= points
                        ) {
                          return `Invalid Selection. Must Be Within ${Car[carType].Traction} Total. You Have ${points} Points Remaining.`;
                        }
                        return true;
                      },
                    })
                    .then(({ traction }) => {
                      attributes["traction"] = traction;
                      points = points - +traction;
                      // Overview - Confirm
                      inquirer
                        .prompt({
                          type: "list",
                          message: `Awesome! You Chose: \n${attributes.character} driving ${attributes.carType} \n Speed: ${attributes.speed} \n Acceleration: ${attributes.acceleration} \n Traction: ${attributes.traction}\n\nLets Chose A Map!`,
                          name: "mapSelect",
                          choices: [
                            "Baby Park",
                            "Mario Circuit",
                            "Toad Harbor",
                          ],
                        })
                        .then(async ({ mapSelect }) => {
                          console.log("The Match Is Starting in....\n");
                         await setTimeout(() => {
                            console.log("3");
                          }, 1000);

                         await setTimeout(() => {
                            console.log("2");
                          }, 1000);

                         await setTimeout(() => {
                            console.log("1");
                          }, 1000);

                         await setTimeout(() => {
                            console.log("GO!");
                          }, 1000);

                          if (+attributes.acceleration >= 50) {
                            console.log(
                              `WOW! ${attributes.character} Got Off To A Teriffic Start! \n They Are Alone All In First Place... `
                            );
                          }
                        });
                    });
                });
            });
        });
    }
  });
}

start();
