import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllMessagesService {

  constructor(private http: HttpClient) {}

  public getWordCount(): Observable<any[]> {
    return this.http.post<any[]>(environment.serverUrl, {
      query: `{
        wordCount {
          author
          keywords {
            keyword
            count
          }
        }
      }`
    })
      .pipe(map((gqlresponse: any) => gqlresponse.data.wordCount));
  }
}
