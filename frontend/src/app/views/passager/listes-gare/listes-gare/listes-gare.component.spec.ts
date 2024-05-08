import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesGareComponent } from './listes-gare.component';

describe('ListesGareComponent', () => {
  let component: ListesGareComponent;
  let fixture: ComponentFixture<ListesGareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesGareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesGareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
