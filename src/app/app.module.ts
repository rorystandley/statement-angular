import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedCoreModule } from './core/core.module';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedCoreModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
