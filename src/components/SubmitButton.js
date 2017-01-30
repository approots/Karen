import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import IconSend from 'material-ui/svg-icons/content/send';
import CircularProgress from 'material-ui/CircularProgress'

const SubmitButton = ({style, isSubmitting, disabled}) => {
  return (
    <RaisedButton
      style={style}
      type="submit"
      label="Submit"
      labelPosition="before"
      primary={true}
      disabled={disabled}
      icon={isSubmitting ? <CircularProgress size={25} style={{marginBottom: '3px'}} /> : <IconSend />} />
  )
}

export default SubmitButton