import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
@Component({
  selector: 'app-freeblog',
  templateUrl: './freeblog.component.html',
  styleUrls: ['./freeblog.component.css']
})
export class FreeblogComponent implements OnInit{
  
  
  searchTerm=''
    constructor() { }
  
    ngOnInit() {
    
    }

}
