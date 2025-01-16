import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'zh'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json'
    }, 
    ns: ['header', 'officehour'],
    defaultNS: 'header'
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)

ReactDOM.render(
  <Suspense fallback = {loadingMarkup}>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
