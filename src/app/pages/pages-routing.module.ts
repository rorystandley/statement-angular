import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from "./pages.component";
import { StatementsComponent } from "./statements/statements.component";


const routes: Routes = [ {
	path: '',
	component: PagesComponent,
	children: [
		{
			path: 'statements',
			component: StatementsComponent,
		},
		{
			path: '',
			redirectTo: 'statements',
			pathMatch: 'full',
		},
		// {
		// 	path: 'import',
		// 	component: ImportComponent
		// },
		// {
		// 	path: 'import-configuration',
		// 	component: ImportConfigurationComponent
		// },
	],
} ];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ],
} )
export class PagesRoutingModule {
}
