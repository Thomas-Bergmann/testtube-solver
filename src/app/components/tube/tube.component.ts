import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TestTube } from 'src/store/tube';

@Component({
  selector: 'tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.sass']
})

export class TubeComponent {
  @Input() tube: TestTube = new TestTube();

  constructor() {
  }
}
