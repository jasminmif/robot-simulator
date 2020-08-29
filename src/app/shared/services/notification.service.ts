import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private isVisible = new BehaviorSubject<boolean>(false);
  private message = new BehaviorSubject<string | null>('');
  private notificationDuration: number = 5000; // 5 Secs

  public show(message: string) {
    this.setMessage(message);
    this.toggleVisibleNotification()

    // this.autoHideNotificationAfterSecs();
  }

  public hide() {
    this.toggleVisibleNotification();
    this.setMessage('');
  }

  public getIsVisible() {
    return this.isVisible.asObservable();
  }

  public getMessage() {
    return this.message.asObservable();
  }

  private setMessage(message: string) {
    this.message.next(message);
  }

  private toggleVisibleNotification() {
    this.isVisible.next(!this.isVisible.value);
  }

  private autoHideNotificationAfterSecs() {
    setTimeout(() => {
      this.hide();
    }, this.notificationDuration)
  }
}
