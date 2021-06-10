import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Posts } from '../model/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  public createPosts(post: Posts): Observable<any> {
    return this.http.post(this.baseURL, post);
  }
}
