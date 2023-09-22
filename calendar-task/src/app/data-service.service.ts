import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // private apiUrl = 'http://localhost:8080/sendJsonEmail';
  // constructor(private http: HttpClient) { }
  // sendJsonData(jsonData: any) {
  //   return this.http.post(this.apiUrl, { jsonContent: jsonData });
  // }
  // private apiUrl = 'http://localhost:8080/sendJsonEmail';

  // constructor(private http: HttpClient) {}

  // sendJsonData(jsonData: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post(this.apiUrl, jsonData, { headers: headers }).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       if (error.status === 400) {
  //         console.error('Bad Request:', error.error);
  //       } else {
  //         console.error('An error occurred:', error);
  //       }
  //       return throwError('Something went wrong; please try again later.');
  //     })
  //   );
  // }
}
