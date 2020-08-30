import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction, RobotService, gridHeight, gridWith } from 'src/app/services/robot.service';

// Create and fill the array with values starting from 0 till the selected Height & Width.
const gridRows = Array.from({ length: gridHeight }, (_v, k) => (gridHeight - 1 ) - k);
const gridCols = Array.from({ length: gridWith }, (_v, k) => k);

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public xPosition$: Observable<number>;
  public yPosition$: Observable<number>;
  public direction$: Observable<Direction>;

  public gridRows = gridRows;
  public gridCols = gridCols;

  constructor(private robotService: RobotService) { }

  ngOnInit(): void {
    this.xPosition$ = this.robotService.getXPosition();
    this.yPosition$ = this.robotService.getYPosition();
    this.direction$ = this.robotService.getDirection();
  }

  public gridTrackFn = (index: number) => index;
}
