import { Observable } from 'rxjs';
import { CEP } from './interfaces/cep';
import { Options } from './interfaces/options';
export declare const findByCep: (cep: string, options?: Options) => Observable<CEP>;
export default findByCep;
