import React from 'react'
import injectSheet from '../utils/jss-inject-sheet'

const styles = {
  position: {
    'margin-top': '2em',
    'display': 'flex',
    'justify-content': 'center'
  },
  spaceBetween: {
    'width': '320px',
    'display': 'flex',
    'justify-content': 'space-between'
  }
}

const KarenButtons = ({sheet, children}) => (
  <div className={sheet.classes.position}>
    <div className={sheet.classes.spaceBetween}>
      {children}
    </div>
  </div>
)

export default injectSheet(styles)(KarenButtons)