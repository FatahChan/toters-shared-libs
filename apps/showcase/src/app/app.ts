import { Component } from '@angular/core';
import { ButtonComponent } from '@toters/shared-ui';

@Component({
  imports: [ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Toters Shared UI Library Showcase';
  protected clickCount = 0;

  handleButtonClick(type: string): void {
    this.clickCount++;
    console.log(`${type} button clicked! Total clicks: ${this.clickCount}`);
  }
}
