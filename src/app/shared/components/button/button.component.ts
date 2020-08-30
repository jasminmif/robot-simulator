import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() id: string = '';
  @Input() color: string = 'blue';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter();

  public baseClasses = ``;
  public activeClasses = ``;
  public disabledClasses = ``;

  ngOnInit() {
    this.baseClasses = `border-${this.color}-300`;
    this.activeClasses = `bg-${this.color}-200 hover:border-${this.color}-400 text-${this.color}-700 hover:text-${this.color}-500  focus:shadow-outline`;
    this.disabledClasses = `bg-${this.color}-100 text-${this.color}-300 cursor-not-allowed`;
  }

  public onBtnClick() {
    this.onClick.emit();
  }
}
