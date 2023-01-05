import {useContext} from 'react'

import MeetUpContext from '../../context/MeetUpContext'
import Header from '../Header'

import {
  HomeMainContainer,
  CourseMeetUpText,
  RegisterForTopicText,
  GreetingWithName,
  LinkStyle,
  RegisterButton,
  MeetUpImage,
} from './styledComponents'

const Home = () => {
  const {registrationData, name, topic} = useContext(MeetUpContext)

  const getGreetView = () => (
    <>
      <GreetingWithName>{`Hello ${name}`}</GreetingWithName>
      <CourseMeetUpText
        color="#334155"
        fontSize="25px"
        fontWeight="bold"
      >{`Welcome to ${topic}`}</CourseMeetUpText>
    </>
  )

  const getRegistrationView = () => (
    <>
      <CourseMeetUpText color="#334155" fontSize="35px" fontWeight="normal">
        Welcome to Meetup
      </CourseMeetUpText>
      <RegisterForTopicText>Please register for the topic</RegisterForTopicText>
      <LinkStyle to="/register">
        <RegisterButton type="button">Register</RegisterButton>
      </LinkStyle>
    </>
  )

  return (
    <>
      <Header />
      <HomeMainContainer>
        {registrationData.length > 0 ? getGreetView() : getRegistrationView()}
        <MeetUpImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </HomeMainContainer>
    </>
  )
}

export default Home
