import {Component, OnInit} from '@angular/core';
import {TutorialService} from '../../services/tutorial.service';
import {Book} from '../../Model/Book';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
/*
  title = '';
*/
  book: Book = new Book();

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.retrieveTutorial();
  }

  retrieveTutorial() {
    this.tutorialService.getAll().subscribe(
        (data: any) => {
          return this.tutorials = data;
          console.log(data);
        },
        (error: any) => {
         console.log(error);
      });
  }

  refreshList() {
    this.retrieveTutorial();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorial();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.tutorialService.findByTitle(this.book.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
