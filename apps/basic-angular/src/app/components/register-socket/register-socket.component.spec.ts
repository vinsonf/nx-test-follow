import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSocketComponent } from './register-socket.component';

describe('RegisterSocketComponent', () => {
  let component: RegisterSocketComponent;
  let fixture: ComponentFixture<RegisterSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
