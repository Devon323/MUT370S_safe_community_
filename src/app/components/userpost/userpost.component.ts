import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})

export class UserpostComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description: string;
  name: string;
  titleAlert: string = 'This field is required!';
  confirmMessage: string = 'Your Post Has Been Added!';
  theDate = 'new Date(1992, 3, 2)';

  constructor(private fb: FormBuilder, private user: UserService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(5000)])],
      'validate' : '',
    });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
    this.theDate = post.theDate;
  }



  ngOnInit() {
    console.log('OnInit ran...');
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

 
}

