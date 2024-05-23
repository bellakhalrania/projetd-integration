import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchauffeurComponent } from './addchauffeur.component';

describe('AddchauffeurComponent', () => {
  let component: AddchauffeurComponent;
  let fixture: ComponentFixture<AddchauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddchauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
