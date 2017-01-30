import React from 'react'
import TextField from 'material-ui/TextField';

const KarenTextField = ({name, value, label, errorText, handleChange}) => {
  return (
    <TextField
      name={name}
      value={value}
      errorText={errorText}
      multiLine={true}
      fullWidth={true}
      floatingLabelText={label}
      rows={3}
      rowsMax={10}
      onChange={handleChange}
    />
  )
}

export default KarenTextField