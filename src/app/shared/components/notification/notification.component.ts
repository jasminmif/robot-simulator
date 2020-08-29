import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public isVisibleNotification: Observable<boolean>;
  public message: Observable<string>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.isVisibleNotification = this.notificationService.getIsVisible();
    this.message = this.notificationService.getMessage();
  }

  dismissOnClick() {
    this.notificationService.hide();
  }
}
