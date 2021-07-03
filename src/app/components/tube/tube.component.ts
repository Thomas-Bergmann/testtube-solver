import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveTube, TestTube, TubeState } from 'src/store/tube';

@Component({
  selector: 'tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.sass']
})

export class TubeComponent {
  @Input() tube: TestTube = new TestTube();
  isActive = false;

  constructor(private readonly tubeStore: Store<TubeState>) {
    this.tubeStore.select(selectActiveTube).subscribe( t => this.isActive = this.tube == t);
  }
}
