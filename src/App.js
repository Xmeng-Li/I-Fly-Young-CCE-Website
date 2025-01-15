import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: 'zh',
    name: '中文'
  },
  {
    code: 'en',
    name: 'English'
  }
]


function App() {
  const {t} = useTranslation()
  const releaseDate = new Date('2021-03-07')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 *24))


  return (
    <div className="container">
      <div className="d-flex justify-content-end">
      <div className="dropdown">
        <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        </button>
        <ul className="dropdown-menu">
        <li>
            <span className="dropDown-item-next">{t('language')}</span>
          </li>
          {languages.map(({code, name, country_code}) => (
            <li key={country_code}>
              <button 
                className="dropdown-item" 
                onClick={() => i18next.changeLanguage(code)}
              >
                {name}
              </button>
            </li>))}
        </ul>
      </div>
        
      </div>

      <div className="d-flex flex-column align-item-start"></div>
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
        <p>
          {t('days_since_release', {number_of_days})}
        </p>
    </div>
  );
}

export default App;
