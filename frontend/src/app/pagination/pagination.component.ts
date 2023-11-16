
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div *ngIf="totalPages > 1">
      <button *ngFor="let page of pages" (click)="changePage(page)" [class.active]="currentPage === page">
        {{ page }}
      </button>
    </div>
  `,
  styles: [`
    button {
      margin: 5px;

    }
    .active {
      font-weight: bold;
    }
    button:hover{
      background-color: rgb(0, 13, 255);
      color: rgb(198, 201, 204);
    }
  `]
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(page: number): void {
    this.pageChanged.emit(page);
  }
}
