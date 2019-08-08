// 1.添加事件监听1、2
// 2.使用IDisposable数组保存事件订阅1
// 3.使用DisposableStore保存事件订阅2
// 4.触发事件
// 5.移除事件监听1和2
// 6.触发事件

import { IDisposable, DisposableStore } from '../base/common/lifecycle';
import { Document1 } from './document1';
import { Counter } from './counter';

let doc = new Document1();
let counter = new Counter();

let bucket1: IDisposable[] = [];
let bucket2 = new DisposableStore();

doc.onDidChange(counter.onEvent, counter, bucket1);
doc.onDidChange(counter.onEvent, counter, bucket2);

doc.setText('some content');

while (bucket1.length) {
  bucket1.pop().dispose();
}

bucket2.clear();

doc.setText('more content');

console.log('eg2 done');