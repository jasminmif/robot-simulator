import { Component, OnInit } from '@angular/core';
import { RobotService, Direction } from './robot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public xPosition: Observable<number>;
  public yPosition: Observable<number>;
  public direction: Observable<Direction>;

  constructor(private robotService: RobotService) {}

  ngOnInit() {
    this.xPosition = this.robotService.getXPosition();
    this.yPosition = this.robotService.getYPosition();
    this.direction = this.robotService.getDirection();
  }

  gridTrackFn = (index: number) => index;

  public placeRobotInput;
  placeRobot() {
    
  }

  rotateLeft() {
    this.robotService.rotateLeft();
  }
}
