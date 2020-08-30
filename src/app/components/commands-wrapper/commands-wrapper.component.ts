import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RobotService, Direction } from 'src/app/services/robot.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-commands-wrapper',
  templateUrl: './commands-wrapper.component.html',
  styleUrls: ['./commands-wrapper.component.scss'],
})
export class CommandsWrapperComponent implements OnInit {
  public isGameStarted$: Observable<boolean>;

  constructor(
    private robotService: RobotService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.isGameStarted$ = this.robotService.getIsStartedGame();
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
