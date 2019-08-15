import { Event } from 'base/common/event';
import { Document1 } from './document1';

let doc = new Document1();
let onDocDidChange = Event.debounce(doc.onDidChange, (prev: string[], cur) => {
  if (!prev) {
    prev = [cur];
  } else if (prev.indexOf(cur) < 0) {
    prev.push(cur);
  }
  return prev;
}, 10);


let count = 0;

onDocDidChange(keys => {
  count++;
  if (count === 1) {
    doc.setText('4');
  } else if (count === 2) {
  }
});

doc.setText('1');
doc.setText('2');
doc.setText('3');