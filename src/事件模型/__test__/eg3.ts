import { Emitter } from '../base/common/event';

let a = new Emitter({
  onFirstListenerAdd() {
    console.log('first listener add');
  }, onLastListenerRemove() {
    console.log('last listener remove');
  }
});

let subscription = a.event(function () { });
subscription.dispose();

subscription = a.event(function () { });
subscription.dispose();

console.log('eg3 done');