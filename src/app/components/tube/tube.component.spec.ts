import { TestBed } from '@angular/core/testing';
import { TubeComponent } from './tube.component';

describe('TubeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TubeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TubeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
