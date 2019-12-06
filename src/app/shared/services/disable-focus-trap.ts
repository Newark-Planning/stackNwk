import { Injectable } from '@angular/core';

@Injectable()
export class DisableFocusTrap {
  constructor() {
    try {
      (document.activeElement as HTMLElement).blur();
    } catch (e) {
      // Ignore because we're on a platform that doesn't have DOM access like a server
    }
  }
  get current(): any {

    return undefined;
  }
  // tslint:disable-next-line: no-empty
  set current(value: any) { }
  // tslint:disable-next-line: no-empty
  activatePreviousTrapper(): any { }
}
