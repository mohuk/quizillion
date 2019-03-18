import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttempterComponent } from './attempter.component';

describe('AttempterComponent', () => {
  let component: AttempterComponent;
  let fixture: ComponentFixture<AttempterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttempterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttempterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
