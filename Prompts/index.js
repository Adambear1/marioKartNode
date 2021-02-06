module.exports = {
    init: [{
        type: 'list',
        message: 'Which Character Would You Like to Choose?\n',
        name: 'character',
        choices: [
            "Mario",
            "Todd",
            "Princess Peach",
            "Browser",
            "Yoshi",
            "Rosalina"
        ],
    },
    {
        type: 'list',
        message: 'Which Type of Vehicle Would You Like?\n',
        name: 'vehicleType',
        choices: [
            "Car",
            "Motorcycle",
        ],
    }
],
vehicle: []
}