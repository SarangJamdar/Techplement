import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallquotesComponent } from './showallquotes.component';

describe('ShowallquotesComponent', () => {
  let component: ShowallquotesComponent;
  let fixture: ComponentFixture<ShowallquotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowallquotesComponent]
    });
    fixture = TestBed.createComponent(ShowallquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
