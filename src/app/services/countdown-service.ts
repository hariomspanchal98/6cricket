import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, switchMap, takeWhile } from 'rxjs';

interface DeadlineResponse {
  secondsLeft: number;
}

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  baseURL = 'www.sample.com';
  deadlineURL = '/api/deadline';

  constructor(private http: HttpClient) {}

  // for Dynamic countdowns, we have to use below api call with WebSocket or SSE
  getDeadlineCountdown(): Observable<number> {
    return this.http.get<DeadlineResponse>(`${this.baseURL}${this.deadlineURL}`).pipe(
      switchMap((res) => {
        const initialSeconds = res.secondsLeft;
        return interval(1000).pipe(
          map((i) => Math.max(initialSeconds - i, 0)),
          takeWhile((seconds) => seconds >= 0, true)
        );
      })
    );
  }

  //for now we return seconds left until target date MANUALLY
  getCountdown(targetDate: Date): Observable<number> {
    const targetTime = targetDate.getTime();

    return interval(1000).pipe(
      map(() => {
        const now = Date.now();
        const diff = Math.max(0, Math.floor((targetTime - now) / 1000));
        return diff;
      }),
      takeWhile(secondsLeft => secondsLeft > 0, true)
    );
  }
}
