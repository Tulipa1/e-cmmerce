import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BooksService
{
    private url = 'http://localhost:4200/';

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'aaplication/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){

        return this,this.http.get(this.url)
    }

}