import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewquoteComponent } from './addnewquote.component';

describe('AddnewquoteComponent', () => {
  let component: AddnewquoteComponent;
  let fixture: ComponentFixture<AddnewquoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewquoteComponent]
    });
    fixture = TestBed.createComponent(AddnewquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
