import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
  idtoken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient){}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8DzkFon74jLkXYBPE2F6Lq_ua-A0ia9o',
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8DzkFon74jLkXYBPE2F6Lq_ua-A0ia9o',
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred.';

      if (!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }

      switch (errorRes.error.error.message) {
        case "EMAIL_EXISTS":
          errorMessage = 'This email exists already';
          break;
        case "EMAIL_NOT_FOUND":
          errorMessage = 'This email does not exist';
          break;
        case "EMAIL_EXISTS":
          errorMessage = 'This password is not correct';
          break;
      }

      return throwError(errorMessage);
  }
}
