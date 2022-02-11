import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles'
import { Header, Section } from './styles/Styles'

import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import ChatRoom from './components/ChatRoom/ChatRoom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'


function App() {
   
  const [user] = useAuthState(auth);

  return (
      <div className='App'>
      <GlobalStyles />
        <Header>
          <SignOut />
        </Header>

        <Section>
          {user ? <ChatRoom /> : <SignIn />}
        </Section>
      </div>
  );
}

export default App;
