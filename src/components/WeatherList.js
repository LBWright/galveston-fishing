import React, {Component} from 'react';

import Weather from './Weather'

class WeatherList extends Component {
	render(){
		return(
			<div>
				<div className="list-group" >
					<Weather city="Anahuac" zipcode="77514" />
					<Weather city="Texas City" zipcode="77554" />
					<Weather city="Bolivar" zipcode="77650" />
					<Weather city="Baytown" zipcode="77523" />
					<Weather city="League City" zipcode="77539" />					
				</div>
			</div>
		)
	}
}

export default WeatherList;