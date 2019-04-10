import React, { Component } from 'react';
import WeatherService from './../../Services/WeatherService/WeatherService';
import './Forecast.css';

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            forecast: null,
            isLoaded: false,
        }
    }

    componentDidMount() {
        WeatherService.getWeatherForecast(this.props.day, (err, forecast) => {
            if (!err) {
                this.setState({ forecast, isLoaded: true });
            }
        });
    }

    getNumOfDaysAway(date) {
        return Math.round((date - new Date())/1000/60/60/24);
    }

    DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    render() {
        let forecast = this.state.forecast;
        let day = this.props.day;
        let numDaysAway = this.getNumOfDaysAway(day);
        let isToday = numDaysAway === 0;
        let isTomorrow = numDaysAway === 1;
        return (
            <div className={"forecast-item" + (isToday ? " today" : (isTomorrow ? " tomorrow" : ""))}>
                <div className="forecast" title={day.toDateString()}>
                    <strong>{isToday ? "Today" : (isTomorrow ? "Tomorrow" : this.DAYS[day.getDay()])}</strong>
                    <div className={this.state.isLoaded ? ("icon " + forecast.oneword.toLowerCase()) : ""}></div>
                    <div className="degrees">
                        <div className="degree-hi">{this.state.isLoaded ? forecast.degrees.hi : "-"}f</div>
                        <div className="degree-lo">{this.state.isLoaded ? forecast.degrees.lo : "-"}f</div>
                    </div>
                    <div className="description">{this.state.isLoaded ? forecast.description : "Loading..."}</div>
                </div>
            </div>
        );
    }
}

export default Forecast;