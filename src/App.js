import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MeetUpContext from './context/MeetUpContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => {
  const [registrationData, setOnClickRegister] = useState([])
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')

  const onClickRegister = registerObject => {
    setOnClickRegister([...registrationData, registerObject])
  }
  const onClickName = userName => {
    setName(userName)
  }
  const onClickTopic = selectedTopic => {
    setTopic(selectedTopic)
  }
  return (
    <MeetUpContext.Provider
      value={{
        registrationData,
        name,
        topic,
        onClickRegister,
        onClickName,
        onClickTopic,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </MeetUpContext.Provider>
  )
}

export default App
