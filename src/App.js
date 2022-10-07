import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Card from './components/card/card';
import Users from './components/users/users';
import Joke from './components/jokes/joke';
import Challenge from './components/challenge/challenge';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card />
      <Users />
      <Joke />
      <Challenge />
    </div>
  );
}

export default App;
