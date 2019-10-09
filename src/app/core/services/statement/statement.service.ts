import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class StatementService {

	constructor( private _http: HttpClient ) {
	}

	get(): Observable<any> {
		return this._http.get( environment.apiEndpoint + '/statements' );
	}

	delete( id ): Observable<any> {
		return this._http.delete( environment.apiEndpoint + `/statement/${id}` );
	}

	create( data ): Observable<any> {
		return this._http.post( environment.apiEndpoint + `/statement`, data );
	}

}
