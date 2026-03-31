import { defineComponent, h, renderSlot } from 'vue'
import { triggerAndroidHaptic } from '..'

export default defineComponent({
  name: 'HapticTrigger',

  setup(_, { slots, attrs }) {
    return () =>
      h('label', attrs, [
        h('input', {
          type: 'checkbox',
          switch: true,
          style: 'display: none;',
          onChange: triggerAndroidHaptic,
        }),
        renderSlot(slots, 'default'),
      ])
  },
})
