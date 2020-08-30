import { Component, OnChanges, Input } from '@angular/core';
import { Direction } from 'src/app/services/robot.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnChanges {
  @Input() isRobot: boolean = false;
  @Input() direction: Direction;
  @Input() id: string = '';

  public rotationDirectionClass = '';

  ngOnChanges(): void {
    if (this.direction === Direction.N) {
      this.rotationDirectionClass = 'rotate-0';
    }

    if (this.direction === Direction.E) {
      this.rotationDirectionClass = 'rotate-90'
   }

    if (this.direction === Direction.S) {
      this.rotationDirectionClass = 'rotate-180'
    }

    if (this.direction == Direction.W) {
      this.rotationDirectionClass = '-rotate-90'
    }
  }
}
