import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoardsData } from '../../store/kanban/kanban.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanFetchService {
  private dataUrl: string = '../../../assets/data.json';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<IBoardsData> {
    return this.http.get<IBoardsData>(this.dataUrl);
  }
}
