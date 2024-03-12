import { RadioGroup } from '@/components/RadioGroup'

function App() {
  return (
    <div>
      <RadioGroup
        options={[
          { label: 'Option One', value: 'option-one' },
          { label: 'Option Two', value: 'option-two' },
        ]}
      />
    </div>
  )
}

export default App
