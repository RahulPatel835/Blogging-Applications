import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { SearchService } from '../service/search.service';


@Component({
  selector: 'app-blog',
  templateUrl:"./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  blogPosts: any[] = [];
  isLoading = true;
  currentPage: number = 1;
  postsPerPage: number = 9;
  paginatedPosts: any[] = [];
  totalPages: number = 0;
 
  constructor(private blogPostService: BlogService ,private searchService:SearchService ) {}

  ngOnInit() {
    this.blogPostService.getBlogPosts().subscribe(
      (response: any) => {
        const blogPostsArray = response.blog_posts || response;
        console.log('Blog Posts:', blogPostsArray);

        if (Array.isArray(blogPostsArray)) {
          console.log('Blog Post Titles:', blogPostsArray.map(post => post.title));
          this.blogPosts = blogPostsArray;
          this.paginate();
        } else {
          console.warn('BlogPosts is not an array:', blogPostsArray);
        }
      },
      (error) => {
        console.error('Error fetching blog posts:', error);
      },
      () => {
        this.isLoading = false;
      }
    );
    this.searchService.search.subscribe((searchTerm: string) => {
      this.searchTerm = searchTerm;
      this.search();
    });
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.paginate();
  }
  public paginate(): void {
    const start = (this.currentPage - 1) * this.postsPerPage;
    const end = start + this.postsPerPage;
    this.paginatedPosts = this.blogPosts.slice(start, end);
    this.totalPages = Math.ceil(this.blogPosts.length / this.postsPerPage);
  }
    showSearch = false;
    searchTerm = '';

   public toggleSearch(): void {
      this.showSearch = !this.showSearch;
      this.searchTerm = ''; 
      this.paginate(); 
     
    }
  
   public search(): void {
      if (this.searchTerm.trim() === '') {
        this.paginate();
      } else {
        this.paginatedPosts = this.blogPosts.filter(post =>
          post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.totalPages = Math.ceil(this.paginatedPosts.length / this.postsPerPage);
      }
    }

 
  }  

