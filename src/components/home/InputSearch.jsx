import React from 'react'

const InputSearch = ({inputText, setInputText}) => {

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <input placeholder='What are you looking for?' value={inputText} onChange={handleChange} type="text" />
  )
}

export default InputSearch