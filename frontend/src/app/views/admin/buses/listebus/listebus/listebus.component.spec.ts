import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebusComponent } from './listebus.component';

describe('ListebusComponent', () => {
  let component: ListebusComponent;
  let fixture: ComponentFixture<ListebusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
