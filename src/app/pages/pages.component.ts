import { Component } from '@angular/core';
import { CreateDialogComponent } from "./components/create-dialog/create-dialog.component";
import { MatDialog } from "@angular/material";
import { StatementService } from "../core/services/statement/statement.service";
import { CustomEventEmitterService } from "../core/services/custom-event-emitter/custom-event-emitter.service";

@Component( {
	selector: 'app-pages',
	styleUrls: [ 'pages.component.scss' ],
	template: `
        <mat-toolbar class="mat-elevation-z6" color="primary">
            <mat-toolbar-row>
                <span>Statements</span>
                <span class="header-spacer"></span>
                <mat-icon class="header-icon" aria-hidden="false" (click)="create()" aria-label="Example create icon">
                    create
                </mat-icon>
            </mat-toolbar-row>
        </mat-toolbar>
        <router-outlet></router-outlet>
	`,
} )
export class PagesComponent {

	constructor( public _dialog: MatDialog,
	             private _statementService: StatementService,
	             private _customerEventServiceEmitter: CustomEventEmitterService ) {

	}

	create() {
		const dialogRef = this._dialog.open( CreateDialogComponent, {
			data: ''
		} );

		dialogRef.afterClosed().subscribe( result => {
			if ( result ) {
				this._statementService.create( JSON.parse( result ) ).subscribe( resp => {
					this._customerEventServiceEmitter.emit( 'statements:get' );
				} );
			}
		} );
	}
}
