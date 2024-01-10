import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.sass'
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() itemsPerPage: number = 20;
  @Input() totalPages!: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  changePage(page:number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }
}
