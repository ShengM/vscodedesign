import { Emitter, Event, setGlobalLeakWarningThreshold } from './base/common/event';
import { IDisposable } from './base/common/lifecycle';

class Document1 {
  private _onDidChange = new Emitter<string>();
  public onDidChange: Event<string> = this._onDidChange.event;
  public setText(value: string): void {
    this._onDidChange.fire(value);
  }
}

class Counter {
  private _count: number = 0;

  public get count() {
    return this._count;
  }

  public reset(): void {
    this._count = 0;
  }

  public onEvent(eventArg: string): void {
    console.log('eventArg:', eventArg);
    this._count++;
    console.log('count:', this._count);
  }
}

setGlobalLeakWarningThreshold(50);

let counter = new Counter();
let doc = new Document1();
let bucket: IDisposable[] = [];
let subscription = doc.onDidChange(counter.onEvent, counter, bucket);

doc.setText('hello');

bucket.pop().dispose();
doc.setText('world');

subscription.dispose();
doc.setText('python');
console.log('end');
