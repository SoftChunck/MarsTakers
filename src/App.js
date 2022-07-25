import './App.css';
import {Navbar,Header,Statistics,Earnings,Refferals,Footer} from './Containers'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='widthh98'>        
        <Header></Header>
        <Statistics></Statistics>
        <Earnings></Earnings>
        <Refferals></Refferals>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
