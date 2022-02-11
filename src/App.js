import React from 'react';
import { GlobalStyles, Header, Section } from './styles/GlobalStyles'

import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom/ChatRoom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'


function App() {
   
  const [user] = useAuthState(auth);

  return (
    <GlobalStyles>
      <div className="App">
        <Header>
          <SignOut />
        </Header>

        <Section>
          {user ? <ChatRoom /> : <SignIn />}
        </Section>
      </div>
    </GlobalStyles>
  );
}

export default App;
