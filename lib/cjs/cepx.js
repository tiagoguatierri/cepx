"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByCep = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var services_1 = __importDefault(require("./services"));
var fetchServices = function (cep, services) {
    return rxjs_1.merge.apply(void 0, services.map(function (service) {
        return services_1.default()[service].fetch(cep, service);
    })).pipe(operators_1.first(), operators_1.map(function (data) { return (__assign(__assign({}, data), { cep: data.cep.replace(/\D/g, '') })); }));
};
var findByCep = function (cep, options) {
    if (options === void 0) { options = {}; }
    options.services = Array.isArray(options.services)
        ? options.services
        : Object.keys(services_1.default());
    return fetchServices(cep.replace(/\D/g, ''), options.services);
};
exports.findByCep = findByCep;
exports.default = exports.findByCep;
