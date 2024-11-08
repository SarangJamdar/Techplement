import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorquotesComponent } from './authorquotes.component';

describe('AuthorquotesComponent', () => {
  let component: AuthorquotesComponent;
  let fixture: ComponentFixture<AuthorquotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorquotesComponent]
    });
    fixture = TestBed.createComponent(AuthorquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
