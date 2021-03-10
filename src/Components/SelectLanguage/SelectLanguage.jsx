import React from 'react'

import language from './SelectLanguage.module.scss'


class SelectLanguage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'EN'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className={language.container}>
          <label>
            Language:
            <select value={this.state.value} onChange={this.handleChange} className={language.select}>
              <option value="english">EN</option>
              <option value="russian">RU</option>
              <option value="belorussian">BEL</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default SelectLanguage;