import { TestBed, async } from '@angular/core/testing';
import { RobotService, Direction } from './robot.service';

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

describe('Robot initialization and placing', () => {
  let robotService: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    robotService = TestBed.inject(RobotService);
  });

  it('should not let any of the commands be used if we have not placed the robot', () => {
    const error = new Error(
      'Place the robot first than use the rest of the commands.'
    );
    expect(() => robotService.move()).toThrow(error);
    expect(() => robotService.rotateLeft()).toThrow(error);
    expect(() => robotService.rotateRight()).toThrow(error);
    expect(() => robotService.getCurrentPosition()).toThrow(error);
  });

  it('should set direction North if not specified in place command', (done) => {
    robotService.place(1, 1);
    robotService.getDirection().subscribe((direction) => {
      expect(direction).toEqual(Direction.N);
      done();
    });
  });

  it('should place the robot in 0,0 position', (done) => {
    robotService.place(0, 0);
    robotService.getXPosition().subscribe((x) => {
      expect(x).toEqual(0);
      done();
    });

    robotService.getYPosition().subscribe((y) => {
      expect(y).toEqual(0);
      done();
    });
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

describe('Robot movement testing', () => {
  let robotService: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    robotService = TestBed.inject(RobotService);
  });

  it('should increase Y when moving North', (done) => {
    let x = 1;
    let y = 1;
    robotService.place(x, y, Direction.N);
    robotService.move();
    robotService.getYPosition().subscribe((newY) => {
      expect(newY).toEqual(++y);
      done();
    });
  });

  it('should decrease Y when moving South', (done) => {
    let x = 1;
    let y = 1;
    robotService.place(x, y, Direction.S);
    robotService.move();
    robotService.getYPosition().subscribe((newY) => {
      expect(newY).toEqual(--y);
      done();
    });
  });

  it('should increase X when moving East', (done) => {
    let x = 1;
    let y = 1;
    robotService.place(x, y, Direction.E);
    robotService.move();
    robotService.getXPosition().subscribe((newX) => {
      expect(newX).toEqual(++x);
      done();
    });
  });

  it('should decrease X when moving West', (done) => {
    let x = 1;
    let y = 1;
    robotService.place(x, y, Direction.W);
    robotService.move();
    robotService.getXPosition().subscribe((newX) => {
      expect(newX).toEqual(--x);
      done();
    });
  });

  it('should not allow robot to move to destruction', () => {
    const x = 0;
    const y = 0;
    robotService.place(x, y, Direction.W);
    const error = new Error('Can not move any further West');
    expect(() => robotService.move()).toThrow(error);
  });
});

describe('Robot rotation', () => {
  let robotService: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    robotService = TestBed.inject(RobotService);
  });

  it('should rotate robot right from North to East', (done) => {
    const x = 0;
    const y = 0;
    robotService.place(x, y, Direction.N);
    robotService.rotateRight()
    robotService.getDirection().subscribe((direction) => {
      expect(direction).toEqual(Direction.E);
      done();
    });
  });

  it('should rotate robot right from South to West', (done) => {
    const x = 0;
    const y = 0;
    robotService.place(x, y, Direction.S);
    robotService.rotateRight()
    robotService.getDirection().subscribe((direction) => {
      expect(direction).toEqual(Direction.W);
      done();
    });
  });

  it('should rotate robot left from North to West', (done) => {
    const x = 0;
    const y = 0;
    robotService.place(x, y, Direction.N);
    robotService.rotateLeft()
    robotService.getDirection().subscribe((direction) => {
      expect(direction).toEqual(Direction.W);
      done();
    });
  });

  it('should rotate robot left from South to East', (done) => {
    const x = 0;
    const y = 0;
    robotService.place(x, y, Direction.S);
    robotService.rotateLeft()
    robotService.getDirection().subscribe((direction) => {
      expect(direction).toEqual(Direction.E);
      done();
    });
  });
});

describe('Robot report', () => {
  let robotService: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    robotService = TestBed.inject(RobotService);
  });

  const buildPositionReportMsg = (x: number, y: number, direction: Direction) => {
    return `X: ${x} | Y: ${y} | Direction: ${Direction[direction]}`;
  }

  it('should report current position of robot', () => {
    const x = 3;
    const y = 3;
    const direction = Direction.S;
    robotService.place(x, y, direction);

    expect(robotService.getCurrentPosition()).toEqual(buildPositionReportMsg(x, y, direction))
  });

  it('should report current position after the robot has moved and rotated', async(async (done) => {
    const x = 3;
    const y = 3;
    const direction = Direction.S;

    robotService.place(x, y, direction);
    robotService.move();
    robotService.rotateLeft();

    const newX = await robotService.getXPosition().toPromise();
    const newY = await robotService.getYPosition().toPromise();
    const newDir = await robotService.getDirection().toPromise();

    expect(robotService.getCurrentPosition()).toEqual(buildPositionReportMsg(newX, newY, newDir));
    done();
  }));
});
