"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Vehicle and Wheel classes
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// Motorbike class that extends Vehicle
class Motorbike extends Vehicle_js_1.default {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels.length === 2 ? wheels : [new Wheel_js_1.default(), new Wheel_js_1.default()];
    }
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        // Corrected property names
        console.log(`Front Wheel: ${this.wheels[0].diameter} inch with a ${this.wheels[0].tireBrand} tire`);
        console.log(`Rear Wheel: ${this.wheels[1].diameter} inch with a ${this.wheels[1].tireBrand} tire`);
    }
}
exports.default = Motorbike;
