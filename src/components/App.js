import './App.css'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './Header.js'
import StyleChange from './StyleChange.js'
import Images from './Images.js'
import Footer from './Footer.js'
import HourGlass from './HourGlass.js'

const DefaultTheme = {  
  pageBackground: '#95D7AE',
  color: '#454851;',
  buttonColor: '#7BAE7F',
  background: '#95D7AE'
}

const FirstTheme = {
  pageBackground: '#EB5160',
  color: '#071013;',
  buttonColor: '#DFE0E2',
  background: '#DFE0E2'
}

const SecondTheme = {
  pageBackground: '#0090C1',
  color: '#022F40;',
  buttonColor: '#38AECC',
  background: '#38AECC'
}

const ThirdTheme = {
  pageBackground: '#FFE74C',
  color: '#38618C;',
  buttonColor: '#FFFFFF',
  background: '#35A7FF'
}

const FourthTheme = {
  pageBackground: '#D81159',
  color: '#EEE5E9;',
  buttonColor: '#218380',
  background: '#FFBC42'
}

const themes = {
  default: DefaultTheme,
  first: FirstTheme,
  second: SecondTheme,
  third: ThirdTheme,
  fourth: FourthTheme
}

function App() {
  const [theme, setTheme] = useState('default')

  const [hourGlassAnim, setHourGlassAnim] = useState(false)

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
          <StyleChange theme={theme} setTheme={setTheme} setHourGlassAnim={setHourGlassAnim}/>
          <Images theme={theme} />
          <Footer theme={theme} />
          <HourGlass hourGlassAnim={hourGlassAnim}/>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
