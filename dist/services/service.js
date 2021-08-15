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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map } from 'rxjs/operators';
export var AvaliableService;
(function (AvaliableService) {
    AvaliableService["BrasilApi"] = "brasilapi";
    AvaliableService["Viacep"] = "viacep";
    AvaliableService["Widenet"] = "widenet";
})(AvaliableService || (AvaliableService = {}));
var Service = /** @class */ (function () {
    function Service(url) {
        this.url = url;
    }
    Service.prototype.handleParam = function (service) {
        var _a;
        return (_a = {},
            _a[AvaliableService.BrasilApi] = function (cep) { return cep; },
            _a[AvaliableService.Viacep] = function (cep) { return cep + "/json"; },
            _a[AvaliableService.Widenet] = function (cep) { return cep + ".json"; },
            _a)[service];
    };
    Service.prototype.handleData = function (service) {
        var _a;
        return (_a = {},
            _a[AvaliableService.BrasilApi] = function (_a) {
                var neighborhood = _a.neighborhood, data = __rest(_a, ["neighborhood"]);
                return (__assign(__assign({}, data), { district: neighborhood, service: service }));
            },
            _a[AvaliableService.Viacep] = function (data) { return ({
                cep: data.cep,
                city: data.localidade,
                state: data.uf,
                street: data.logradouro,
                district: data.bairro,
                service: service,
            }); },
            _a[AvaliableService.Widenet] = function (data) { return ({
                cep: data.code,
                city: data.city,
                state: data.state,
                street: data.address,
                district: data.district,
                service: service,
            }); },
            _a)[service];
    };
    Service.prototype.fetch = function (cep, service) {
        var _this = this;
        return ajax(this.url + '/' + this.handleParam(service)(cep)).pipe(filter(function (_a) {
            var status = _a.status;
            return status === 200;
        }), map(function (_a) {
            var response = _a.response;
            return response;
        }), map(function (data) { return _this.handleData(service)(data); }), map(function (data) { return ((data === null || data === void 0 ? void 0 : data.cep) ? data : null); }), catchError(function () { return of(null); }));
    };
    return Service;
}());
export { Service };
