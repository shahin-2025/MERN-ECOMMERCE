import React from 'react'
import { Link } from 'react-router-dom'

const ThemeButton = ({text, url}) => {
  return (
    <Link className='theme-button' to={url}>{text}</Link>
  )
}

export default ThemeButton