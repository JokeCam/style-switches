import './App.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './Header.js'
import StyleChange from './StyleChange.js'
import Images from './Images.js'
import Footer from './Footer.js'
import HourGlass from './HourGlass.js'
import Currency from './Currency.js'
import { currencyInit, getCurrencyNames} from '../utils/currencyInfo.js'
import { countries } from '../utils/countries.js'

const DefaultTheme = {
  pageBackground: '#95D7AE',
  color: '#454851;',
  buttonColor: '#7BAE7F',
  background: '#95D7AE',
  specialColor: '#black'
}

const FirstTheme = {
  pageBackground: '#EB5160',
  color: '#071013;',
  buttonColor: '#DFE0E2',
  background: '#DFE0E2',
  specialColor: '#black'
}

const SecondTheme = {
  pageBackground: '#0090C1',
  color: '#022F40;',
  buttonColor: '#38AECC',
  background: '#38AECC',
  specialColor: '#black'
}

const ThirdTheme = {
  pageBackground: '#FFE74C',
  color: '#38618C;',
  buttonColor: '#FFFFFF',
  background: '#35A7FF',
  specialColor: '#black'
}

const FourthTheme = {
  pageBackground: '#D81159',
  color: '#EEE5E9;',
  buttonColor: '#218380',
  background: '#FFBC42',
  specialColor: '#black'
}

const themes = {
  default: DefaultTheme,
  first: FirstTheme,
  second: SecondTheme,
  third: ThirdTheme,
  fourth: FourthTheme
}

function App() {

  const reverseObjKeyVal = ((obj) => {
    const newObj = {};
    Object.keys(obj).forEach((x => { newObj[obj[x]] = x }));
    return newObj;
  });

  const [theme, setTheme] = useState('default')
  const [hourGlassAnim, setHourGlassAnim] = useState(false)
  const [initCurrency, setInitCurrency] = useState({})
  const [currencyNames, setCurrencyNames] = useState({})
  const [currencyCountries, setCurrencyCountries] = useState({})

  useEffect(() => {
    currencyInit()
      .then(res => setInitCurrency(res.rates))
  }, [])

  useEffect(() => {
    getCurrencyNames()
      .then(res => setCurrencyNames(res.symbols))
  }, [])

  useEffect(() => {
    const reversedObj = reverseObjKeyVal(countries)
    const lowercasedObj = Object.keys(reversedObj).reduce((n, k) => (n[k] = reversedObj[k].toLowerCase(), n), {});
    setCurrencyCountries(lowercasedObj)
  }, [])

  const contentStyle = {
    backgroundColor: `${themes[theme].background}`,
    transition: 'all .5s ease',
    position: 'fixed',
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  };

  return (
    <div className="content" style={contentStyle}>
      <div className="app">
        <ThemeProvider theme={themes[theme]}>
          <Header theme={theme} />
          <Currency initCurrency={initCurrency} currencyNames={currencyNames} currencyCountries={currencyCountries} theme={theme}/>
          <StyleChange theme={theme} setTheme={setTheme} setHourGlassAnim={setHourGlassAnim} />
          <Images theme={theme} />
          <Footer theme={theme} />
          <HourGlass hourGlassAnim={hourGlassAnim} />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
