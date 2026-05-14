import { isPlatformBrowser } from '@angular/common'
import { Component, inject, PLATFORM_ID } from '@angular/core'
import { triggerAndroidHaptic } from '..'

@Component({
  selector: 'haptic-trigger',
  standalone: true,
  template: `
    <label class="haptic-trigger">
      <input
        class="haptic-trigger__input"
        type="checkbox"
        switch
        aria-hidden="true"
        tabindex="-1"
        (change)="onchange()"
      />
      <ng-content />
    </label>
  `,
  styles: [`
    .haptic-trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }

    .haptic-trigger__input {
      display: none;
    }
  `],
})
export class HapticTriggerComponent {
  private readonly platformId = inject(PLATFORM_ID)

  onchange(): void {
    if (isPlatformBrowser(this.platformId)) {
      triggerAndroidHaptic()
    }
  }
}
