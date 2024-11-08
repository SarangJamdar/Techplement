import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatequote',
  templateUrl: './updatequote.component.html',
  styleUrls: ['./updatequote.component.css']
})
export class UpdatequoteComponent {

id: number = this.activatedroute.snapshot.params["id"]

updatequoteform !: FormGroup;
constructor(private activatedroute:ActivatedRoute, private service:ServicesService, private fb:FormBuilder,private router:Router){}

ngOnInit(){
  this.updatequoteform = this.fb.group({
    name:[null,[Validators.required]],
    quote:[null,[Validators.required]],
    category:[null,[Validators.required]],
  })
  this.getquotebyid();
}

getquotebyid(){
  this.service.GetQuoteById(this.id).subscribe((res)=>{
    console.log(res);
    this.updatequoteform.patchValue(res);
  })
}

updatequote(){
  this.service.updateQuoteById(this.id,this.updatequoteform.value).subscribe((res)=>{
    console.log(res);
    if(res.id != null){
      this.router.navigateByUrl("/showallquotes")
    }
  })
}

}
