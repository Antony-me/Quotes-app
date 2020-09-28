import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, '“There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.” — Epictetus' ,  'Worry Not', 'Antony', 0 , 0, new Date(2020,8,27) ),
    new Quote (2,'“Happiness is not something ready-made. It comes from your own actions.”— Dalai Lama','Happiness' , 'James ',0, 0, new Date(2020,8,27)),
    new Quote (3,'“For many men, the acquisition of wealth does not end their troubles, it only changes them.”— Seneca', 'Men and Wealth' , 'Thomas', 0, 0, new Date(2020,8,27)),
    new Quote (4, '“Happiness is when what you think, what you say, and what you do are in harmony.” — Mahatma Gandhi', 'Harmony', 'Kai', 0, 0, new Date(2020,8,27)),
    new Quote (5,'“Most people would rather be certain they’re miserable, than risk being happy.” — Dr. Robert Anthony' ,'Take a Risk', 'Phyl', 0, 0, new Date(2020,8,27)),
    new Quote (6, '"Since you get more joy out of giving joy to others, you should put a good deal of thought into the happiness that you are able to give.”— Eleanor Roosevelt' ,'Give', 'Jay', 0, 0, new Date(2020,8,27)),
  ];


  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.unshift(quote)

  }


  constructor() { }

  ngOnInit(): void {
  }

}
