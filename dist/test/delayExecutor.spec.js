"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delayExecutor_1 = require("../main/delayExecutor");
var dateLog = function () { return console.log(new Date().toUTCString()); };
var ds = new delayExecutor_1.DelayExecutor(dateLog);
var start = new Date().getTime();
ds.start();
