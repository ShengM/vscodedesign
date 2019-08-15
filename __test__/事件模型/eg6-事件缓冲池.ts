import { EventBufferer, Emitter } from 'base/common/event';

let emitter = new Emitter<string>();
let bufferer = new EventBufferer();

let wrappedEvent = bufferer.wrapEvent(emitter.event);
wrappedEvent(eventArg => console.log('event fired:', eventArg));
emitter.fire('foo');

bufferer.bufferEvents(function () {
  emitter.fire('bar');
  console.log('code in event bufferer');
  emitter.fire('baz');
});

emitter.fire('ooz');

console.log('eg6 done');
