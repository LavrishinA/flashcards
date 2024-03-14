import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '../src/shared/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
