import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepassagerComponent } from './listepassager.component';

describe('ListepassagerComponent', () => {
  let component: ListepassagerComponent;
  let fixture: ComponentFixture<ListepassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
