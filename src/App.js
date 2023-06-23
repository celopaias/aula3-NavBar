import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer';

function App() {
  const textGreeting = () => {
    return <p>Hello Wooooorld!</p>;
  };
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div class="container">
        <ItemListContainer greeting={textGreeting()} />
      </div>
    </div>
  );
}

export default App;
