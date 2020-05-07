import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecruitersService {
  headers = new HttpHeaders()

  baseUrl: string = "http://localhost:3030/api/v1";
  constructor(private http: HttpClient, private route: Router) { }

  signUpUser(user) {
    this.headers.append("Content-type", "application/json")
    return this.http.post<any>(this.baseUrl + '/user/signup', user)
  }

  loginUser(user) {
    this.headers.append("Content-type", "application/json")
    return this.http.post<any>(this.baseUrl + '/user/login', user)
  }

  googleUser(user) {
    this.headers.append("Content-type", "application/json")
    return this.http.post<any>(this.baseUrl + '/user/google', user)
  }

  resetPassword(user) {
    this.headers.append("Content-type", "application/json")
    return this.http.post<any>(this.baseUrl + '/user/resetPassword', user)
  }

  verify(otp) {
    this.headers.append("Content-type", "application/json")
    return this.http.post<any>(this.baseUrl + '/user/otp', otp).pipe(catchError(this.handleError))
  }

  getToken() {
    return localStorage.getItem('access_token')
  }

  get isLoggedIn() {
    let authToken = localStorage.getItem('access_token')
    return (authToken !== null) ? true : false
  }

  handleError(error: HttpErrorResponse) {
    let msg = ''
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message
    } else {
      msg = `Error Code:${error.status}\n message:${error.message}`
    }
    return throwError(msg)
  }
}
