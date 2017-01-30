import React from 'react'
import {VelocityTransitionGroup} from 'velocity-react';
import injectStyles from '../utils/jss-inject-sheet'
import KarenTextField from './KarenTextField';
import KarenButtons from './KarenButtons'
import SubmitButton from './SubmitButton'
import ResetButton from './ResetButton'
import submitResume from '../utils/api'
import BarChart from './BarChart'
import {prepPersonalityData, isEnoughWords} from '../utils/utils'

const styles = {
  chart : {
    'display': 'flex',
    'justify-content': 'center'
  }
}

class KarenForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resume: '',
      cover: '',
      hasSubmitted: false,
      isSubmitting: false,
      personality: null
    }
    this.handleChange = this.handleChange.bind(this) // bind to this instance once only
    this.handleReset = this.handleReset.bind(this) // bind to this instance once only
    this.handleSubmit = this.handleSubmit.bind(this) // bind to this instance once only
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleReset() {
    this.setState({resume: '', cover: '', hasSubmitted: false})
  }

  handleSubmit(e) {
    const {resume, cover, hasSubmitted} = this.state
    const {minWords} = this.props
    e.preventDefault();

    this.setState({personality: null})
    if (! hasSubmitted) {
      this.setState({hasSubmitted: true})
    }
    
    if (isEnoughWords(`${resume} ${cover}`, minWords)) {
      // Disable both buttons
      this.setState({isSubmitting: true})
      submitResume(resume, cover)
        .then((data) => {
          data = prepPersonalityData(data)
          this.setState({personality: data, isSubmitting: false})
        })
        .catch((err) => {
          this.setState({personality: null, isSubmitting: false})
        })
    }
  }

  render()
  {
    const {resume, cover, isSubmitting, hasSubmitted, personality} = this.state
    const {color, minWords, sheet} = this.props

    const hasEnoughWords = (! hasSubmitted) ? true : isEnoughWords(`${resume} ${cover}`, minWords)

    return (
      <form onSubmit={this.handleSubmit}>
        <KarenTextField
          name="resume"
          value={resume}
          label="Paste Your Resume"
          errorText={(! hasEnoughWords && 'More words required')}
          handleChange={this.handleChange}
        />
        <br/>
        <KarenTextField
          name="cover"
          value={cover}
          label="Paste Your Cover Letter"
          errorText={(! hasEnoughWords && 'More words required')}
          handleChange={this.handleChange}
        />
        <br/>
        <div className={sheet.classes.chart} ref={(div) => { this.chartDiv = div }}>
          <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
            {personality && <BarChart color={color} data={personality} width={this.chartDiv.offsetWidth}/>}
          </VelocityTransitionGroup>
        </div>
        <KarenButtons>
          <SubmitButton isSubmitting={isSubmitting} disabled={isSubmitting || ! hasEnoughWords} />
          <ResetButton handleReset={this.handleReset} />
        </KarenButtons>
      </form>
    )
  }

}

export default injectStyles(styles)(KarenForm)