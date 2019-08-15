import { createDecorator, optional } from 'platform/instantiation/common/instantiation';

export let IService1 = createDecorator<IService1>('service1');

export interface IService1 {
  _serviceBrand: any;
  c: number;
}

export class Service1 implements IService1 {
  _serviceBrand: any;
  c = 1;
}

export let IService2 = createDecorator<IService2>('service2');

export interface IService2 {
  _serviceBrand: any;
  d: boolean;
}

export class Service2 implements IService2 {
  _serviceBrand: any;
  d = true;
}

export let IService3 = createDecorator<IService3>('service3');

export interface IService3 {
  _serviceBrand: any;
  s: string;
}

export class Service3 implements IService3 {
  _serviceBrand: any;
  s = 'farboo';
}

export let IDependentService = createDecorator<IDependentService>('dependentService');

export interface IDependentService {
  _serviceBrand: any;
  name: string;
}

export class DependentService implements IDependentService {
  _serviceBrand: any;
  constructor(@IService1 service: IService1) {
    console.log('IService1', service);
  }

  name = 'farboo';
}

export class Service1Consumer {
  constructor(@IService1 service1: IService1) {
    console.log('IService1', service1);
  }
}

export class Target2Dep {
  constructor(@IService1 service1: IService1, @IService2 service2: Service2) {
    console.log(service1 instanceof Service1);
    console.log(service2 instanceof Service2);
  }
}

export class TargetWithStaticParam {
  constructor(v: boolean, @IService1 service1: IService1) {
    console.log('v:', v);
    console.log('IService1', service1);
  }
}

export class TargetOptional {
  constructor(@IService1 service1: IService1, @optional(IService2) service2: IService2) {
    console.log('IService1', service1);
    console.log('IService2', service2);
  }
}

export class DependentServiceTarget {
  constructor(@IDependentService d: IDependentService) {
    console.log('IDependentService', d);
  }
}

export class DependentServiceTarget2 {
  constructor(@IDependentService d: IDependentService, @IService1 s: IService1) {
    console.log('IDependentService', d);
    console.log('IService1', s);
  }
}

export class ServiceLoop1 implements IService1 {
  _serviceBrand: any;
  c = 1;

  constructor(@IService2 s: IService2) {
  }
}

export class ServiceLoop2 implements IService2 {
  _serviceBrand: any;
  d = true;

  constructor(@IService1 s: IService1) {
  }
}
