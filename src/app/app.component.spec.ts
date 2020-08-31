import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { GridComponent } from './components/grid/grid.component';
import { CellComponent } from './components/cell/cell.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { ContainerComponent } from './components/container/container.component';
import { CommandsWrapperComponent } from './components/commands-wrapper/commands-wrapper.component';
import { PlaceRobotWrapperComponent } from './components/place-robot-wrapper/place-robot-wrapper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [AppComponent, ButtonComponent, DividerComponent, GridComponent, CellComponent, NotificationComponent, ContainerComponent, CommandsWrapperComponent, PlaceRobotWrapperComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
});
