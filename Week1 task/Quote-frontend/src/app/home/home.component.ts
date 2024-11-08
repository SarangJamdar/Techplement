import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

interface Quote {
  name: string;
  quote: string;
  category: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  quote: Quote | null = null;
  searchName: string = '';

  constructor(private service:ServicesService){}
  
  ngOnInit(){
    this.getRandomquotes();
  }
  
  getRandomquotes(){
    this.service.randomquote().subscribe((res:Quote)=>{
      this.quote=res;
      console.log(res);
    })
  }

}
