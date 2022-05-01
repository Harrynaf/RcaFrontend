import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpDataService } from './http-data.service';
import { PropertyFormComponent } from './property-form/property-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PropertyListComponent,
    RepairListComponent,
    UserFormComponent,
    PropertyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
