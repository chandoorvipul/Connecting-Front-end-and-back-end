import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-formthree',
  templateUrl: './formthree.component.html',
  styleUrls: ['./formthree.component.css']
})
export class FormthreeComponent implements OnInit {

  formData: {};

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    console.log(this.formData)
  }

}