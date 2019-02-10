import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AngularMaterialTableDataSource } from './angular-material-table-datasource';

@Component({
  selector: 'material-angular-material-table',
  templateUrl: './angular-material-table.component.html',
  styleUrls: ['./angular-material-table.component.css']
})
export class AngularMaterialTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AngularMaterialTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'star'];

  ngOnInit() {
    this.dataSource = new AngularMaterialTableDataSource(this.paginator, this.sort);
  }
}
