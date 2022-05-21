// import logo from './logo.svg';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import { SearchPlace } from './Components/Search_places';
import Trail from './Trail/Trail';

function App() {
  return (
    <div className="App">
      <Trail />
      {/* <SearchPlace /> */}
    </div>
  );
}

export default App;
