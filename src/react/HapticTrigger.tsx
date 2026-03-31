import type { ReactNode } from 'react'
import { triggerAndroidHaptic } from '..'

export default function HapticTrigger({ children }: { children: ReactNode }) {
  return (
    <label>
      <input
        type="checkbox"
        // @ts-expect-error ...
        switch
        onChange={triggerAndroidHaptic}
        style={{ display: 'none' }}
      />
      {children}
    </label>
  )
}
