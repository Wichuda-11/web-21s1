"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
exports.app = express();
exports.app.get('/', (req, res) => res.send('Hello BC Students'));
exports.app.get('/cheese', (req, res) => res.send('Cheese & Bread'));
console.log('Reloading...');
//# sourceMappingURL=app.js.map