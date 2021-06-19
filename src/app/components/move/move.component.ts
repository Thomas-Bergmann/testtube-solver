import { Component, Input, OnInit } from '@angular/core';
import { Color, ColorCounter, FontColor, RGBColor} from 'src/store/color';
import { Move } from 'src/store/move';

@Component({
  selector: 'move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.sass']
})
export class MoveComponent implements OnInit {
  @Input() move : Move = new Move([],0,0);
  backColor: string = "";
  fontColor: string = "";
  source: number = 0;
  target: number = 0;
  ngOnInit(): void {
    this.source = this.move.getSource();
    this.target = this.move.getTarget();
    var backColor = RGBColor.get(this.move.getColor());
    if (backColor == undefined) {
      this.backColor = RGBColor.get(Color.FREE) || "gray";
    } else {
      this.backColor = backColor;
    }
    var fontColor = FontColor.get(this.move.getColor());
    if (fontColor == undefined) {
      this.fontColor = FontColor.get(Color.FREE) || "black";
    } else {
      this.fontColor = fontColor;
    }
  }

}
