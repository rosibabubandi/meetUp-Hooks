import React from 'react'

const MeetUpContext = React.createContext({
  name: '',
  topic: '',
  registrationData: [],
  onClickRegister: () => {},
  onClickName: () => {},
  onClickTopic: () => {},
})

export default MeetUpContext
