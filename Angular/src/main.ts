import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import config from 'devextreme/core/config';
import { AppModule } from './app/app.module';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], })
  .catch((err) => console.error(err));
