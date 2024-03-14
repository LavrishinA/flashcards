import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '../src/shared/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../src/app/app-store'

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
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default preview
