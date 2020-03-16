import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCountComponent } from './words-count.component';

describe('WordsCountComponent', () => {
  let component: WordsCountComponent;
  let fixture: ComponentFixture<WordsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
