import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { CultureComponent } from './culture/culture.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { GamingComponent } from './gaming/gaming.component';
import { HumorComponent } from './humor/humor.component';
import { InfoComponent } from './info/info.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { LocationComponent } from './location/location.component';
import { MetaComponent } from './meta/meta.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { NewsAndPoliticsComponent } from './news-and-politics/news-and-politics.component';
import { PicturesComponent } from './pictures/pictures.component';
import { QAComponent } from './qa/qa.component';
import { ReadAndWriteComponent } from './read-and-write/read-and-write.component';
import { ScienceComponent } from './science/science.component';
import { FoodComponent } from './food/food.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { TVComponent } from './tv/tv.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    CultureComponent,
    DiscussionComponent,
    GamingComponent,
    HumorComponent,
    InfoComponent,
    LifestyleComponent,
    LocationComponent,
    MetaComponent,
    MoviesComponent,
    MusicComponent,
    NewsAndPoliticsComponent,
    PicturesComponent,
    QAComponent,
    ReadAndWriteComponent,
    ScienceComponent,
    FoodComponent,
    SportsComponent,
    TechnologyComponent,
    TVComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
