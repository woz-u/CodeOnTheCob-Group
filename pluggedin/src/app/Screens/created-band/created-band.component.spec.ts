import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedBandComponent } from './created-band.component';

describe('CreatedBandComponent', () => {
  let component: CreatedBandComponent;
  let fixture: ComponentFixture<CreatedBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
