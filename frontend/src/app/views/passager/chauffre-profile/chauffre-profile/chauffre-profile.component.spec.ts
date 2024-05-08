import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffreProfileComponent } from './chauffre-profile.component';

describe('ChauffreProfileComponent', () => {
  let component: ChauffreProfileComponent;
  let fixture: ComponentFixture<ChauffreProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffreProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChauffreProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
