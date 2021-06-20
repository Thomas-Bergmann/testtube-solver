import { Component, Input, OnInit } from '@angular/core';
import { Level } from 'src/store/level';

@Component({
  selector: 'level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.sass']
})
export class LevelComponent {
  @Input() level : Level = new Level(-1,[]);
}
