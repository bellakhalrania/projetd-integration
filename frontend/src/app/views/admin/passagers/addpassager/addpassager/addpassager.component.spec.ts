import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpassagerComponent } from './addpassager.component';

describe('AddpassagerComponent', () => {
  let component: AddpassagerComponent;
  let fixture: ComponentFixture<AddpassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
