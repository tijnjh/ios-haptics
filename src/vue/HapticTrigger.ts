import { defineComponent, h } from 'vue'
import { triggerAndroidHaptic } from '..'

export default defineComponent({
  name: 'HapticTrigger',

  setup: () => {
    return h('label', [
      h('input', {
        type: 'checkbox',
        style: 'display: none;',
        onChange: triggerAndroidHaptic,
      }),
      h('slot'),
    ])
  },
})
