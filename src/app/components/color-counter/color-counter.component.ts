import { Component, Input, OnInit } from '@angular/core';
import { Color, ColorCounter, FontColor, RGBColor} from 'src/store/color';

@Component({
  selector: 'color-counter',
  templateUrl: './color-counter.component.html',
  styleUrls: ['./color-counter.component.sass']
})
export class ColorCounterComponent implements OnInit {
  @Input() colorCounter : ColorCounter = { color : Color.FREE, counter : -1 };
  backColor: string = "";
  fontColor: string = "";

  ngOnInit(): void {
    var backColor = RGBColor.get(this.colorCounter.color);
    if (backColor == undefined) {
      this.backColor = RGBColor.get(Color.FREE) || "gray";
    } else {
      this.backColor = backColor;
    }
    var fontColor = FontColor.get(this.colorCounter.color);
    if (fontColor == undefined) {
      this.fontColor = FontColor.get(Color.FREE) || "black";
    } else {
      this.fontColor = fontColor;
    }
  }

}
