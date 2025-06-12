import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'zh', 'zh-CN'],
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
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot instead of render
  root.render(
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  );
}
