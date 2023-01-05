import {useState, useContext} from 'react'
import {withRouter} from 'react-router-dom'

import MeetUpContext from '../../context/MeetUpContext'
import Header from '../Header'

import {
  RegisterHomePage,
  RegisterImage,
  FormContainer,
  FormHeading,
  LabelElement,
  InputElement,
  SelectElement,
  OptionsElement,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => {
  const {onClickRegister, onClickName, onClickTopic} = useContext(MeetUpContext)

  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isErrorGenerated, setErrorGenerated] = useState(false)

  const onClickSubmitForm = event => {
    event.preventDefault()
    if (name === '') {
      setErrorGenerated(true)
      setErrorMessage('Please enter your name')
    } else if (topic === '') {
      setErrorGenerated(true)
      setErrorMessage('Please enter your topic')
    }
    if (name !== '') {
      onClickName(name)
    }
    if (topic !== '') {
      onClickTopic(topic)
    }
    if (name !== '' && topic !== '') {
      setErrorGenerated(false)
      setErrorMessage('')
      const newRegistration = {
        name,
        topic,
      }
      onClickRegister(newRegistration)
      setName('')
      setTopic('')
      const {history} = props

      history.replace('/')
    }
  }
  const onSelectTopic = event => {
    const topicSelected = event.target.value

    topicsList.forEach(eachTopic => {
      if (eachTopic.id === topicSelected) {
        setTopic(eachTopic.displayText)
      }
    })
  }

  return (
    <>
      <Header />
      <RegisterHomePage>
        <RegisterImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <FormContainer onSubmit={onClickSubmitForm}>
          <FormHeading>Let us join</FormHeading>
          <LabelElement htmlFor="name">NAME</LabelElement>
          <InputElement
            id="name"
            value={name}
            type="text"
            onChange={event => setName(event.target.value)}
            placeholder="Your name"
          />
          <LabelElement htmlFor="topic">TOPICS</LabelElement>
          <SelectElement id="topic" onChange={onSelectTopic}>
            {topicsList.map(eachTopic => (
              <OptionsElement key={eachTopic.id} value={eachTopic.id}>
                {eachTopic.displayText}
              </OptionsElement>
            ))}
          </SelectElement>
          <RegisterNowButton type="submit">Register Now</RegisterNowButton>
          {isErrorGenerated && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormContainer>
      </RegisterHomePage>
    </>
  )
}

export default withRouter(Register)
