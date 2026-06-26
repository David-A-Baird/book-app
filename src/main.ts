import { bootstrapApplication } from '@angular/platform-browser';
import { Header } from './app/components/header/header';
import { Footer } from './app/components/footer/footer';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
