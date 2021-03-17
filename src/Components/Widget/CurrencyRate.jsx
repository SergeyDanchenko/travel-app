import React, { Component } from "react";
import CountryDescription from './../CountryPage/Description/CountryDescription.module.scss';

class CurrencyRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: this.props.rateValue,
            localСurrency: null,
            eur: null,
            usd: null,
            rub: null,
          };
    }
    componentDidMount() {
        const URL = 'https://openexchangerates.org/api/latest.json?app_id=' 
                    + '0021bb0ddf954d4697ca6abb6c3bb460';

        fetch(URL)
            .then(res => res.json())
            .then(json => {
                const rate = this.state.rate
                this.setState({ 
                    localСurrency: json.rates[`${rate}`],
                    eur: json.rates.EUR,
                    usd: json.rates.USD,
                    rub: json.rates.RUB,
                });
            });
    }

    render() {
         const currencyEur = Math.ceil((this.state.eur / this.state.localСurrency) * 100) / 100
         const currencyUsd = Math.ceil((this.state.usd / this.state.localСurrency) * 100) / 100
         const currencyRub = Math.ceil((this.state.rub / this.state.localСurrency) * 100) / 100
        return (
            <div className={CountryDescription.currency}>
                <h3> 1 { this.state.rate }</h3>
                <span> { currencyEur }EUR </span>
                <span> { currencyUsd }USD </span>
                <span> { currencyRub }RUB </span>
            </div>
        );
    }
}

export default CurrencyRate