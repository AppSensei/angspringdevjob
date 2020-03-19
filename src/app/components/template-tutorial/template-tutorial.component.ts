import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-tutorial',
  templateUrl: './template-tutorial.component.html',
  styleUrls: ['./template-tutorial.component.css']
})
export class TemplateTutorialComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      console.log(form.value);
      console.log(form.value.username);
  }

}
