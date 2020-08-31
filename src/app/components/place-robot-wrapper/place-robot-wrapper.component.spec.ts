import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PlaceRobotWrapperComponent } from './place-robot-wrapper.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('PlaceRobotWrapperComponent', () => {
  let component: PlaceRobotWrapperComponent;
  let fixture: ComponentFixture<PlaceRobotWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRobotWrapperComponent, ButtonComponent],
      imports: [ FormsModule ],
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
