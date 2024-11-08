import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-addnewquote',
  templateUrl: './addnewquote.component.html',
  styleUrls: ['./addnewquote.component.css']
})
export class AddnewquoteComponent {

  postquotefrom !: FormGroup;

constructor(private service:ServicesService , private fb:FormBuilder){}

ngOnInit(){
  this.postquotefrom = this.fb.group({
    name:[null,[Validators.required]],
    quote:[null,[Validators.required]],
    category:[null,[Validators.required]],
  })
}

onsubmit(){
  console.log(this.postquotefrom.value);
  this.service.PostQuote(this.postquotefrom.value).subscribe((res)=>{
    console.log(res);
  })
}

}
