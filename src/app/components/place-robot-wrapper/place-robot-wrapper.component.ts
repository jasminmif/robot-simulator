import { Component } from '@angular/core';
import { RobotService, Direction } from 'src/app/services/robot.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-place-robot-wrapper',
  templateUrl: './place-robot-wrapper.component.html',
  styleUrls: ['./place-robot-wrapper.component.scss'],
})
export class PlaceRobotWrapperComponent {
  constructor(
    private robotService: RobotService,
    private notificationService: NotificationService
  ) {}

  public placeRobotInput: string;
  public placeRobot() {
    try {
      const [x, y, direction] = this.placeRobotInput.trim().split(',');
      this.robotService.place(Number(x), Number(y), Direction[direction]);
    } catch ({ message }) {
      this.notificationService.show(message);
    }
  }
}
