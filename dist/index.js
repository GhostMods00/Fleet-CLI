"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import classes
const Truck_js_1 = __importDefault(require("./classes/Truck.js"));
const Car_js_1 = __importDefault(require("./classes/Car.js"));
const Motorbike_js_1 = __importDefault(require("./classes/Motorbike.js"));
const Wheel_js_1 = __importDefault(require("./classes/Wheel.js"));
const Cli_js_1 = __importDefault(require("./classes/Cli.js"));
// create an array of vehicles
const vehicles = [];
// Create instances of Truck, Car, and Motorbike
const truck1 = new Truck_js_1.default(Cli_js_1.default.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
const car1 = new Car_js_1.default(Cli_js_1.default.generateVin(), "blue", "Toyota", "Camry", 2021, 3000, 130, []);
const motorbike1 = new Motorbike_js_1.default(Cli_js_1.default.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, [new Wheel_js_1.default(17, "Michelin"), new Wheel_js_1.default(17, "Michelin")]);
// Push instances to the vehicles array
vehicles.push(truck1, car1, motorbike1);
// Create a new instance of the Cli class with the vehicles array
const cli = new Cli_js_1.default(vehicles);
// Start the CLI
cli.startCli();
