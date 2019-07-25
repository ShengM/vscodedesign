import { Emitter, Event } from './base/common/event';

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

  public onEvent(): void {
    this._count++;
    console.log('count:', this._count);
  }
}

let counter = new Counter();
let doc = new Document1();
let subscription = doc.onDidChange(counter.onEvent, counter);

doc.setText('hello');
doc.setText('world');
doc.setText('python');

subscription.dispose();
