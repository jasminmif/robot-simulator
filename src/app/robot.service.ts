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
  private isStartedGame = new BehaviorSubject<boolean>(false);
  private xPosition = new BehaviorSubject<number>(0);
  private yPosition = new BehaviorSubject<number>(0);
  private direction = new BehaviorSubject<Direction>(Direction.N);

  public place(x: number, y: number, direction: Direction = Direction.N): void {
    if (x >= gridWith || y >= gridHeight) {
      throw new Error(`X should be less than ${gridWith} and Y should be less than ${gridHeight}`)
    }

    if (x < 0 || y < 0) {
      throw new Error('X or Y should be greater than 0');
    }

    this.setGameAsStarted();

    this.setXPosition(x);
    this.setYPosition(y);
    this.setDirection(direction);
  }

  private setXPosition(xPosition: number) {
    this.xPosition.next(xPosition);
  }

  public getXPosition() {
    return this.xPosition.asObservable();
  }

  private setYPosition(yPosition: number) {
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

  private getErrorMoveMsg(direction) {
    return `Cant move any further ${direction}`;
  }

  public move() {
    this.throwIfGameNotStarted();

    const currentDirection = this.direction.value;
    const yPosition = this.yPosition.value;
    const xPosition = this.xPosition.value;

    if (currentDirection === Direction.N) {
      if (yPosition === gridHeight - 1) {
        throw new Error(this.getErrorMoveMsg('North'));
      }
      this.setYPosition(yPosition + 1);
    }

    if (currentDirection === Direction.S) {
      if (yPosition === 0) {
        throw new Error(this.getErrorMoveMsg('South'));
      }
      this.setYPosition(yPosition - 1);
    }

    if (currentDirection === Direction.W) {
      if (xPosition === 0) {
        throw new Error(this.getErrorMoveMsg('West'));
      }

      this.setXPosition(xPosition - 1);
    }

    if (currentDirection === Direction.E) {
      if (xPosition === gridWith - 1) {
        throw new Error(this.getErrorMoveMsg('East'));
      }
      this.setXPosition(xPosition + 1);
    }
  }

  public getIsStartedGame() {
    return this.isStartedGame.asObservable();
  }

  private setGameAsStarted() {
    this.isStartedGame.next(true);
  }

  private throwIfGameNotStarted() {
    if (!this.isStartedGame.value) {
      throw new Error(
        'Place the robot first than use the rest of the commands.'
      );
    }
  }
}
