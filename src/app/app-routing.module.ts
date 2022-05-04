import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDemoComponent } from './admin-demo/admin-demo.component';
import { LoginDemoComponent } from './login-demo/login-demo.component';
import { LoginComponent } from './login/login.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { RepairFormComponent } from './repair-form/repair-form.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {

    path:'admin-demo',
      component: AdminDemoComponent,
      children: [
        { path: 'user-list', component: UserListComponent, 
        children: [
          { path: 'user-form/:id', component: UserFormComponent }
        ]},
        { path: 'property-list', component: PropertyListComponent,
        children: [
          { path: 'property-form/:id', component: PropertyFormComponent }
        ]},
        { path: 'repair-list', component: RepairListComponent,    
        children: [
          { path: 'repair-form/:id', component: RepairFormComponent }
        ]}
      ]
    },
    {
      path:'login',
        component: LoginComponent,
        children: [
          { path: 'login-demo/:id', component: LoginDemoComponent},
        ]
      },

  {
    path:'login-demo/:id',
      component: LoginDemoComponent,
      children: [
        { path: 'property-list', component: PropertyListComponent,
      children: [{path: 'property-form/:id', component: PropertyFormComponent}]},
        { path: 'repair-list', component: RepairListComponent,
        children: [{path: 'repair-form/:id', component: RepairFormComponent}]}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
