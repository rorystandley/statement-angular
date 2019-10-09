import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StatementService } from './services/statement/statement.service';
import { CustomEventEmitterService } from "./services/custom-event-emitter/custom-event-emitter.service";


@NgModule( {
	declarations: [],
	imports: [
		HttpClientModule
	],
	providers: [
		StatementService,
		CustomEventEmitterService
	]
} )
export class SharedCoreModule {
	constructor( @Optional() @SkipSelf() parentModule: SharedCoreModule ) {
		if ( parentModule ) {
			throw new Error(
				'Core is already loaded. Import it in the AppModule only'
			);
		}
	}
}
