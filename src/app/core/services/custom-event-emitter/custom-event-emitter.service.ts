import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CustomEventEmitterService {

	public _notify = new Subject<any>();

	/**
	 * Observable string streams
	 */
	notifyObservable$ = this._notify.asObservable();

	constructor() {
	}

	public emit( name: string, data?: any ) {
		this._notify.next( { name: name, data: data } );
	}

}
