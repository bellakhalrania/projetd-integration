import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbusComponent } from './addbus.component';

describe('AddbusComponent', () => {
  let component: AddbusComponent;
  let fixture: ComponentFixture<AddbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
