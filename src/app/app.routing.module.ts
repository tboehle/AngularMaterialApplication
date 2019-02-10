import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularDashboardComponentComponent } from './angular-dashboard-component/angular-dashboard-component.component';
import { AngularMaterialTableComponent } from './angular-material-table/angular-material-table.component';
import { AngularNavigationComponentComponent } from './angular-navigation-component/angular-navigation-component.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: AngularDashboardComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'table', component: AngularMaterialTableComponent },
  { path: 'form', component: AngularFormComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
