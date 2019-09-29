import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { StatementsComponent } from "./statements/statements.component";

@NgModule( {
	imports: [
		PagesRoutingModule,
	],
	declarations: [
		PagesComponent,
		StatementsComponent
	],
} )
export class PagesModule {
}
