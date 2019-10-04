import { Component, OnInit } from '@angular/core';
import { StatementService } from "../../core/services/statement/statement.service";

@Component( {
	selector: 'app-statements',
	templateUrl: './statements.component.html',
	styleUrls: [ './statements.component.scss' ]
} )
export class StatementsComponent implements OnInit {

	data = [];

	constructor( private _statementService: StatementService ) {
	}

	ngOnInit() {
		this.getData();
	}

	getData() {
		this._statementService.get().subscribe( resp => {
			this.data = resp;
		} );
	}

	selectStatement( row ) {
		console.log( row );
	}

	deleteRow( id ) {
		this._statementService.delete( id ).subscribe( resp => {
			this.getData();
		} );
	}
}
