import { useEffect, useState } from "react"

import  useDebounce  from "./useDebounce"

export default function Component() {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value, 500)

  const handleChange = event => {
    setValue(event.target.value)
  }

  useEffect(() => {
    
  }, [debouncedValue])

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
