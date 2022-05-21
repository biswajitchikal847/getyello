import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 import React,{Component} from 'react';
 import CurrentLocation  from './Mapcomp'
 const mapStyles = {
    width: '100%',
    height: '100%'
  };
export class Trail extends Component {
   
    state = {
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}          
      };
  
      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


    render() {
        return (
            <>
            <div>Google map</div>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
              {
                lat: -1.2884,
                lng: 36.8233
              }
            }
          >
<CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
<Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
              </Map>
          </>
        );
      }
    }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBRb--Uh7Zw5Kj96cB3gi3QzjmuyYeO7GY")
})(Trail)

// export default GoogleApiWrapper(
//     (props) => ({
//       apiKey: props.apiKey
//     }
//   ))(MapContainer)