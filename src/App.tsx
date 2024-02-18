import logo from './logo.svg';
import './App.css';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"

function App() {
  
  return (

    <div className="App">
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => redirect('/')} />
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
