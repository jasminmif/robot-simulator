import { Component, OnInit } from '@angular/core';
import { RobotService, Direction } from './robot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isGameStarted: Observable<boolean>;
  public xPosition: Observable<number>;
  public yPosition: Observable<number>;
  public direction: Observable<Direction>;
  public grid = Array.from({ length: 5 }, (v, k) => k);

  constructor(private robotService: RobotService) {}

  ngOnInit() {
    this.xPosition = this.robotService.getXPosition();
    this.yPosition = this.robotService.getYPosition();
    this.direction = this.robotService.getDirection();
  }

  gridTrackFn = (index: number) => index;

  public placeRobotInput: string;
  public placeRobot() {
    const [x, y, direction] = this.placeRobotInput.trim().split(',');
    this.robotService.place(Number(x), Number(y), Direction[direction]);
  }

  public rotateLeft() {
    try {
      this.robotService.rotateLeft();
    } catch (e) {
      console.log(e.message);
    }
  }
}
