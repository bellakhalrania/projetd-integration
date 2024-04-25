import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGareComponent } from './list-gare.component';

describe('ListGareComponent', () => {
  let component: ListGareComponent;
  let fixture: ComponentFixture<ListGareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
