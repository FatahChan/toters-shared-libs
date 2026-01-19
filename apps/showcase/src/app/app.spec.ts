import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ButtonComponent } from '@toters/shared-ui';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, ButtonComponent],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Toters Shared UI Library Showcase',
    );
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
