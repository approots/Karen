import React from 'react'
import Greeting from './Greeting'
import KarenForm from './KarenForm'
import injectStyles from '../utils/jss-inject-sheet'
import {cyan500 as greetingColor} from 'material-ui/styles/colors'

const styles = {
  'containers' : {
    'width': '1024px'
  },
  '@media (max-width: 1024px)': {
    'containers': {
      'width': '100%'
    }
  }
}

const App = ({sheet}) => {
  return (
    <div className={sheet.classes.containers}>
      <Greeting color={greetingColor}>Applicant Score</Greeting>
      <KarenForm color={greetingColor} minWords={200} />
    </div>
  )
}

export default injectStyles(styles)(App)
