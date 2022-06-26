
import RoutingPage from './RoutingPage/RoutingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


/*
https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
*/

function App() { // --> JSX

  return ( 
    <div className = 'app'>
      <RoutingPage />
      {/* <div className='striped-border'></div> */}
    </div>
  );
}

export default App;
