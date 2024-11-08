import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-showallquotes',
  templateUrl: './showallquotes.component.html',
  styleUrls: ['./showallquotes.component.css']
})
export class ShowallquotesComponent {

quote:any[]=[];

constructor(private service:ServicesService){}

ngOnInit(){
  this.getallquotes();
}

getallquotes(){
  this.service.GetAllQuotes().subscribe((res:any)=>{
    this.quote=res;
    console.log(res);
  })
}

deletequote(id : number){
  this.service.DeleteQuoteById(id).subscribe((res:any)=>{
    console.log(res);
    this.getallquotes();
  })
}

}
