import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsWrapperComponent } from './commands-wrapper.component';

describe('CommandsWrapperComponent', () => {
  let component: CommandsWrapperComponent;
  let fixture: ComponentFixture<CommandsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsWrapperComponent ]
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
