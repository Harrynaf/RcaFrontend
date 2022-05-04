import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpDataService } from './service/http-data.service';
import { PropertyFormComponent } from './property-form/property-form.component';
import { UniquePipe } from './pipes/unique.pipe';
import { RepairFormComponent } from './repair-form/repair-form.component';
import { FormsModule } from '@angular/forms';
import { AdminDemoComponent } from './admin-demo/admin-demo.component';
import { LoginDemoComponent } from './login-demo/login-demo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PropertyListComponent,
    RepairListComponent,
    UserFormComponent,
    PropertyFormComponent,
    UniquePipe,
    RepairFormComponent,
    AdminDemoComponent,
    LoginDemoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
