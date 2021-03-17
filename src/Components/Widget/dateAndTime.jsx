import React, { Component } from "react";
import moment from 'moment';
import 'moment-timezone'; 
import CountryDescription from './../CountryPage/Description/CountryDescription.module.scss';


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
            <div className={CountryDescription.time}>
                <div>
                    Date: {this.state.date.date}
                </div>
                <div>
                    Time: {this.state.date.time}
                </div>           
            </div>
        );
    }
}

function material(citi) {
    const formattedDT = moment.tz(citi).format('DD.MM.YYYY-kk:mm:ss');
    const date = formattedDT.split('-')
    const dateObj = { date: date[0], time: date[1]}
    return dateObj;
}

export default DateAndTime;