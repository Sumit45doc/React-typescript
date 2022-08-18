import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Box() {
    const theme = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme.primary.main}} >Theme context  </div>
  )
}

export default Box