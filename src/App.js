import SignUpComponent from "./components/signup/SignUpComponent";
import {Auth} from 'aws-amplify'

function App() {
  return (
    <>
        <SignUpComponent />
          <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
          </header>
        </div>
    </>
  );
}

export default App;
