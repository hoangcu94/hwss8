import Products from "./components/clothes";
import './App.css';

function App() {
  return (
    <div >
      <i className="d-flex centering logo">Welcome to my shop</i> <hr/>
      <div className="d-flex f-wrap item-content">{ Products }</div>
    </div>
  );
}

export default App;
