import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesTrajetComponent } from './listes-trajet.component';

describe('ListesTrajetComponent', () => {
  let component: ListesTrajetComponent;
  let fixture: ComponentFixture<ListesTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
