import { AngularFileTreeComponent } from './angular-file-tree/angular-file-tree.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularDashboardComponentComponent } from './angular-dashboard-component/angular-dashboard-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularNavigationComponentComponent } from './angular-navigation-component/angular-navigation-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
  MatOptionModule, MatSelectModule, MatRadioModule, MatInputModule, MatTreeModule,
  MatDatepickerModule, MatNativeDateModule, MatTooltipModule } from '@angular/material';
import { RoutingModule } from './app.routing.module';
import { AngularMaterialTableComponent } from './angular-material-table/angular-material-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AngularNavigationComponentComponent,
    AngularDashboardComponentComponent,
    AngularMaterialTableComponent,
    AngularFormComponent,
    AngularFileTreeComponent
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
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
