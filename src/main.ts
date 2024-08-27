import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderSectionComponent } from './app/components/header-section/header-section.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
