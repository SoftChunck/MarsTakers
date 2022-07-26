import './App.css';
import {Navbar,Header,Statistics,Earnings,Refferals,Footer} from './Containers'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Statistics></Statistics>
      <Earnings></Earnings>
      <Refferals></Refferals>
      <Footer></Footer>
    </div>
  );
}
export default App;
