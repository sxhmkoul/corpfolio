import { Route } from '@angular/router';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

export const HOME_ROUTES: Route[] = [
  {
    path: '', component: HomeWrapperComponent
  }
];
