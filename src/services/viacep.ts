import { Service } from './service';

export class ViacepService extends Service {
  constructor() {
    super('https://viacep.com.br/ws');
  }
}
