import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndPoliticsComponent } from './news-and-politics.component';

describe('NewsAndPoliticsComponent', () => {
  let component: NewsAndPoliticsComponent;
  let fixture: ComponentFixture<NewsAndPoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndPoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
