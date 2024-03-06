
import './App.css';
import Logo from './images/logo.png';
import Personagem1 from './images/personagem1.jpg';
import Personagem2 from './images/personagem2.jpg';
import Personagem3 from './images/personagem3.jpg';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Descricao from './components/Descricao/Descricao';

function App() {


  return (
    <>
  
      <div>
        
       <Header/>
        <Main/> 

        <Descricao/>
      
      {/* <footer></footer> */}
      </div>
    </>
  )
}

export default App
