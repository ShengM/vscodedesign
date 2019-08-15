import { InstantiationService } from 'platform/instantiation/common/instantiationService';
import { ServiceCollection } from 'platform/instantiation/common/serviceCollection';
import { IService1, ServiceLoop1, IService2, ServiceLoop2 } from './common';
import { SyncDescriptor } from 'platform/instantiation/common/descriptors';

let serviceCollection = new ServiceCollection();
let instantiationService = new InstantiationService(serviceCollection);

serviceCollection.set(IService1, new SyncDescriptor<IService1>(ServiceLoop1));
serviceCollection.set(IService2, new SyncDescriptor<IService2>(ServiceLoop2));

instantiationService.invokeFunction(accessor => {
  let service = accessor.get(IService1);
});

