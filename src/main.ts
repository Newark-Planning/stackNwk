// tslint:disable-next-line: no-import-side-effect
import { defineCustomElements } from '@carto/airship-components/dist/loader';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
defineCustomElements(window)
.catch(err => { console.error(err); });

platformBrowserDynamic()
.bootstrapModule(AppModule)
.then(ref => {
  const ngRef = 'ngRef';
  // Ensure Angular destroys itself on hot reloads.
  if (window[ngRef]) {
    window[ngRef].destroy();
  }
  window[ngRef] = ref;
})
.catch(err => { console.error(err); });
