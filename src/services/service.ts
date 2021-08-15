import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map } from 'rxjs/operators';

export enum AvaliableService {
  BrasilApi = 'brasilapi',
  Viacep = 'viacep',
  Widenet = 'widenet',
}

export abstract class Service {
  constructor(public url: string) {}

  private handleParam(service: AvaliableService): (cep: string) => string {
    return {
      [AvaliableService.BrasilApi]: (cep: string) => cep,
      [AvaliableService.Viacep]: (cep: string) => `${cep}/json`,
      [AvaliableService.Widenet]: (cep: string) => `${cep}.json`,
    }[service];
  }

  private handleData(service: AvaliableService) {
    return {
      [AvaliableService.BrasilApi]: ({ neighborhood, ...data }: any) => ({
        ...data,
        district: neighborhood,
        service,
      }),
      [AvaliableService.Viacep]: (data: any) => ({
        cep: data.cep,
        city: data.localidade,
        state: data.uf,
        street: data.logradouro,
        district: data.bairro,
        service,
      }),
      [AvaliableService.Widenet]: (data: any) => ({
        cep: data.code,
        city: data.city,
        state: data.state,
        street: data.address,
        district: data.district,
        service,
      }),
    }[service];
  }

  fetch(cep: string, service: AvaliableService) {
    return ajax(this.url + '/' + this.handleParam(service)(cep)).pipe(
      filter(({ status }) => status === 200),
      map(({ response }) => response),
      map((data) => this.handleData(service)(data)),
      map((data) => (data?.cep ? data : null)),
      catchError(() => of(null))
    );
  }
}
