import { Service } from './service';

export class BrasilApiService extends Service {
  constructor() {
    super('https://brasilapi.com.br/api/cep/v1');
  }
}
