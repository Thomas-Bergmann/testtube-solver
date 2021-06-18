import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestTube } from 'src/store/tube';

import { ColorState, Color, ColorCounter, addColor, incrementColor, selectColors } from '../../../store/color';

@Component({
  selector: 'tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.sass']
})

export class TubeComponent implements OnInit {
  @Input() tube: TestTube = new TestTube();

  constructor() {
  }

  ngOnInit(): void {
  }
}
