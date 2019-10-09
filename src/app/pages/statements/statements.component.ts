import { Component, OnInit } from '@angular/core';
import { StatementService } from "../../core/services/statement/statement.service";
import { CustomEventEmitterService } from "../../core/services/custom-event-emitter/custom-event-emitter.service";

@Component( {
	selector: 'app-statements',
	templateUrl: './statements.component.html',
	styleUrls: [ './statements.component.scss' ]
} )
export class StatementsComponent implements OnInit {

	data = [];
	selectedStatement = [];

	constructor( private _statementService: StatementService,
	             private _customEventServiceEmitter: CustomEventEmitterService ) {
	}

	ngOnInit() {
		this.getData();

		this._customEventServiceEmitter.notifyObservable$.subscribe( event => {
			if ( event = 'statement:get' ) {
				this.getData();
			}
		} );
	}

	getData() {
		this._statementService.get().subscribe( resp => {
			this.data = resp;
		} );
	}

	selectStatement( row ) {
		this.selectedStatement = row.transactions;
	}

	deleteRow( id ) {
		this._statementService.delete( id ).subscribe( resp => {
			this.getData();
		} );
	}
}
