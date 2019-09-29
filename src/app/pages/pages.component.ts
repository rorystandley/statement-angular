import { Component } from '@angular/core';

@Component( {
	selector: 'app-pages',
	styleUrls: [ 'pages.component.scss' ],
	template: `
        <mat-toolbar class="mat-elevation-z6" color="primary">Statements</mat-toolbar>
        <router-outlet></router-outlet>
	`,
} )
export class PagesComponent {

}
