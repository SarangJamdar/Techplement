import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-authorquotes',
  templateUrl: './authorquotes.component.html',
  styleUrls: ['./authorquotes.component.css']
})
export class AuthorquotesComponent {
  authorName: string = '';
  quotes: any[] = [];
  errorMessage: string = '';

  constructor(private service: ServicesService) {}

  getQuotes() {
    if (this.authorName.trim()) {
      this.service.getQuotesByAuthor(this.authorName).subscribe(
        (data) => {
          this.quotes = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'No quotes found for this author.';
          this.quotes = [];
        }
      );
    } else {
      this.errorMessage = 'Please enter an author name.';
      this.quotes = [];
    }
  }
}
