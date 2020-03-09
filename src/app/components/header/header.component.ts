import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form = new FormGroup({
    Name:new FormControl('', Validators.required),
    Email:new FormControl('', [Validators.required, Validators.email]),
    phonenumber:new FormControl('', Validators.required)
  })

  constructor() { }
  title: "wajeeh";

  ngOnInit(): void {
    let user = {
      name:String,
      email:String,
      phonenumber: Number
    }   
  }

}
