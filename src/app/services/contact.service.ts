import { Injectable }                  from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError }      from 'rxjs';
import { catchError }                  from 'rxjs/operators';
import { environment }                 from '../environments/environment';
import { ContactRequest, ContactResponse } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly url = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  /** POST the contact form payload to the .NET backend */
  submit(payload: ContactRequest): Observable<ContactResponse> {
    return this.http
      .post<ContactResponse>(this.url, payload)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let msg = 'Something went wrong. Please try again.';
    if      (err.status === 400) msg = 'Please check your form fields and try again.';
    else if (err.status === 0)   msg = 'Could not reach the server. Is the API running?';
    return throwError(() => new Error(msg));
  }
}