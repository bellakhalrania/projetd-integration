import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTrajetComponent } from './ajouter-trajet.component';

describe('AjouterTrajetComponent', () => {
  let component: AjouterTrajetComponent;
  let fixture: ComponentFixture<AjouterTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
