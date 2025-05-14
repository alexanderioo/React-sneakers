import './App.css'

function App() {
  return <div classname='wrapper'>
    <header>
      <div className="headerLeft"> 

         <img width={40}src="/img/logo.png"></img>
        <div className ="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className ="headerRight">
          <li>
            <svg><span>1205 руб</span></svg>
          </li>
          <li>
            <svg></svg>
          </li>
        </ul>
      </div>
    </header>
    <div className="content">
      <h1>Все кроссовки</h1>
      ....
    </div>
  </div>
}
export default App