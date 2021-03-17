import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import { onLanguageChange } from '../../actions/actions';

import language from './SelectLanguage.module.scss'

const SelectLanguage = ({ lang, onLanguage }) => {

  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    localStorage.setItem('lang', e.target.value);
    onLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <form className={language.container}>
      <label className = {language.label}>
        {t('language')}:
        <select value={lang} onChange={(e) => handleChange(e)} className={language.select}>
          <option value="en">{t('langOptions.EN')}</option>
          <option value="ru">{t('langOptions.RU')}</option>
          <option value="ua">{t('langOptions.UA')}</option>
        </select>
      </label>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLanguage: (payload) => dispatch(onLanguageChange(payload)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);