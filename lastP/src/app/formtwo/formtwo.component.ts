import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.css']
})
export class FormtwoComponent implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){
      var formpart1 = this.http.getForm()
      this.http.setForm({...formpart1,...form.value})
      this.http.postService().subscribe(
        res => {
          console.log(res)
          this.router.navigateByUrl('/feedback')
        },
        err => {
            console.log(err)
        }
      )
      
  }


}