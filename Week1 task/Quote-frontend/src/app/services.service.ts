import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const base_url = ["http://localhost:8080"]

interface Quote {
  name: string;
  quote: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public authorNameUpdated: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private http:HttpClient) { }

  updateAuthorName(name: string) {
    this.authorNameUpdated.emit(name);
  }

  PostQuote(quote : any):Observable<any>{
    return this.http.post(base_url+"/api/addquote",quote);
  }

  GetAllQuotes():Observable<any>{
    return this.http.get(base_url+"/api/getallquotes")
  }

  GetQuoteById(id : number):Observable<any>{
    return this.http.get(base_url+"/api/getquotebyid/"+id)
  }

  updateQuoteById(id : number,quote:any):Observable<any>{
    return this.http.put(base_url+"/api/updatequote/"+id,quote)
  }

  DeleteQuoteById(id : number):Observable<any>{
    return this.http.delete(base_url+"/api/deletequote/"+id)
  }

  randomquote():Observable<Quote>{
    return this.http.get<Quote>(base_url+"/api/random")
  }

  getQuotesByAuthor(name : string):Observable<Quote[]>{
    return this.http.get<Quote[]>(base_url+"/api/getquotebyname/"+name)
  }
}
