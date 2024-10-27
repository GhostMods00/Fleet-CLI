"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required classes and modules
const inquirer_1 = __importDefault(require("inquirer"));
const Truck_js_1 = __importDefault(require("./Truck.js"));
const Car_js_1 = __importDefault(require("./Car.js"));
const Motorbike_js_1 = __importDefault(require("./Motorbike.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// Define the Cli class
class Cli {
    // Updated constructor to accept Truck and Motorbike objects as well
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    // Static method to generate a random VIN
    static generateVin() {
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // Method to choose a vehicle from existing vehicles
    chooseVehicle() {
        inquirer_1.default
            .prompt([
            {
                type: "list",
                name: "selectedVehicleVin",
                message: "Select a vehicle to perform an action on",
                choices: this.vehicles.map((vehicle) => ({
                    name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                    value: vehicle.vin,
                })),
            },
        ])
            .then((answers) => {
            this.selectedVehicleVin = answers.selectedVehicleVin;
            this.performActions();
        });
    }
    // Method to create a new vehicle
    createVehicle() {
        inquirer_1.default
            .prompt([
            {
                type: "list",
                name: "vehicleType",
                message: "Select a vehicle type",
                choices: ["Car", "Truck", "Motorbike"],
            },
        ])
            .then((answers) => {
            if (answers.vehicleType === "Car") {
                this.createCar();
            }
            else if (answers.vehicleType === "Truck") {
                this.createTruck();
            }
            else if (answers.vehicleType === "Motorbike") {
                this.createMotorbike();
            }
        });
    }
    // Method to create a car
    createCar() {
        inquirer_1.default
            .prompt([
            { type: "input", name: "color", message: "Enter Color" },
            { type: "input", name: "make", message: "Enter Make" },
            { type: "input", name: "model", message: "Enter Model" },
            { type: "input", name: "year", message: "Enter Year" },
            { type: "input", name: "weight", message: "Enter Weight" },
            { type: "input", name: "topSpeed", message: "Enter Top Speed" },
        ])
            .then((answers) => {
            const car = new Car_js_1.default(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            this.vehicles.push(car);
            this.selectedVehicleVin = car.vin;
            this.performActions();
        });
    }
    // Method to create a truck
    createTruck() {
        inquirer_1.default
            .prompt([
            { type: "input", name: "color", message: "Enter Color" },
            { type: "input", name: "make", message: "Enter Make" },
            { type: "input", name: "model", message: "Enter Model" },
            { type: "input", name: "year", message: "Enter Year" },
            { type: "input", name: "weight", message: "Enter Weight" },
            { type: "input", name: "topSpeed", message: "Enter Top Speed" },
            { type: "input", name: "towingCapacity", message: "Enter Towing Capacity" },
        ])
            .then((answers) => {
            const truck = new Truck_js_1.default(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [], parseInt(answers.towingCapacity));
            this.vehicles.push(truck);
            this.selectedVehicleVin = truck.vin;
            this.performActions();
        });
    }
    // Method to create a motorbike
    createMotorbike() {
        inquirer_1.default
            .prompt([
            { type: "input", name: "color", message: "Enter Color" },
            { type: "input", name: "make", message: "Enter Make" },
            { type: "input", name: "model", message: "Enter Model" },
            { type: "input", name: "year", message: "Enter Year" },
            { type: "input", name: "weight", message: "Enter Weight" },
            { type: "input", name: "topSpeed", message: "Enter Top Speed" },
        ])
            .then((answers) => {
            const motorbike = new Motorbike_js_1.default(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [new Wheel_js_1.default(), new Wheel_js_1.default()]);
            this.vehicles.push(motorbike);
            this.selectedVehicleVin = motorbike.vin;
            this.performActions();
        });
    }
    // Method to perform actions on a selected vehicle
    performActions() {
        inquirer_1.default
            .prompt([
            {
                type: "list",
                name: "action",
                message: "Select an action",
                choices: [
                    "Print details",
                    "Start vehicle",
                    "Accelerate 5 MPH",
                    "Decelerate 5 MPH",
                    "Stop vehicle",
                    "Turn right",
                    "Turn left",
                    "Reverse",
                    "Tow a vehicle",
                    "Do a wheelie",
                    "Select or create another vehicle",
                    "Exit",
                ],
            },
        ])
            .then((answers) => {
            const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
            if (!vehicle) {
                console.log("Vehicle not found.");
                return;
            }
            // Process selected action
            switch (answers.action) {
                case "Print details":
                    vehicle.printDetails();
                    break;
                case "Start vehicle":
                    vehicle.start();
                    break;
                case "Accelerate 5 MPH":
                    vehicle.accelerate(5);
                    break;
                case "Decelerate 5 MPH":
                    vehicle.decelerate(5);
                    break;
                case "Stop vehicle":
                    vehicle.stop();
                    break;
                case "Turn right":
                    vehicle.turn("right");
                    break;
                case "Turn left":
                    vehicle.turn("left");
                    break;
                case "Reverse":
                    vehicle.reverse();
                    break;
                case "Tow a vehicle":
                    if (vehicle instanceof Truck_js_1.default) {
                        this.findVehicleToTow(vehicle);
                    }
                    else {
                        console.log("This action is only available for trucks.");
                    }
                    break;
                case "Do a wheelie":
                    if (vehicle instanceof Motorbike_js_1.default) {
                        vehicle.wheelie();
                    }
                    else {
                        console.log("This action is only available for motorbikes.");
                    }
                    break;
                case "Select or create another vehicle":
                    this.startCli();
                    return;
                case "Exit":
                    this.exit = true;
                    break;
            }
            if (!this.exit) {
                this.performActions();
            }
        });
    }
    // Method to select a vehicle for towing by a truck
    findVehicleToTow(truck) {
        inquirer_1.default
            .prompt([
            {
                type: "list",
                name: "vehicleToTow",
                message: "Select a vehicle to tow",
                choices: this.vehicles
                    .filter((v) => v !== truck)
                    .map((vehicle) => ({
                    name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                    value: vehicle,
                })),
            },
        ])
            .then((answers) => {
            const vehicleToTow = answers.vehicleToTow;
            if (truck.towingCapacity >= vehicleToTow.weight) {
                truck.tow(vehicleToTow);
            }
            else {
                console.log("Selected vehicle is too heavy to be towed.");
            }
            this.performActions();
        });
    }
    // Method to start the CLI
    startCli() {
        inquirer_1.default
            .prompt([
            {
                type: "list",
                name: "CreateOrSelect",
                message: "Would you like to create a new vehicle or perform an action on an existing vehicle?",
                choices: ["Create a new vehicle", "Select an existing vehicle"],
            },
        ])
            .then((answers) => {
            if (answers.CreateOrSelect === "Create a new vehicle") {
                this.createVehicle();
            }
            else {
                this.chooseVehicle();
            }
        });
    }
}
// Export the Cli class
exports.default = Cli;
