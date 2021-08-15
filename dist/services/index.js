import { BrasilApiService } from './brasil-api';
import { AvaliableService } from './service';
import { ViacepService } from './viacep';
import { WidenetService } from './widenet';
export default (function () {
    var _a;
    return (_a = {},
        _a[AvaliableService.BrasilApi] = new BrasilApiService(),
        _a[AvaliableService.Viacep] = new ViacepService(),
        _a[AvaliableService.Widenet] = new WidenetService(),
        _a);
});
