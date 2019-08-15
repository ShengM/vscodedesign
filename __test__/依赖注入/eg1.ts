import { createDecorator } from 'platform/instantiation/common/instantiation';

interface IService1 {
  _serviceBrand: any;
  c: number;
}

let IService1 = createDecorator<IService1>('service1');
