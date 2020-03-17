import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WordsCount, GraphqlWordCountResponse, GraphqlAverageMessagesCountPerDayResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  constructor(private http: HttpClient) { }

  public getWordCount(): Observable<WordsCount[]> {
    return this.http.post<GraphqlWordCountResponse>(environment.serverUrl, {
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
      .pipe(map((gqlresponse: GraphqlWordCountResponse) => gqlresponse.data.wordCount));
  }

  public getAverageMessagesPerDay() {
    return this.http.post<GraphqlAverageMessagesCountPerDayResponse>(environment.serverUrl, {
      query: `{
        WeekdaysAverage {
          day
          average
        }
      }`
    })
      .pipe(map((gqlresponse: GraphqlAverageMessagesCountPerDayResponse) => gqlresponse.data.WeekdaysAverage));
  }
}
