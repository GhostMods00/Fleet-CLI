"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor with default values for diameter and tireBrand
    constructor(diameter = 18, tireBrand = "GoodYear") {
        this._diameter = diameter;
        this._tireBrand = tireBrand;
    }
    // Getter for diameter
    get diameter() {
        return this._diameter;
    }
    // Getter for tireBrand
    get tireBrand() {
        return this._tireBrand;
    }
}
// Export the Wheel class
exports.default = Wheel;
