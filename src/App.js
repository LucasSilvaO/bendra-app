import img1 from './imgs/torneira1.png'
import img3 from './imgs/torneira3.png'
import img4 from './imgs/torneira5_.png'
import logo from './imgs/logo.png'
import right from './imgs/right1.png'
import left from './imgs/left.png'
import searchIcon from './imgs/svgs/searchIcon.svg'
import './App.css';
import { useState } from 'react';

function App() {
  const [firstIndex, setFirstIndex] = useState(0)
  const [productQuant, setProductQuant] = useState(0)

  const arrayOfImages = [img1, img3, img4];

  const nextFunction = () => {
    if(firstIndex > 1) {
      return setFirstIndex(0)
    }
    const index = firstIndex + 1;
    setFirstIndex(index)
  }

  const previousFunction = () => {
    if(firstIndex < 1) {
      return setFirstIndex(2)
    }
    const index = firstIndex - 1;
    setFirstIndex(index)
  }

  const addProductQuant = () => {
    const quant = productQuant + 1;
    setProductQuant(quant)
  }

  const removeProductQuant = () => {
    const quant = productQuant - 1;
    setProductQuant(quant)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} alt='logo' className='logo-img'></img>
        </div>
        <div>
        <input placeholder='Pesquisar Produto'></input>
        <img src={searchIcon} alt='searchIcon'></img>
        </div>
        <div className='contact-div'>
          <p>Telefone: (61) 3963-0335</p>
          <p>Email: faleconosco@bendra.com.br</p>
        </div>
      </header>
      <section>
        <div className='product-description'>
          <h1>Nome do Produto</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='product-images'>
          <img src={arrayOfImages[firstIndex]} alt='product_description'></img>
          <div>
            <button  onClick={() => previousFunction()}>
              <img className='btns' src={left} alt='left'></img>
            </button>
            <button onClick={() => nextFunction()}>
            <img className='btns' src={right} alt='right'></img>
            </button>
          </div>
          <div className='quantity-container'>
          <p>{`Quantidade: ${productQuant}`}</p>
          <button onClick={() => removeProductQuant()}>-</button>
          <button onClick={() => addProductQuant()}>+</button>
          </div>
          <p className='valor-text'>Valor:  **,**</p>
        </div>
      </section>
      <footer className="App-header">
        <div className='contact-div'>
          <p>Telefone: (61) 3963-0335</p>
          <p>Email: faleconosco@bendra.com.br</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
