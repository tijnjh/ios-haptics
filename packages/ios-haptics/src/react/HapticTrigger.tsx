import type { ElementType } from 'react'
import type { HapticTriggerProps } from './types'
import { _triggerAndroidHaptic } from '..'

export default function HapticTrigger<T extends ElementType>({
  as,
  onTap,
  children,
  ...props
}: HapticTriggerProps<T>) {
  const Tag = as ?? 'button'

  return (
    <Tag
      {...props}
      style={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      {children}

      <input
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          margin: 0,
          opacity: 0,
          cursor: 'pointer',
          clipPath: 'inset(0 round 999px)',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
        }}
        type="checkbox"
        onChange={() => {
          _triggerAndroidHaptic()
          onTap?.()
        }}
        // @ts-expect-error - unrecognized attribute
        switch=""
      />
    </Tag>
  )
}
