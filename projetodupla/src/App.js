import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MessageForm } from './components/MessageForm';

const AppContainer = styled.div`
  max-width: 700px;
  background-color: gray;
  height: 70vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
` 

const BoldText = styled.span`
  font-weight: bold;
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {
            this.state.messages.map((message, index) => <p key={index}><BoldText>{message.user}</BoldText>{': ' + message.text}</p>)
          }
        </MessagesContainer>
        <MessageForm addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;
