import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clicked event when button is clicked', () => {
    let emitted = false;
    component.clicked.subscribe(() => {
      emitted = true;
    });

    component.handleClick();
    expect(emitted).toBe(true);
  });

  it('should not emit clicked event when disabled', () => {
    let emitted = false;
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    
    component.clicked.subscribe(() => {
      emitted = true;
    });

    component.handleClick();
    expect(emitted).toBe(false);
  });
});
