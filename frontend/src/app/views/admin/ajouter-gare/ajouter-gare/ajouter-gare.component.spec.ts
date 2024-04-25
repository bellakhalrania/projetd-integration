import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGareComponent } from './ajouter-gare.component';

describe('AjouterGareComponent', () => {
  let component: AjouterGareComponent;
  let fixture: ComponentFixture<AjouterGareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterGareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
