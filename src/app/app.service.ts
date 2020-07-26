import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class AppService {

    AppConstants : any = {
        'getFormUrl': '../assets/form.json'
    }

    constructor(private http: HttpClient) {}

    getFormDetails(successFn, errorFn) {
        this.http.get(this.AppConstants.getFormUrl).subscribe(successFn, errorFn);
    }
}