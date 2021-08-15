import { merge, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { CEP } from './interfaces/cep';
import { Options } from './interfaces/options';
import { AvaliableService } from './services/service';

import avaliableServices from './services';

const fetchServices = (cep: string, services: AvaliableService[]) => {
  return merge(
    ...services.map((service) =>
      avaliableServices()[service].fetch(cep, service)
    )
  ).pipe(
    first(),
    map((data) => ({ ...data, cep: data.cep.replace(/\D/g, '') }))
  );
};

export const findByCep = (
  cep: string,
  options: Options = {}
): Observable<CEP> => {
  options.services = Array.isArray(options.services)
    ? options.services
    : (Object.keys(avaliableServices()) as AvaliableService[]);
  return fetchServices(cep.replace(/\D/g, ''), options.services);
};

export default findByCep;
