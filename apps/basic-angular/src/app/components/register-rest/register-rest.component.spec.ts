import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRestComponent } from './register-rest.component';

describe('RegisterRestComponent', () => {
  let component: RegisterRestComponent;
  let fixture: ComponentFixture<RegisterRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
