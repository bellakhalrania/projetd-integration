import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrajetComponent } from './list-trajet.component';

describe('ListTrajetComponent', () => {
  let component: ListTrajetComponent;
  let fixture: ComponentFixture<ListTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
