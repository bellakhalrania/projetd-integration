import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFromComponent } from './contact-from.component';

describe('ContactFromComponent', () => {
  let component: ContactFromComponent;
  let fixture: ComponentFixture<ContactFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
