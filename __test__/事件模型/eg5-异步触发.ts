import { AsyncEmitter, IWaitUntil } from 'base/common/event';

function timeout(millseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, millseconds);
  });
}

interface E extends IWaitUntil {
  msg: string;
}

let emitter = new AsyncEmitter<E>();

emitter.event(function (eventArg) {
  eventArg.waitUntil(timeout(3000).then(() => console.log('handler1:', eventArg.msg)));
});

emitter.event(function (eventArg) {
  console.log('handler2', eventArg.msg);
});

emitter.fireAsync(thenables => ({
  msg: 'hello world',
  waitUntil(t) {
    thenables.push(t);
  }
}));

console.log('eg5 done');
