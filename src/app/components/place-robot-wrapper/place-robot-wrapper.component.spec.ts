import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRobotWrapperComponent } from './place-robot-wrapper.component';

describe('PlaceRobotWrapperComponent', () => {
  let component: PlaceRobotWrapperComponent;
  let fixture: ComponentFixture<PlaceRobotWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRobotWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRobotWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
