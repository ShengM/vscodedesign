export class Counter {
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
