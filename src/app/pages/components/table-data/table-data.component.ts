import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

@Component( {
	selector: 'app-table-data',
	templateUrl: './table-data.component.html',
	styleUrls: [ './table-data.component.scss' ]
} )
export class TableDataComponent implements OnChanges {

	@Input() displayedColumns: string[];
	@Input() data;
	@Input() enableDelete = true;
	@Output() rowSelected = new EventEmitter();
	@Output() rowDeleted = new EventEmitter();
	@ViewChild( MatPaginator, { static: true } ) paginator: MatPaginator;
	selection = new SelectionModel( true, [] );
	dataSource;


	constructor() {

	}

	ngOnChanges() {
		this.dataSource = new MatTableDataSource( this.data );
		this.dataSource.paginator = this.paginator;
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected() ?
			this.selection.clear() :
			this.dataSource.data.forEach( row => this.selection.select( row ) );
	}

	/** The label for the checkbox on the passed row */
	checkboxLabel( row? ): string {
		if ( !row ) {
			return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
		}
		return `${this.selection.isSelected( row ) ? 'deselect' : 'select'} row ${row.position + 1}`;
	}

	deleteSelected() {
		if ( confirm( 'Are  you sure?' ) ) {
			this.selection.selected.forEach( row => {
				this.selection.deselect( row );
				this.emitRowDeleted( row._id );
			} );
		}
	}

	emitRowSelected( row ) {
		this.rowSelected.emit( row );
	}

	emitRowDeleted( id ) {
		this.rowDeleted.emit( id );
	}
}
