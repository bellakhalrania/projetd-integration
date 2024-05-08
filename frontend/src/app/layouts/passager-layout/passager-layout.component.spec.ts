import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerLayoutComponent } from './passager-layout.component';

describe('PassagerLayoutComponent', () => {
  let component: PassagerLayoutComponent;
  let fixture: ComponentFixture<PassagerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
