import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
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
        const { t } = this.props;
        return (
            <div className={CountryDescription.time}>
                <div>
                    {this.state.date.dayOfWeek}
                </div>

                <div>
                    {this.state.date.month}, {this.state.date.date}
                </div>
                <div>
                    {this.state.date.time}
                </div>           
            </div>
        );
    }
}

function material(citi) {
    const formattedDT = moment.tz(citi).format('LLLL'); 
    const formattedTM = moment.tz(citi).format('kk:mm:ss');
    const date = formattedDT.split(',')
    const dateTM = date[1].split(' ')
    const dateObj = { dayOfWeek: date[0], date: dateTM[2], month: dateTM[1], time: formattedTM }
    return dateObj;
}

export default withTranslation()(DateAndTime);