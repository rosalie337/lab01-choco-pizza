
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import IngredientsList from './IngredientsList.js';
import Recipe from './Recipe.js';

function App() {
  return (

    <div className="App">
      <Header className="App-header" />
        <img className="choco-pizza" src="chocoPizza.png" alt="pizza" />
      <Recipe />
      <IngredientsList />  
      <Footer />
    </div>
  );
}

export default App;
