import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Direction {
  N = 1,
  E = 2,
  S = 3,
  W = 4,
}

export const gridHeight = 5;
export const gridWith = 5;

@Injectable({
  providedIn: 'root',
})
export class RobotService {
  private xPosition = new BehaviorSubject<number>(0);
  private yPosition = new BehaviorSubject<number>(0);
  private direction = new BehaviorSubject<Direction>(Direction.N);
  private isStartedGame = new BehaviorSubject<boolean>(false);

  public place(x: number, y: number, direction: Direction = Direction.N): void {
    this.setGameAsStarted();

    this.setXPosition(x);
    this.setYPosition(y);
    this.setDirection(direction);
  }

  public setXPosition(xPosition: number) {
    this.xPosition.next(xPosition);
  }

  public getXPosition() {
    return this.xPosition.asObservable();
  }

  public setYPosition(yPosition: number) {
    this.yPosition.next(yPosition);
  }

  public getYPosition() {
    return this.yPosition.asObservable();
  }

  private setDirection(direction: Direction) {
    this.direction.next(direction);
  }

  public getDirection() {
    return this.direction.asObservable();
  }

  public rotateRight() {
    this.throwIfGameNotStarted();

    const nextDirection =
      this.direction.value == 4
        ? Direction.N
        : Direction[Direction[this.direction.value + 1]];

    this.setDirection(nextDirection);
  }

  public rotateLeft() {
    this.throwIfGameNotStarted();

    const nextDirection =
      this.direction.value == 1
        ? Direction.W
        : Direction[Direction[this.direction.value - 1]];

    console.log(nextDirection);
    this.setDirection(nextDirection);
  }

  public move() {
    this.throwIfGameNotStarted();

    const currentDirection = this.direction.value;
    const verticalPos = this.yPosition.value;
    const horizontalPos = this.xPosition.value;

    if (currentDirection === Direction.N) {
      if (verticalPos === 0) {
        throw new Error('Cant move any further North');
      }
      this.setYPosition(verticalPos - 1);
    }

    if (currentDirection === Direction.S) {
      if (verticalPos === gridHeight - 1) {
        throw new Error('Cant move any further North');
      }
      this.setYPosition(verticalPos + 1);
    }

    if (currentDirection === Direction.W) {
      if (horizontalPos === 0) {
        throw new Error('Cant move any further West');
      }

      this.setXPosition(horizontalPos - 1);
    }

    if (currentDirection === Direction.E) {
      if (horizontalPos === gridWith - 1) {
        this.setXPosition(horizontalPos + 1);
      }
    }
  }

  getIsStartedGame() {
    return this.isStartedGame.asObservable();
  }

  setGameAsStarted() {
    this.isStartedGame.next(true);
  }

  throwIfGameNotStarted() {
    if (this.isStartedGame.value == false) {
      throw new Error(
        'Place the robot first than use the rest of the commands.'
      );
    }
  }
}
