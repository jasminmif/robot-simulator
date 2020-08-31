import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsWrapperComponent } from './commands-wrapper.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('CommandsWrapperComponent', () => {
  let component: CommandsWrapperComponent;
  let fixture: ComponentFixture<CommandsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsWrapperComponent, ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
