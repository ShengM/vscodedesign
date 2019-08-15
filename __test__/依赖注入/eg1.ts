// 使用实例化服务创建一个依赖其他服务的对象
// 使用实例化服务创建一个依赖其他服务的对象，构造函数中多一个非服务类型的参数

import { InstantiationService } from 'platform/instantiation/common/instantiationService';
import { ServiceCollection } from 'platform/instantiation/common/serviceCollection';
import { IService1, Service1, IService2, Service2, IService3, Service3, Service1Consumer, TargetWithStaticParam } from './common';

let serviceCollection = new ServiceCollection();
serviceCollection.set(IService1, new Service1());
serviceCollection.set(IService2, new Service2());
serviceCollection.set(IService3, new Service3());

let instantiationService = new InstantiationService(serviceCollection);
instantiationService.createInstance(Service1Consumer);
instantiationService.createInstance(TargetWithStaticParam, false);

console.log('eg1 done');
