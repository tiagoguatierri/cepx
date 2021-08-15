import { Service } from './service';

export class WidenetService extends Service {
  constructor() {
    super('https://ws.apicep.com/cep');
  }
}
