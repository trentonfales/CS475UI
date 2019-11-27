import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  inputSection = this.fb.group({
    subreddit: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.inputSection.value);
  }

}
