import { Routes } from '@angular/router';
import { DropDownComponent } from './drop-down/drop-down.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: 'dropdown', component: DropDownComponent },
  { path: '', redirectTo: 'dropdown', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
