import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProvinceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('https://provinces.open-api.vn/api/?depth=3');
  }
}
