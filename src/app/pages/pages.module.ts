import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { StatementsComponent } from "./statements/statements.component";
import {
	MatCheckboxModule,
	MatGridListModule,
	MatPaginatorModule,
	MatTableModule,
	MatToolbarModule
} from "@angular/material";
import { TableDataComponent } from "./components/table-data/table-data.component";
import { CommonModule } from "@angular/common";

@NgModule( {
	imports: [
		PagesRoutingModule,
		MatGridListModule,
		MatToolbarModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		CommonModule
	],
	declarations: [
		PagesComponent,
		StatementsComponent,
		TableDataComponent
	],
} )
export class PagesModule {
}
