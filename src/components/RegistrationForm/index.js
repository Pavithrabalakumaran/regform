// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidSecondName = this.validateLastName()

    this.setState({showLastNameError: !isValidSecondName})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidSecondName = this.validateLastName()

    if (isValidFirstName && isValidSecondName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidSecondName,
        isFormSubmitted: false,
      })
    }
  }

  onChangeUserName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-error-field'
      : 'name-input-field'

    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={className}
          type="text"
          value={firstName}
          id="firstName"
          onChange={this.onChangeUserName}
          placeholder="First Name"
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, showLastNameError} = this.state

    const className = showLastNameError
      ? 'name-input-error-field'
      : 'name-input-field'

    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={className}
          type="text"
          value={lastName}
          id="lastName"
          onChange={this.onChangeLastName}
          onBlur={this.onBlueLastName}
          placeholder="Last Name"
        />
      </>
    )
  }

  renderRegForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          {this.renderFirstNameField()}
          {showFirstNameError && <p className="err-msg">Required</p>}
        </div>
        <div className="input-container">
          {this.renderLastNameField()}
          {showLastNameError && <p className="err-msg">Required</p>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccessView = () => (
    <>
      <h1 className="success-reg-heading">Registration</h1>
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
        <p className="success-description">Submitted Successfully</p>
        <button
          type="button"
          className="submit-button"
          onClick={this.submitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-container">
        <h1 className="reg-heading">Registration Form</h1>

        {isFormSubmitted ? this.renderSuccessView() : this.renderRegForm()}
      </div>
    )
  }
}

export default RegistrationForm
