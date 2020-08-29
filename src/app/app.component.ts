import { Component, OnInit } from '@angular/core';
import { RobotService, Direction } from './services/robot.service';
import { Observable } from 'rxjs';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isGameStarted: Observable<boolean>;

  constructor(
    private robotService: RobotService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.isGameStarted = this.robotService.getIsStartedGame();
  }

  public placeRobotInput: string;
  public placeRobot() {
    const [x, y, direction] = this.placeRobotInput.trim().split(',');

    try {
      this.robotService.place(Number(x), Number(y), Direction[direction]);
    } catch ({ message }) {
      this.notificationService.show(message);
    }
  }

  public rotateLeft() {
    try {
      this.robotService.rotateLeft();
    } catch ({ message }) {
      this.notificationService.show(message);
    }
  }

  public rotateRight() {
    try {
      this.robotService.rotateRight();
    } catch ({ message }) {
      this.notificationService.show(message);
    }
  }

  public move() {
    try {
      this.robotService.move();
    } catch ({ message }) {
      this.notificationService.show(message);
    }
  }

  public reportCurrentPosition() {
    try {
      const currentPositionMsg = this.robotService.getCurrentPosition();
      this.notificationService.show(currentPositionMsg);
    } catch ({ message }) {
      this.notificationService.show(message);
    }
  }
}
