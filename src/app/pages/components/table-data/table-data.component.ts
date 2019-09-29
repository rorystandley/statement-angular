import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component( {
	selector: 'app-table-data',
	templateUrl: './table-data.component.html',
	styleUrls: [ './table-data.component.scss' ]
} )
export class TableDataComponent implements OnChanges {

	@Input() displayedColumns: string[];
	@Input() data;
	@Output() rowSelected = new EventEmitter();
	@ViewChild( MatPaginator, { static: true } ) paginator: MatPaginator;
	dataSource;


	constructor() {

	}

	ngOnChanges() {
		this.dataSource = new MatTableDataSource( this.data );
		this.dataSource.paginator = this.paginator;
	}

	emit( row ) {
		this.rowSelected.emit( row );
	}
}
