import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "./userservice.service";
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { post } from 'selenium-webdriver/http';


export interface User {

  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})



export class UsersComponent implements OnInit {
  submitted = false;
  data: User;
  table = false;
  registerForm: FormGroup;
  constructor(private users: UserserviceService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });
  }


  displayedColumns = ['name', 'username', 'email', 'phone', 'website'];
  dataSource = this.users.getreports();

  // createuser(){
  //   this.users.putreports().subscribe(
  //     (data:User) =>{
  //       console.log(data)
  //     }
  //   )
  // }

  add() {
    this.table = true;
  }

  addreports(data) {
    this.users.postreports(data).subscribe(
      posts => {
        console.log(posts);
      }
    )
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.data = this.registerForm.value;
    console.log(this.data);
    // this.addreports();

  }
}


