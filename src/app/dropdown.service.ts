import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}
  readonly API_ALL_CLIENT =
    'https://onlinetestapi.gerasim.in/api/GetValet/GetAllClients';

  loadClients(): Observable<any> {
    return this.http.get<any>(this.API_ALL_CLIENT);
  }
}
