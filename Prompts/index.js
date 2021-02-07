module.exports = {
  init: [
    {
      type: "list",
      message: "Which Character Would You Like to Choose?\n",
      name: "character",
      choices: [
        "Mario",
        "Toad",
        "Princess Peach",
        "Browser",
        "Yoshi",
        "Rosalina",
      ],
    },
    {
      type: "list",
      message: "Which Type of Vehicle Would You Like?\n",
      name: "vehicleType",
      choices: ["Car", "Motorcycle"],
    },
  ],
  car: [
    {
      type: "list",
      message: "Which Car Would You Like To Chose?\n",
      name: "carType",
      choices: ["Standard", "Pipe Frame", "Mach 8", "Tri-Speeder"],
    },
  ],
  motorcycle: [
    {
      type: "list",
      message: "Which Car Would You Like To Chose?\n",
      name: "motorcycleType",
      choices: ["Standard", "Comet", "Sports Bike", "Flame Rider"],
    },
  ],
};
