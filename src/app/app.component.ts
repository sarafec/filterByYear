import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Books } from './books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public books: Books[] = [];
	public yearVals: any [] = [];
	public sortedYearVals: any [] = [];
	public minYear: number;
	public maxYear: number;
	public selectedYear: number;

	constructor(private bookService: BookService){ }
		
		getData() {
			return this.bookService
				.getData()
				.map((books) => {
					this.books = books;
				})
		}

		updateSelectedYear(evt) {
			this.selectedYear = evt.target.value;
		}

		ngOnInit() {
			this.getData().subscribe(_ => {;
				this.books;

				this.yearVals = this.books.map((book)=> {
					return book.year
				})

				this.sortedYearVals = this.yearVals.sort((a,b) => {
					return a - b;
				})

				this.minYear = Math.min(...this.yearVals);

				this.maxYear = Math.max(...this.yearVals);

				this.selectedYear = this.sortedYearVals[0];

			})

		}
}
