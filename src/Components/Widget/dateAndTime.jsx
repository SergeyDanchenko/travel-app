import React, { Component } from "react";
import moment from 'moment';
import 'moment-timezone'; 

class DateAndTime extends Component {
    constructor(props) { 
        super(props);
        this.state = { date: material(this.props.months) };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: material(this.props.months)
        });
    }

    render() {
        return (
            <div>
                <h3>{this.state.date}</h3>
            </div>
        );
    }
}

function material(citi) {
    const formattedDT = moment.tz(citi).format('DD.MM.YYYY -- hh:mm:ss a');
    return formattedDT;
}

export default DateAndTime;