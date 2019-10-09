import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component( {
	selector: 'app-create-dialog',
	templateUrl: './create-dialog.component.html',
	styleUrls: [ './create-dialog.component.scss' ]
} )
export class CreateDialogComponent {

	constructor( public _dialogRef: MatDialogRef<CreateDialogComponent>, @Inject( MAT_DIALOG_DATA ) public data: any = '' ) {

	}
}
