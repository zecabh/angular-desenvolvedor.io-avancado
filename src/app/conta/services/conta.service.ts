import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { User } from "../models/user";



@Injectable()
export class ContaService extends BaseService {
   
   
    constructor( private http: HttpClient) { super(); }

    registerUser(user: User): Observable<User> { 
        let response = this.http
            .post(this.UrlServiceV1 + 'nova-conta', user, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
        
        return response;
    }


    login(user: User): Observable<User> { 
        let response = this.http
        .post(this.UrlServiceV1 + 'entrar', user, this.ObterHeaderJson())
        .pipe(
            map(this.extractData),
            catchError(this.serviceError));

    return response;
    }

}