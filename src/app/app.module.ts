import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddTutorialComponent} from './components/add-tutorial/add-tutorial.component';
import {TutorialDetailsComponent} from './components/tutorial-details/tutorial-details.component';
import {TutorialsListComponent} from './components/tutorials-list/tutorials-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TemplateTutorialComponent} from './components/template-tutorial/template-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    TemplateTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
