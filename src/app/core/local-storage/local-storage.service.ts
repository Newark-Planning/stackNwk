import { Injectable } from '@angular/core';

const APP_PREFIX = 'NWK-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static loadInitialState(): any {
    return Object.keys(localStorage)
    .reduce((state: any, storageKey: string) => {
      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map(key =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0)
                  .toUpperCase() + token.slice(1)
              )
              .join('')
          );
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            // tslint:disable-next-line: no-non-null-assertion
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey)!);

            return;
          }
          // tslint:disable-next-line: strict-boolean-expressions
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }

      return state;
    }, {});
  }

  setItem(key: string, value: any): any {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string): any {
    // tslint:disable-next-line: no-non-null-assertion
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`)!);
  }

  removeItem(key: string): any {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  /** Tests that localStorage exists, can be written to, and read from. */
  testLocalStorage(): any {
    const testValue = 'testValue';
    const testKey = 'testKey';
    let retrievedValue: string;
    const errorMessage = 'localStorage did not return expected value';

    this.setItem(testKey, testValue);
    retrievedValue = this.getItem(testKey);
    this.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
