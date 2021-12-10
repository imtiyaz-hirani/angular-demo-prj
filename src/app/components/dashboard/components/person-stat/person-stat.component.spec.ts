import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonStatComponent } from './person-stat.component';

describe('PersonStatComponent', () => {
  let component: PersonStatComponent;
  let fixture: ComponentFixture<PersonStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
