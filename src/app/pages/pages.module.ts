import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { StatementsComponent } from "./statements/statements.component";
import {
	MatButtonModule,
	MatCheckboxModule, MatDialogModule, MatFormFieldModule,
	MatGridListModule, MatIconModule, MatInputModule,
	MatPaginatorModule,
	MatTableModule,
	MatToolbarModule
} from "@angular/material";
import { TableDataComponent } from "./components/table-data/table-data.component";
import { CommonModule } from "@angular/common";
import { CreateDialogComponent } from "./components/create-dialog/create-dialog.component";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

@NgModule( {
	entryComponents: [ CreateDialogComponent ],
	imports: [
		PagesRoutingModule,
		MatGridListModule,
		MatToolbarModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatIconModule,
		MatDialogModule,
		CommonModule,
		FormsModule,
		ChartsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	declarations: [
		PagesComponent,
		StatementsComponent,
		TableDataComponent,
		CreateDialogComponent,
	],
} )
export class PagesModule {
}
