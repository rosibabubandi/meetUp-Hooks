import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeMainContainer = styled.div`
  height: 90vh;
  background-color: #ffffff;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const CourseMeetUpText = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`
export const GreetingWithName = styled.h1`
  font-family: 'Roboto';
  color: #2563eb;
  font-size: 40px;
  font-weight: bold;
`
export const RegisterForTopicText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
`
export const LinkStyle = styled(Link)`
  text-decoration: none;
`
export const RegisterButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #2563eb;
  border-width: 0px;
  border-radius: 7px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 300;
  cursor: pointer;
`
export const MeetUpImage = styled.img`
  height: 50vh;
  width: 65vw;
`
