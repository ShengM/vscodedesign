import { optional } from 'platform/instantiation/common/instantiation';
import { InstantiationService } from 'platform/instantiation/common/instantiationService';
import { ServiceCollection } from 'platform/instantiation/common/serviceCollection';
import { IService1, Service1, Target2Dep, IService2, Service2, TargetOptional } from './common';

let serviceCollection = new ServiceCollection();
serviceCollection.set(IService1, new Service1());

// 严格模式服务容器中没有构造函数依赖的服务时将抛出异常
//let instantiationService = new InstantiationService(serviceCollection, true);
let instantiationService = new InstantiationService(serviceCollection);
instantiationService.createInstance(Target2Dep);

// 实例化服务的访问器
instantiationService.invokeFunction(function (accessor) {
  accessor.get(IService1);
  let service = accessor.get(IService2, optional);
});

let target = instantiationService.createInstance(TargetOptional);

serviceCollection.set(IService2, new Service2());

instantiationService.invokeFunction(accessor => {
  let service = accessor.get(IService2);
});

console.log('eg2 done');