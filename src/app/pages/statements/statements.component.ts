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
		this._statementService.get().subscribe( resp => {
			this.data = resp;
		} );
	}
}
