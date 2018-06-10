let icon;

const getIcon = (iconCode) =>{
	switch(iconCode){
		case '01d':
			icon = '/src/images/weather-icons/01d.svg';
			break;
		case '01n':
			icon = '/src/images/weather-icons/01n.svg';
			break;
		case '02d':
			icon = '/src/images/weather-icons/02d.svg';
			break;
		case '02n':
			icon = '/src/images/weather-icons/02n.svg';
			break;
		case '03d':
			icon = '/src/images/weather-icons/03d.svg';
			break;
		case '04d':
			icon = '/src/images/weather-icons/04d.svg';
			break;
		case '04n':
			icon = '/src/images/weather-icons/04n.svg';
			break;
		case '09d':
			icon = '/src/images/weather-icons/09d.svg';
			break;
		case '09n':
			icon = '/src/images/weather-icons/09n.svg';
			break;
		case '10d':
			icon = '/src/images/weather-icons/10d.svg';
			break;
		case '10n':
			icon = '/src/images/weather-icons/10n.svg';
			break;
		case '11d':
			icon = '/src/images/weather-icons/11d.svg';
			break;
		case '11n':
			icon = '/src/images/weather-icons/11n.svg';
			break;
		case '13d':
			icon = '/src/images/weather-icons/13d.svg';
			break;
		case '13n':
			icon = '/src/images/weather-icons/13n.svg';
			break;
		case '50d':
			icon = '/src/images/weather-icons/50d.svg';
			break;
		case '50n':
			icon = '/src/images/weather-icons/50n.svg';
			break;
		default: 
			icon="null";
			break;
	}
	return icon;
}
module.exports = getIcon;