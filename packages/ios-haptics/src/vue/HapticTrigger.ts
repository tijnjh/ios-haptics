import type { HapticTriggerProps } from './types'
import { defineComponent, h } from 'vue'
import { _triggerAndroidHaptic } from '..'

export default defineComponent({
  name: 'HapticTrigger',

  props: {
    as: String,
  },

  emits: ['tap'],

  setup(props: HapticTriggerProps<any>, { emit, slots, attrs }) {
    return () => {
      const Tag = (props.as ?? 'button')

      return h(
        Tag,
        {
          ...attrs,
          style: {
            position: 'relative',
            display: 'inline-flex',
          },
        },
        [
          slots.default?.(),

          h('input', {
            type: 'checkbox',
            switch: '',
            style: {
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
            },
            onChange: () => {
              _triggerAndroidHaptic()
              emit('tap')
            },
          }),
        ],
      )
    }
  },
})
