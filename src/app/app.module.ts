import { AngularDashboardComponentComponent } from './angular-dashboard-component/angular-dashboard-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularNavigationComponentComponent } from './angular-navigation-component/angular-navigation-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuTrigger, MatSelectTrigger, MatMenuModule } from '@angular/material';
import { RoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AngularNavigationComponentComponent,
    AngularDashboardComponentComponent,

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
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
