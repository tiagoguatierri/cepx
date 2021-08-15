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
import { merge } from 'rxjs';
import { first, map } from 'rxjs/operators';
import avaliableServices from './services';
var fetchServices = function (cep, services) {
    return merge.apply(void 0, services.map(function (service) {
        return avaliableServices()[service].fetch(cep, service);
    })).pipe(first(), map(function (data) { return (__assign(__assign({}, data), { cep: data.cep.replace(/\D/g, '') })); }));
};
export var findByCep = function (cep, options) {
    if (options === void 0) { options = {}; }
    options.services = Array.isArray(options.services)
        ? options.services
        : Object.keys(avaliableServices());
    return fetchServices(cep.replace(/\D/g, ''), options.services);
};
export default findByCep;
