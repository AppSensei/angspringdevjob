import {Component, OnInit} from '@angular/core';
import {TutorialService} from '../../services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  save() {

  }

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('Observable Completed');
        });

    this.submitted = true;
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
