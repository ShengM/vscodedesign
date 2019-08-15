// 1.添加事件监听
// 2.触发事件
// 3.移除事件监听
// 4.触发事件

import { Document1 } from './document1';
import { Counter } from './counter';

let doc = new Document1();
let counter = new Counter();

let subscription = doc.onDidChange(counter.onEvent, counter);
doc.setText('some content');

subscription.dispose();
doc.setText('more content');

console.log('eg1 done');