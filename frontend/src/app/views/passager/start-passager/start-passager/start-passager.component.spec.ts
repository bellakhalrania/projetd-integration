import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPassagerComponent } from './start-passager.component';

describe('StartPassagerComponent', () => {
  let component: StartPassagerComponent;
  let fixture: ComponentFixture<StartPassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
