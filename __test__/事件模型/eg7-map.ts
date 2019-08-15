import { Event } from 'base/common/event';
import { Document1 } from './document1';

let doc = new Document1();
let onDidChange = Event.map(doc.onDidChange, i => i + '+++');
onDidChange(e => console.log('handler1:', e));
doc.onDidChange(e => console.log('handler2:', e));

doc.setText('hello');
doc.setText('world');
console.log('eg7 done');
