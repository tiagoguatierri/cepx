export declare enum AvaliableService {
    BrasilApi = "brasilapi",
    Viacep = "viacep",
    Widenet = "widenet"
}
export declare abstract class Service {
    url: string;
    constructor(url: string);
    private handleParam;
    private handleData;
    fetch(cep: string, service: AvaliableService): import("rxjs").Observable<any>;
}
