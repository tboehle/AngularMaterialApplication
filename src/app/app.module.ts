import { AngularDashboardComponentComponent } from './angular-dashboard-component/angular-dashboard-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularNavigationComponentComponent } from './angular-navigation-component/angular-navigation-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
  MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { RoutingModule } from './app.routing.module';
import { AngularMaterialTableComponent } from './angular-material-table/angular-material-table.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularNavigationComponentComponent,
    AngularDashboardComponentComponent,
    AngularMaterialTableComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
