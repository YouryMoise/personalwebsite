import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SevtPageComponent } from './sevt-page/sevt-page.component';
import { HomeComponent } from './home/home.component';
import { WordSearchComponent } from './word-search/word-search.component';
import { ExtrasComponent } from './extras/extras.component';
import { ClassProjectsComponent } from './class-projects/class-projects.component';
import { InternshipsComponent } from './internships/internships.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { EcProjectComponent } from './ec-project/ec-project.component';

@NgModule({
  declarations: [
    AppComponent,
    SevtPageComponent,
    HomeComponent,
    WordSearchComponent,
    ExtrasComponent,
    ClassProjectsComponent,
    InternshipsComponent,
    PersonalProjectsComponent,
    InfoCardComponent,
    EcProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
