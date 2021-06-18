import { Component, Input, OnInit } from '@angular/core';
import { Color, RGBColor} from 'src/store/color';

@Component({
  selector: 'color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.sass']
})
export class ColorComponent implements OnInit {
  @Input() color : Color = Color.FREE;
  backColor: string = "";

  ngOnInit(): void {
    var backColor = RGBColor.get(this.color);
    if (backColor == undefined) {
      this.backColor = RGBColor.get(Color.FREE) || "gray";
    } else {
      this.backColor = backColor;
    }
  }
}
