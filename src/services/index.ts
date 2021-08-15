import { BrasilApiService } from './brasil-api';
import { AvaliableService } from './service';
import { ViacepService } from './viacep';
import { WidenetService } from './widenet';

export default () => ({
  [AvaliableService.BrasilApi]: new BrasilApiService(),
  [AvaliableService.Viacep]: new ViacepService(),
  [AvaliableService.Widenet]: new WidenetService(),
});
