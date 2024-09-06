import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import config from './mfe.config.json';
import { AppComponent } from './app/app.component';

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const gridElement = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define(config.customElementName, gridElement);
})();
