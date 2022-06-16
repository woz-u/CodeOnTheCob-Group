import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianRosterComponent } from './musician-roster.component';

describe('MusicianRosterComponent', () => {
  let component: MusicianRosterComponent;
  let fixture: ComponentFixture<MusicianRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicianRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
