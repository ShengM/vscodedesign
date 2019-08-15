// 事件按顺序投递
// 同一个事件的每次触发都会按顺序执行完所有处理器，即使在事件的处理器中又触发相同事件
// 这是由事件触发处理中的投递队列来保证的

import { Emitter } from 'base/common/event';

let a = new Emitter<string>();
let eventArgs: string[] = [];

a.event(function (eventArg) {
  if (eventArg === 'e1') {
    a.fire('e2');
  }
});

a.event(function (eventArg) {
  eventArgs.push(eventArg);
});

a.fire('e1');