import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export default function ThemeChange() {
  useEffect(() => {
    // false is the required param when using this in React
    themeChange(false)
  }, [])

  return (
    <select
      // Trying to figure out how to get the font color of the select to actually be legible on light-colored backgrounds
      className='select select-bordered select-primary w-full max-w-xs'
      data-choose-theme
    >
      <option value=''>Theme</option>
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
      <option value='cupcake'>Cupcake</option>
      <option value='bumblebee'>Bumblebee</option>
      <option value='emerald'>Emerald</option>
      <option value='corporate'>Corporate</option>
      <option value='synthwave'>Synthwave</option>
      <option value='retro'>Retro</option>
      <option value='cyberpunk'>Cyberpunk</option>
      <option value='valentine'>Valentine</option>
      <option value='halloween'>Hallowe'en</option>
      <option value='garden'>Garden</option>
      <option value='forest'>Forest</option>
      <option value='aqua'>Aqua</option>
      <option value='lofi'>lo-fi</option>
      <option value='pastel'>Pastel</option>
      <option value='fantasy'>Fantasy</option>
      <option value='wireframe'>Wireframe</option>
      <option value='black'>Black</option>
      <option value='luxury'>Luxury</option>
      <option value='dracula'>Dracula</option>
    </select>
  )
}
