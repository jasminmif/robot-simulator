import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private xPosition = new BehaviorSubject<number | null>(null);
  private yPosition = new BehaviorSubject<number | null>(null);
  private direction = new BehaviorSubject<Direction>(Direction.N);

  public place(x: number, y: number, direction: Direction = Direction.N): void {
    if (x >= gridWith || y >= gridHeight) {
      throw new Error(
        `X should be less than ${gridWith} and Y should be less than ${gridHeight}`
      );
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

    this.setDirection(nextDirection);
  }

  private getErrorMoveMsg(direction) {
    return `Can not move any further ${direction}`;
  }

  public move() {
    this.throwIfGameNotStarted();

    const currentDirection = this.direction.value;
    let yPosition = this.yPosition.value;
    let xPosition = this.xPosition.value;

    if (currentDirection === Direction.N) {
      if (yPosition === gridHeight - 1) {
        throw new Error(this.getErrorMoveMsg('North'));
      }
      this.setYPosition(++yPosition);
    }

    if (currentDirection === Direction.S) {
      if (yPosition === 0) {
        throw new Error(this.getErrorMoveMsg('South'));
      }
      this.setYPosition(--yPosition);
    }

    if (currentDirection === Direction.W) {
      if (xPosition === 0) {
        throw new Error(this.getErrorMoveMsg('West'));
      }

      this.setXPosition(--xPosition);
    }

    if (currentDirection === Direction.E) {
      if (xPosition === gridWith - 1) {
        throw new Error(this.getErrorMoveMsg('East'));
      }
      this.setXPosition(++xPosition);
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

  public getCurrentPosition() {
    this.throwIfGameNotStarted();

    return `X: ${this.xPosition.value} | Y: ${this.yPosition.value} | Direction: ${Direction[this.direction.value]}`;
  }
}
