import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'

const API_KEY = "e02b7ad151e0ceafbbe427b2ac4dbc2f";

export default class App extends Component {

  state = {
    isLoaded : false,
    error : null,
    name : null,
    tempertature : null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( 
      position => {
        console.log(position)
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error : error
        })
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        name : json.weather[0].main,
        tempertature : json.main.temp,
        isLoaded : true
      })
    })
  }

  render() {
    const { isLoaded, error, tempertature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden = {true} />
        {isLoaded ? <Weather temp={Math.ceil(tempertature - 273.15)} weatherName = {name} /> : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Gettin' da fucking weather!</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom : 80,
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40,
    fontSize: 30
  }
});
