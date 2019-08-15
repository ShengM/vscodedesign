// 延迟构造，依赖处理
import { SyncDescriptor } from 'platform/instantiation/common/descriptors';
import { ServiceCollection } from 'platform/instantiation/common/serviceCollection';
import { InstantiationService } from 'platform/instantiation/common/instantiationService';
import { IService1, Service1, IDependentService, DependentService, DependentServiceTarget, DependentServiceTarget2 } from './common';

let serviceCollection = new ServiceCollection();
let instantiationService = new InstantiationService(serviceCollection);

serviceCollection.set(IService1, new SyncDescriptor<IService1>(Service1));
serviceCollection.set(IDependentService, new SyncDescriptor<IDependentService>(DependentService));

instantiationService.invokeFunction(accessor => {
  let service = accessor.get(IDependentService);
});

let target = instantiationService.createInstance(DependentServiceTarget);
target = instantiationService.createInstance(DependentServiceTarget2);
