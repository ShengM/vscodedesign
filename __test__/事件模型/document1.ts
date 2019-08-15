import { Emitter, Event } from 'base/common/event';

export class Document1 {
  private _onDidChange = new Emitter<string>();
  public onDidChange: Event<string> = this._onDidChange.event;
  public setText(value: string): void {
    this._onDidChange.fire(value);
  }
}
