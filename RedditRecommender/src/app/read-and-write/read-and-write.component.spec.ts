import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAndWriteComponent } from './read-and-write.component';

describe('ReadAndWriteComponent', () => {
  let component: ReadAndWriteComponent;
  let fixture: ComponentFixture<ReadAndWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAndWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAndWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
