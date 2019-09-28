import { Component } from '@angular/core';
import { StatementService } from './core/services/statement/statement.service';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

	constructor( private _statementService: StatementService ) {
		this._statementService.get().subscribe( resp => {
			console.log( resp );
		} );
	}
}
