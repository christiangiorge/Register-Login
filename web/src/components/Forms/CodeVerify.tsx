import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

export default function CodeVerify(){
  const [value, setValue] = React.useState<string>('')

  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  const handleComplete = (finalValue: string) => {
    fetch('...')
  }

  return (
    <div className="w-20">
        <MuiOtpInput
        value={value}
        onChange={handleChange}
        onComplete={handleComplete}
        length={6}
        validateChar={(character: string, index: number) => true}
    />
    </div>
    
  )
}