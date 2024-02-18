import logo from './logo.svg';
import './App.css';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"

function App() {
  
  return (

    <div className="App">
      <header className="App-header">
      </header>
        <p> this is in inside App</p>
        <p>I'll need to put a logo stand in below here to replace the React one.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Zodiac sign based dating app! It's a silly place.
        </p>
        <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => redirect('/')} />
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
    </div>
  );
}

export default App;
