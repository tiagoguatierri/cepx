"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brasil_api_1 = require("./brasil-api");
var service_1 = require("./service");
var viacep_1 = require("./viacep");
var widenet_1 = require("./widenet");
exports.default = (function () {
    var _a;
    return (_a = {},
        _a[service_1.AvaliableService.BrasilApi] = new brasil_api_1.BrasilApiService(),
        _a[service_1.AvaliableService.Viacep] = new viacep_1.ViacepService(),
        _a[service_1.AvaliableService.Widenet] = new widenet_1.WidenetService(),
        _a);
});
