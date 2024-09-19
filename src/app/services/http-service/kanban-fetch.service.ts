import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../../store/kanban/kanban.model';

@Injectable({
  providedIn: 'root'
})

export class KanbanFetchService {
  private dataUrl: string = '../../../assets/data.json'
  constructor(private http: HttpClient) { }

  fetchData(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>(this.dataUrl)
  }
}
