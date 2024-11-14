import React from 'react'

const Buttons = ({ text, link }) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <button className='btn' onClick={handleClick}>{text}</button>
  )
}

export default Buttons
