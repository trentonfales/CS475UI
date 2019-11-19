import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'art',
    component: ArtComponent
  },
  {
    path: 'culture',
    component: CultureComponent
  },
  {
    path: 'discussion',
    component: DiscussionComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'gaming',
    component: GamingComponent
  },
  {
    path: 'humor',
    component: HumorComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'meta',
    component: MetaComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'news-and-politics',
    component: NewsAndPoliticsComponent
  },
  {
    path: 'pictures',
    component: PicturesComponent
  },
  {
    path: 'qa',
    component: QAComponent
  },
  {
    path: 'read-and-write',
    component: ReadAndWriteComponent
  },
  {
    path: 'science',
    component: ScienceComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'tv',
    component: TVComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
