import React from 'react'
import {cyan500 as defaultColor} from 'material-ui/styles/colors'
import injectStyles from '../utils/jss-inject-sheet'

const styles = {
  greeting : {
    'hyphens': 'auto',
    'display': 'flex',
    'justify-content': 'center'
  }
}

const Greeting = ({sheet, color, children}) => {
  return (
    <h1 className={sheet.classes.greeting} style={{color}}>{children}</h1>
  )
}

Greeting.defaultProps = {color: defaultColor}

export default injectStyles(styles)(Greeting)