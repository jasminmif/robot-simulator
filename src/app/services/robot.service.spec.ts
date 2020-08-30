import { TestBed } from '@angular/core/testing';
import { RobotService } from './robot.service';

describe('RobotService', () => {
  let service: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Initialization of Robot', () => {
  let robotService: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    robotService = TestBed.inject(RobotService);
  });

  it('If we place the robot anywhere the game should be started', (done) => {
    robotService.place(1, 1);
    robotService.getIsStartedGame().subscribe((isStartedGame) => {
      expect(isStartedGame).toBeTrue();
      done();
    });
  });

  it('The game should be not started if we have not placed the robot', (done) => {
    robotService.getIsStartedGame().subscribe((isStartedGame) => {
      expect(isStartedGame).toBeFalse();
      done();
    });
  });
});
