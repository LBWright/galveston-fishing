import React, {Component} from 'react';
import getIcon from '../utils/icon'
import api from '../utils/api';

class Weather extends Component {
	constructor(props){
		super(props);
		this.state = {
			weather: null,
		}
		//this.getWeather = this.getWeather.bind(this);
		//this.getWindDirection = this.getWindDirection.bind(this);
	}
	componentDidMount(props){
		api.getWeather(this.props.zipcode)
		.then((weather)=>{
			this.setState({weather: weather.data})
		})
		.catch(error=>{console.log(error)})
	}

	getWeather(weatherArray){
		return(
			 weatherArray.map((item, index) =>{
				if (index % 2 !== 0){
					return(
						<li key={Math.random()} className="list-item">
						{console.log(item)}
							<div>Wind Direction at {item.dt_txt}: {this.getWindDirection(item.wind.degree)} @{this.windToMph(item.wind.speed)}m/h</div>
							<div>Temperature: {Math.round(this.kelvinToFahrenheit(item.main.temp))}F</div>
							<div>Weather: {item.weather[0].description} </div> 
							<div></div>						
						</li>
					)
				}
				
			})
		)
	}
	//for getWeather Icon image <img height="50" width="50" src={`${getIcon(item.weather[0].icon)}`} alt="weather img"/>
	getWindDirection(windDegrees){
		let windDirection = ''
		if (windDegrees < 0){
			if (windDegrees < 0 && windDegrees > -33){
				windDirection ='N'
			} else if (windDegrees <= -33 && windDegrees > -66){
				windDirection = 'NW'
			} else if (windDegrees <= -66 && windDegrees > -122){
				windDirection = 'W'
			} else if (windDegrees <= -122 && windDegrees > -153){
				windDirection = 'SW'
			} else {
				windDirection = 'S'
			}
		} else {
			if (windDegrees > 0 && windDegrees < 33){
				windDirection = 'N'
			} else if (windDegrees >= 33 && windDegrees < 66){
				windDirection = 'NE'
			} else if (windDegrees >= 66 && windDegrees < 122){
				windDirection = 'E'
			} else if (windDegrees >= 122 && windDegrees < 153){
				windDirection = 'SE'
			} else {
				windDirection = 'S';
			}
		}
		return windDirection;
	}

	windToMph(windSpeed){
		return Math.round(windSpeed * 3600 / 1610.3*1000)/1000;
	}

	kelvinToFahrenheit(kelvin){
		return (( kelvin - 273.15) * 9/5) + 32
	}

	render(){
		return(
			<div className="list-item">
			 {!this.state.weather ?
				<p>Loading...</p> :
				<div>
					<h3>Conditions for {this.props.city}:</h3>
					<ul className="list-item-group">
						{this.state.weather ? 
							this.getWeather(this.state.weather.list) :
							null
						}
					</ul>
				</div>
			 }
			</div>
		)
	}
}

export default Weather;