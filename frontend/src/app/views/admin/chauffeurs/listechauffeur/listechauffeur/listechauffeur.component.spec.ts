import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListechauffeurComponent } from './listechauffeur.component';

describe('ListechauffeurComponent', () => {
  let component: ListechauffeurComponent;
  let fixture: ComponentFixture<ListechauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListechauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListechauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
