import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    
  }
  getData(data){
    return this.http.post('http://127.0.0.1:5000/controlchart', data, {headers: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  }
}
