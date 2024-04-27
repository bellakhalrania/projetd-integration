import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerDashbordComponent } from './passager-dashbord.component';

describe('PassagerDashbordComponent', () => {
  let component: PassagerDashbordComponent;
  let fixture: ComponentFixture<PassagerDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagerDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagerDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
