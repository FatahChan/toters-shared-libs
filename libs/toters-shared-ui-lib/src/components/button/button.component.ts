import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'toters-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  label = input<string>('Click me');
  variant = input<'primary' | 'secondary' | 'danger'>('primary');
  disabled = input<boolean>(false);
  size = input<'small' | 'medium' | 'large'>('medium');
  clicked = output<void>();

  handleClick(): void {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
