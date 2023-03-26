import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { DropDownComponent } from './drop-down/drop-down.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownService } from './dropdown.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, DropDownComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [DropdownService],
})
export class AppModule {}
