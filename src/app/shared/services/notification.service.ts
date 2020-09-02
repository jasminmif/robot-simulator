import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private isVisible = new BehaviorSubject<boolean>(false);
  private message = new BehaviorSubject<string | null>('');
  private notDurationInMilliseconds: number = 5000; // 5 Secs

  private timer: ReturnType<typeof setTimeout>;

  public show(message: string) {
    this.setMessage(message);
    this.toggleVisibleNotification();

    this.autoHideNotificationAfterSecs();
  }

  public hide() {
    this.isVisible.next(false);
    this.setMessage('');
    this._clearTimeout();
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

  private _clearTimeout() {
    clearTimeout(this.timer);
  }

  private autoHideNotificationAfterSecs() {
    this._clearTimeout();

    this.timer = setTimeout(() => {
      this.hide();
    }, this.notDurationInMilliseconds);

  }
}
