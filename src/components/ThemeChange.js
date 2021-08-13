import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function ThemeChange() {
  useEffect(() => {
    // false is the required param when using this in React
    themeChange(false)
  }, [])

  return (
    <select data-choose-theme>
      <option value=''>Theme</option>
      <option value='dark'>Dark</option>
      <option value='pink'>Pink</option>
    </select>
  )
}
