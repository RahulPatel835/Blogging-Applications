import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BlogPostItem } from '../blog/BlogPostItem';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiURL = 'http://localhost:3000/api/blog-posts';

  constructor(private http: HttpClient) { }


    getBlogPosts(): Observable<BlogPostItem[]> {
      return this.http.get<BlogPostItem[]>(this.apiURL);
    }
  
  }

