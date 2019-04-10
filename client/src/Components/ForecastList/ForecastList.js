import React, { Component } from 'react';
import Forecast from './../Forecast/Forecast';
import './ForecastList.css';

class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        if (!this.props.days) {
            this.props = {...this.props, days: 7}
        }
    }

    createForecastList() {
        let forecastList = [];
        for(var i = 0; i < this.props.days; i++) {
            let day = new Date();
            forecastList.push(
                <Forecast
                    key={i}
                    day={new Date(day.setDate(day.getDate()+i))}
                />
            );
        }

        return forecastList;
    }

    render() {
        return (
            <>
                <h1>Here's our {this.props.days}-day forecast:</h1>
                <div className="forecast-list">
                    {this.createForecastList()}
                </div>
            </>
        )
    }
}

export default ForecastList;