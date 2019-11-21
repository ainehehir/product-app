import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private SERVER_URL = "http://localhost:3000/products";
    

	
  constructor(private httpClient: HttpClient) { }

	handleError(error: HttpErrorResponse){
		let errorMessage = 'Unknow error!';
		if(error.error instanceof ErrorEvent){
			errorMessage = `Error code: ${error.error.message}`;
		} else {
			errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;

		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}



	  public getProducts(){
		
		return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
	  }

	  
	 

}
