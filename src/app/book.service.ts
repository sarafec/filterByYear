import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Books } from './books';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
	constructor(private http: HttpClient){ }
	private dataUrl = './assets/books.json';

	getData(): Observable<Books[]> {
		return this.http.get(this.dataUrl)
			.map(this.extractData);
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw new Error('Bad response status: ' + response.status);
		}
		let body = response;
		return body || { };
	}
};