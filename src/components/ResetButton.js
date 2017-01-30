import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import IconUndo from 'material-ui/svg-icons/content/undo';

const ResetButton = ({handleReset}) => (
  <RaisedButton label="Reset" onClick={handleReset} icon={<IconUndo/>} />
)

export default ResetButton