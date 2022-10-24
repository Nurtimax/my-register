import React from 'react'
import Input from '../UI/input/Input'

const ListsItems = ({input, children, htmlFor, id, type, name, value, onChange}) => {
  return (
    <div className={input}>
        <label htmlFor={htmlFor}>{children}</label>
        <Input id={id} type={type} name={name} value={value} onChange={onChange} />
      </div>
  )
}

export default ListsItems
