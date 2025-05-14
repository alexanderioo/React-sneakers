import './App.css'
function App() {
  return <div className='wrapper clear'>
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"></img>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/Vector.svg"></img>
              <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/Union.svg"></img>
          </li>
        </ul>
      </div>
    </header>

    <div className="content p-40">
      <h1 className='mb-40'>Все кроссовки</h1>
      ....
      <div className='d-flex'>
      <div className='card'>
        <img width={133} height={133}src="/img/Sneakers/1.jpg" alt=""></img>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div>
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11}src="/img/plus.svg"></img>
          </button>
        </div>
      </div>
      <div className='card'>
        <img width={133} height={133}src="/img/Sneakers/2.jpg" alt=""></img>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div>
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11}src="/img/plus.svg"></img>
          </button>
        </div>
      </div>
      <div className='card'>
        <img width={133} height={133}src="/img/Sneakers/3.jpg" alt=""></img>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div>
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11}src="/img/plus.svg"></img>
          </button>
        </div>
      </div>
      <div className='card'>
        <img width={133} height={133}src="/img/Sneakers/4.jpg" alt=""></img>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div>
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11}src="/img/plus.svg"></img>
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
}
export default App