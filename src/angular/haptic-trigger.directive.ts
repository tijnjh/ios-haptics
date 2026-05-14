import { isPlatformBrowser } from '@angular/common'
import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core'
import { triggerAndroidHaptic } from '..'

@Directive({
  selector: 'label[hapticTrigger]',
  standalone: true,
})
export class HapticTriggerDirective implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLLabelElement>>(ElementRef)
  private readonly renderer = inject(Renderer2)
  private readonly platformId = inject(PLATFORM_ID)

  private input?: HTMLInputElement
  private removeChangeListener?: () => void

  ngOnInit(): void {
    const input = this.renderer.createElement('input') as HTMLInputElement

    this.renderer.setAttribute(input, 'type', 'checkbox')
    this.renderer.setAttribute(input, 'switch', '')
    this.renderer.setAttribute(input, 'aria-hidden', 'true')
    this.renderer.setAttribute(input, 'tabindex', '-1')
    this.renderer.setStyle(input, 'display', 'none')

    this.renderer.insertBefore(
      this.host.nativeElement,
      input,
      this.host.nativeElement.firstChild,
    )

    this.removeChangeListener = this.renderer.listen(input, 'change', () => {
      if (isPlatformBrowser(this.platformId)) {
        triggerAndroidHaptic()
      }
    })

    this.input = input
  }

  ngOnDestroy(): void {
    this.removeChangeListener?.()

    if (this.input?.parentNode) {
      this.renderer.removeChild(this.host.nativeElement, this.input)
    }
  }
}
